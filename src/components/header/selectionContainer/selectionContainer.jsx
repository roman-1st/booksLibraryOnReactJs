import React                                            from "react";
import { useDispatch, useSelector }                     from "react-redux";
import { setChangeCategoriesAction, setChangeSortAction }     from "../../../store/setBooksReducer";

import './selectionContainer.css'

let SelectionContainer = () => {
    let dispatch = useDispatch()
    const state = useSelector(state => state.setBooksReducer)

    const categories = state.categories.map( (el) => <option key={el}> {el} </option>) // отрисовка выбора категорий
    const sorting = state.sorting.map( (el) => <option value={el} key={el}> {el} </option>) //  отрисовка релевантности поиска

    return (
        <div className="selectionBlock">
        <div >
            <p> Categories: </p>
            <select 
            defaultValue={state.isCategory} 
            onChange={(e) => {
                dispatch(setChangeCategoriesAction(e.target.value, state))         // изменение категории в state
                }}>
                {categories}
            </select>
        </div>
        <div >  
            <p> Sorting by: </p>
            <select 
            defaultValue={state.isSort}
            onChange={ (e) => {
                dispatch(setChangeSortAction(e.target.value, state))           // изменение категории в state
                }}> 
                {sorting}
            </select> 
        </div>
    </div>
    )
}

export default SelectionContainer