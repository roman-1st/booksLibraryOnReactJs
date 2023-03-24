// const allLeters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let randomID = ''
// for (let i = 0; i < 12; i++) randomID += allLeters[Math.floor(Math.random() * allLeters.length)] //
// console.log(randomID);

const initialState = {
  data: [],
  requestName: "book",
  totalItems: 0,
  startIndex: 0,
  categories: [
    "all",
    "art",
    "history",
    "biography",
    "computers",
    "medical",
    "poetry",
  ],
  isCategory: "all",
  sorting: ["relevance", "newest"],
  isSort: "relevance",
  isLoading: false,
  initialID: "",
};

const SET_REQUEST_TITLE = "SET_REQUEST_TITLE";
const SET_CATRGORIES = "SET_CATRGORIES";
const SET_SORTING = "SET_SORTING";
const SET_BOOKS_LIBRARY = "SET_BOOKS_LIBRARY";

const SET_IS_LOADING = "SET_IS_LOADING";
const LOAD_MORE_BOOKS = "LOAD_MORE_BOOKS";

export const setBooksReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_REQUEST_TITLE:           // изменение названия запроса в state
      return {
        ...state,
        requestName: action.data,
      };

    case SET_CATRGORIES:              // изменение категории поиска в state
      return {
        ...state,
        isCategory: action.payload,
      };

    case SET_SORTING:                 // изменение релевантности поиска в state
      return {
        ...state,
        isSort: action.payload,
      };

    case SET_BOOKS_LIBRARY:           // изменение отображаемых книг в state на основе параметров поиска
      return {
        ...state,
        data: action.data.items,
        totalItems: action.data.totalItems,
        isLoading: false,
        startIndex: action.index + 20,
      };

    case LOAD_MORE_BOOKS:                 //подгрузка в state книг по имеющимся параметрам поиска
      // console.log(action.data.items);
      return {
        ...state,
        data: [...state.data, ...action.data.items],
        isLoading: false,
        startIndex: action.index + 20,
        totalItems: action.data.totalItems,
      };

    case SET_IS_LOADING:                  // отрисовка и скрытие индикатора загрузки 
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};


export const setRequestTitleAction = (data) => ({
  type: SET_REQUEST_TITLE,
  data,
});

export const setChangeCategoriesAction = (payload) => ({ 
  type: SET_CATRGORIES,
  payload,
});

export const setChangeSortAction = (payload) => ({ 
  type: SET_SORTING, 
  payload 
});

export const setBooksLibrary = (data, index) => ({
  type: SET_BOOKS_LIBRARY,
  data,
  index,
});

export const loadMoreAction = (data, index) => ({
  type: LOAD_MORE_BOOKS,
  data,
  index,
});

export const setIsLoading = (bool) => ({ 
  type: SET_IS_LOADING, 
  payload: bool,
});
