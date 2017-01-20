import {
  WINDOW_RESIZE,
} from 'src/constants/browser';

const initialState = {
  stageWidth: 0,
  stageHeight: 0,
};

export default function browser(state = initialState, action) {
  switch (action.type) {

    case WINDOW_RESIZE:
      return {
        stageWidth: action.payload.stageWidth,
        stageHeight: action.payload.stageHeight,
      };

    default:
      return state;
  }
}