import 'gsap';

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
  return new Promise((resolve, reject) => {
    params.onComplete = resolve
    TweenMax.to(element, duration, params)
  })
}

/**
 * fromTo
 * 
 * @param {object} element    ... 
 * @param {number} duration   ... 
 * @param {object} from       ... 
 * @param {object} [to]       The options we want to pass to TweenMax.fromTo
 * 
 * @return {Promise} 
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
 * staggerFromset
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
