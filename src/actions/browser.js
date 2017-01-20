import {
  WINDOW_RESIZE,
} from 'src/constants/browser';

/**
 * windowResize
 */

export const windowResize = (stageWidth, stageHeight) => ({
  type: WINDOW_RESIZE,
  payload: {
    stageWidth,
    stageHeight,
  },
});