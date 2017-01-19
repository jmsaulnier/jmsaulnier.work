import 'gsap';

const animateFunc = (func, element, duration, opts = {}) => {
  return new Promise((resolve, reject) => {
    opts.onComplete = resolve
    func(element, duration, opts)
  })
}  

const animateTo = animateFunc.bind(null, TweenMax.to)

/**
 * set
 */
export const set = (element, params = {}) => {
  return new Promise((resolve, reject) => {
    params.onComplete = resolve
    TweenMax.set(element, params)
  })
}

/**
 * to
 */
export const to = (element, duration, params = {}) => {
  return animateTo(element, duration, params);
}

/**
 * fromTo
 */
export const fromTo = (element, duration, from, to = {}) => {
  return new Promise(function(resolve, reject) {
    to.onComplete = resolve
    TweenMax.fromTo(element, duration, from, to)
  })
}

/**
 * staggerTo
 */
export const staggerTo = (element, duration, from, stagger) => {
  return new Promise(function(resolve, reject) {
    TweenMax.staggerTo(element, duration, from, stagger, resolve)
  })
}

/**
 *staggerFromset
 */
export const staggerFrom = (element, duration, from, stagger) => {
  return new Promise(function(resolve, reject) {
    TweenMax.staggerFrom(element, duration, from, stagger, resolve)
  })
}

/**
 * staggerFromTo
 */
export const staggerFromTo = (element, duration, from, to, stagger, position) => {
  return new Promise(function(resolve, reject) {
    TweenMax.staggerFromTo(element, duration, from, to, stagger, resolve)
  })
}

/**
 * all
 */
export const all = () => {
  return Promise.all;
}
