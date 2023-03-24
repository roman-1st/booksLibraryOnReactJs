import axios                                from "axios";
import { loadMoreAction, setIsLoading }     from "../setBooksReducer";

export const getMoreFetchRequestLibrary = (state) => {
    let index = state.startIndex // индекс начала загрузки
    let requestTitle = state.requestName // название запроса
    let category = state.isCategory // категория
    let sort = state.isSort // сориторовка

    return async function (dispatch) {
        dispatch(setIsLoading(true)) // отображение индикатора загрузки

        const params = new URLSearchParams({
            q: requestTitle,
            subject: category,
            dq: requestTitle,
            orderBy: sort,
            startIndex: index,
            langRestrict: 'ru',
            printType: 'books',
            maxResults: 20,
            key: 'AIzaSyB81jUn3WAhwSdoDGud5ZBS6EwqvXIHPqE'
        })
        const url = `https://www.googleapis.com/books/v1/volumes?${params.toString()}`
        const response = axios.get(url)
        .catch(error => alert(error.message));

        dispatch(loadMoreAction((await response).data, index))
    }
}

