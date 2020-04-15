import { Action } from '../actions';

export function createBox(state: string = '', action: Action) {
  switch (action.type) {
    case 'BOX_CREATE':
      return true;
    default:
      return state;
  }
}

// export function createBox(state: string = '', action: Action) {
// 	// switch (action.type) {
// 	// 	case 'BOX_CREATE':
// 	// 		console.log(123123);
// 	// 		// code...
// 	// 		break;

// 	// 	default:
// 	// 		// code...
// 	// 		break;
// 	// }
// }


export const reducers = {
  '@adminide-stack/createBox': createBox,
};

