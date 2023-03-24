import React                                        from "react";
import {  useNavigate, useSearchParams }            from "react-router-dom";
import { useSelector }                              from "react-redux";

import './Book.css'

let Book = () => {
    const state = useSelector(state => state.setBooksReducer)
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    let id = searchParams.get('key')

    const handleClick = () => {
        navigate(-1)
    }

    let book = state.data.find( (el) =>  el.id === id) // поиск этой книги в state

    let title = book.volumeInfo.title // Название книги
    let autors = book.volumeInfo.authors // Автор
    let description = book.volumeInfo.description // описание
    let category = book.volumeInfo.categories // категория книги

    let pic
    typeof book.volumeInfo.imageLinks === "undefined" // если изображение не пришло
    ? (pic =
        "https://i.pinimg.com/736x/a3/32/eb/a332ebb5ace6d4a9ecc505efab52ef77.jpg") // то подгужается стандартное
    : (pic = book.volumeInfo.imageLinks.thumbnail);
    
    let publishedDate = book.volumeInfo.publishedDate // дата публикации
    let previewLink = book.volumeInfo.previewLink // ссылка на гугл 

    return (
        <div className="bookContainer">
            <div className="mainContainer">
                <img src={pic} className="img"/>
                <div className="bookInformation">   
                    <h2> {title} </h2>
                    <h5> {autors} </h5>
                    <h6> {publishedDate} </h6>
                    <p> {description} </p>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <a href={previewLink}> Click here for a link to the book demo </a>  
                        <button onClick={handleClick} > go back to library </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book