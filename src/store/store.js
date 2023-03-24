import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools }                                  from "redux-devtools-extension";
import thunk                                                    from "redux-thunk";
import { setBooksReducer }                                      from "./setBooksReducer";

export const reducer = combineReducers({                    //хотел сделать несколько редьюсеров, но при выполнении не увидел смысла, решил оставить combineReducer
    setBooksReducer: setBooksReducer,
})

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store