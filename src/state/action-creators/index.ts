import axios from 'axios';
// Dispatch is a type definition for the Dispatch function
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  // because using redux thunk
  // dispatch, how manually dispatch actions directly into the redux store and get them processed by the reducer
  return async (dispatch: Dispatch<Action>) => {
    // indicates to the reducer that about to make a request to go and find some list of repositories from npm
    // This is what will turn loading flag over to true etc
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term
          }
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        // all err objects in JS have a message property
        payload: err.message
      });
    }
  };
};
