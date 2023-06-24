import React, { useState, useEffect } from "react";
import classes from "./SearchForm.module.css";
import { BASE_URL, API_KEY } from "../../utils/const";
import ResultsList from "./ResultList";

const SearchForm = () => {
  const [keywords, setKeywords] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // xử lý sự kiện khi nhấn nút Enter để submit
  const keyDownHandle = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit();
    }
  };
  // bắt sự kiện khi kích vào nút Search
  const handleSubmit = async (e) => {
    const url =
      BASE_URL +
      `/search/movie?api_key=${API_KEY}&language=en-US&query=` +
      keywords;
    const respone = await fetch(url);
    const data = await respone.json();
    setSearchResults(data.results);

    try {
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <div className={classes.SearchForm}>
        <form className={classes.FormInput}>
          <input
            type="text"
            onChange={(e) => setKeywords(e.target.value)}
            value={keywords}
            autoFocus={true}
            onKeyDown={keyDownHandle}
          />
          <svg
            width="30"
            height="30"
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </form>
        <div className={classes.button}>
          {/* xử lý sự kiện khi kích vào nút reset  */}
          <button className={classes.btnReset} onClick={(e) => setKeywords("")}>
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className={classes.btnSearch}
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        {/* hiện danh sách phim search */}
        {searchResults.length > 0 && <ResultsList movies={searchResults} />}
      </div>
    </div>
  );
};
export default SearchForm;
