import { TOGGLE_SIDEBAR } from '../../constants';


export function toggleSidebar(state: Boolean = false, action: any) {
    switch (action.type) {
      case TOGGLE_SIDEBAR:
        return action.state;
      default:
    }
        return state;
  }


  export const reducers = {
    '@adminide-stack/sidebar': toggleSidebar,
  };
