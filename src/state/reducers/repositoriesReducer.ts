import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}


const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  // if (action.type === 'search_repositiories_success') {
  //   // 100% certainty that 'action' satisfies the
  //   // SearchRepositoriesSuccessAction interface
  //   action.payload
  // }

  // an action is always going to be an object that must have a type property (and - optionally - a payload)

  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certain that 'action' is SearchRepositoriesSuccessAction
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
