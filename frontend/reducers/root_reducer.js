import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BreweriesReducer from './breweries_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  breweries: BreweriesReducer
});

export default rootReducer;
