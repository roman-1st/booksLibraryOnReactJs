import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayViewBooks.css";
import ViewElement from "./LibraryElements/LibraryElements";
import IsLoading from "./IsLoading/IsLoading";
import { getMoreFetchRequestLibrary } from "../../store/asynActions/getMoreFetch";
import LibraryElements from "./LibraryElements/LibraryElements";
// import { getFetchingRequest } from "../../store/asyncAction";

const DisplayViewBooks = () => {
  const state = useSelector((state) => state.setBooksReducer);
  const dispatch = useDispatch();
  console.log(state);

  let viewElement = state.data.map((el) => ( //
    <LibraryElements key={state.data.indexOf(el)} element={el} />
  ));

  return (
    <div className="DisplayViewBooks">
      <p className="foundResult"> Found {state.totalItems} books </p>
      {state.isLoading === true ? (
        <IsLoading />
      ) : (
        <>
          <div className="booksBlock">{viewElement}</div>
          <div className="loadMore">
            <button onClick={() => dispatch(getMoreFetchRequestLibrary(state))}>
              Load more!
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayViewBooks;
