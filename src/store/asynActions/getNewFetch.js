import axios                                from "axios";
import { setBooksLibrary, setIsLoading }    from "../setBooksReducer";

export const getNewFetchRequestLibrary = (state) => {
    console.log(state);
    let index = 0 // индекс начала загрузки
    let requestTitle = state.requestName // название запроса
    let category = state.isCategory // категория
    let sort = state.isSort // сориторовка

    return async function (dispatch) { 
        dispatch(setIsLoading(true)) // индикатор загрузки

        const params = new URLSearchParams({
            q: requestTitle,
            subject: category,
            dq: requestTitle,
            orderBy: sort,
            startIndex: 0,
            langRestrict: 'ru',
            printType: 'books',
            maxResults: 20,
            key: 'AIzaSyB81jUn3WAhwSdoDGud5ZBS6EwqvXIHPqE'
        })

        const url = `https://www.googleapis.com/books/v1/volumes?${params.toString()}`
        const response = axios.get(url)
        .catch(error => alert(error.message));

        dispatch(setBooksLibrary((await response).data, index))
    }
}

// `https://www.googleapis.com/books/v1/volumes/${state.id}?key=AIzaSyB81jUn3WAhwSdoDGud5ZBS6EwqvXIHPqE`
