import React, { useEffect }             from "react";
import { useDispatch, useSelector }     from "react-redux";
import { getNewFetchRequestLibrary }    from "../../../store/asynActions/getNewFetch";
import { setRequestTitleAction }        from "../../../store/setBooksReducer";

import "./searchContainer.css";

let SearchContainer = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => state.setBooksReducer);
  let bookTitleRef = React.createRef(); // получение значения из input ( строка поиска )

  useEffect(() => {                                                 // первичная загрузка
    dispatch(getNewFetchRequestLibrary(state));
  }, []);
    
  function search(e) {                                              // поиск при нажатии enter       
    if (e.keyCode == 13) dispatch(getNewFetchRequestLibrary(state));
  }

  return (
    <div className="inputBlock">
      <input
        className="inputPlace"
        onChange={() => dispatch(setRequestTitleAction(bookTitleRef.current.value,))}
        onKeyDown={(e) => search(e)}
        placeholder="enter book title"
        ref={bookTitleRef}
      />
      <button
        className="searchButton"
        onClick={() => {
          dispatch(getNewFetchRequestLibrary( state));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchContainer;
