import React            from "react";
import { Link }         from "react-router-dom";

import "./LibraryElements.css";

const LibraryElements = (props) => {
  let bookInformation = props.element;
  let pic  // переменная для картинки

  typeof bookInformation.volumeInfo.imageLinks === "undefined" // если изображение не пришло
    ? (pic =
        "https://i.pinimg.com/736x/a3/32/eb/a332ebb5ace6d4a9ecc505efab52ef77.jpg") // то подгужается стандартное
    : (pic = bookInformation.volumeInfo.imageLinks.thumbnail);

  let categories = bookInformation.volumeInfo.categories;
  if (!bookInformation.volumeInfo.categories) categories = "No actual category"; // если не пришла категория 

  let id = bookInformation.id; // id книги 

  let author = bookInformation.volumeInfo.authors;
  if (!bookInformation.volumeInfo.authors) author = "Author not found"; // если не пришел автор

  return (
    <div className="ViewElement">
      <img src={pic} />
      <p className="categories"> {categories} </p>
      <Link className="goToBook" to={`/book/${id}/?key=${id}`}>
        <h2 className="title"> {bookInformation.volumeInfo.title} </h2>
      </Link>
      <Link className="goToBook" to={`/book/${id}/?key=${id}`}>
        <p className="authors"> {author} </p>
      </Link>
    </div>
  );
};

export default LibraryElements;
