import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // is going to give us back an object that contains all the different action creators that we provided in the first argument of the below function
  // But now, whenever we call these bound action creators, the return value from them will be automatically taken and provided to dispatch

  return bindActionCreators(actionCreators, dispatch);
};
