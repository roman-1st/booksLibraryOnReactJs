import React                    from "react";
import SearchContainer          from "./searchContainer/searchContainer";
import SelectionContainer       from "./selectionContainer/selectionContainer";

import './header.css'


const Header = () => {
    return (
        <div className="SearchBlock">
            <h3> We can find any book from Google Books</h3>
                <SearchContainer />
                <SelectionContainer />
        </div>
    )
}

export default Header

// AIzaSyCZ2jludrKbY4ggW_1zlanwIJ-bpty3Seg - API ключ