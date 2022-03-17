import { combineReducers } from 'redux';
import articles from "./Article_reducer"

const rootReducer = combineReducers({
    articles
});
export default rootReducer;
