import * as THREE from 'three';

import { createBackground } from './bg';
import FBO from './fbo';

const OrbitControls = require('three-orbit-controls')(THREE)

export default class App {

  constructor (fboSize, canvas) {
    this.width = window.innerWidth
    this.height = window.innerHeight
		this.fboSize = fboSize || 256 // size of texture 256 x 256 = 65K particles
		this.canvas = canvas;

    this.lastTime = 0 // time of the last animation frame

    window.addEventListener('resize', this.onResize.bind(this), false)
  }

  init3dScene () {
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
			// antialias: true,
			canvas: this.canvas,
      alpha: true
    })

    this.renderer.setSize(this.width, this.height)
    this.camera = new THREE.PerspectiveCamera(30, this.width / this.height, 1, 1000)
    this.camera.position.z = 5
    //this.controls = new OrbitControls(this.camera, document.body)

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        datatexture: {type: 't', value: null},
        pointSize: {type: 'f', value: 1.0}
      },
      transparent: true,
      // blending: THREE.AdditiveBlending,
      vertexShader: require('./glsl/render.vert'),
      fragmentShader: require('./glsl/render.frag')
    })

    const geo = new THREE.PlaneBufferGeometry(1, 1, this.fboSize, this.fboSize)
    this.particles = new THREE.Points(geo, this.material)
    this.scene.add(this.particles)
  }

  initFBO () {
    this.positionFBO = new FBO(this.renderer, this.fboSize, require('./glsl/fboPosition.vert'), require('./glsl/fboPosition.frag'))
  }

  onResize () {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  update () {
    requestAnimationFrame(this.update.bind(this))

    const now = performance.now()
    let delta = (now - this.lastTime) / 1000
    if (delta > 1) delta = 1 // safety cap on large deltas
    this.lastTime = now
		this.render(now, delta)
  }

  render (now, delta) {
    this.positionFBO.update(now, delta)

    // Send FBO texture to shaders
    this.material.uniforms.datatexture.value = this.positionFBO.texture;

    // Render the scene on the screen
    this.renderer.render(this.scene, this.camera)
  }


  initBg () {
    this.background = createBackground()
    this.scene.add(this.background)
  }

  start () {
    this.init3dScene()
    this.initFBO()
    this.initBg()
    this.update()
  }

}
