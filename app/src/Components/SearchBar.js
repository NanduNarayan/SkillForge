import React, { useRef } from 'react';
import '../css/searchBar.css'

export function SearchBar({ getQuery }) {
    const inputRef = useRef("");
    const submitForm = (e) => {
        e.preventDefault();
        getQuery(inputRef.current);
    };
    return (
        <form name="searchForm"className="search-form" onSubmit={submitForm}>
            <input
                type="search"
                className="search-bar"
                placeholder="Search keywords [eg: instructor name]"
                defaultValue={""}
                onChange={(e) => inputRef.current = e.target.value} />
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
}
