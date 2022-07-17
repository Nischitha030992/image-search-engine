import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import SearchContext from "./context/search-context";
import { searchImages } from "./services/search";

function App() {
  const [searchResults, setSearchResults] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchData = async () => {
    setIsLoading(true);
    const data = await searchImages(searchText, pageNumber);
    setIsLoading(false);
    setSearchResults(data.results);
    setTotalPage(data.total_pages);
  };
  const fetchNextPage = async () => {
    setIsLoading(true);
    const data = await searchImages(searchText, pageNumber);
    setSearchResults((res) => {
      return [...res, ...data.results];
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (!searchText || searchText.length === 0) {
      setSearchResults([]);
      setTotalPage(0);
    }
  }, [searchText]);
  useEffect(() => {
    if (totalPage > 0 && pageNumber <= totalPage) {
      fetchNextPage();
    }
  }, [pageNumber, totalPage]);
  window.onscroll = function () {
    let availableHeightMax = document.documentElement.offsetHeight + 1;
    let availableHeightMin = document.documentElement.offsetHeight - 1;
    let scrollHeight = window.innerHeight + document.documentElement.scrollTop;
    if (
      scrollHeight < availableHeightMax &&
      scrollHeight > availableHeightMin
    ) {
      setPageNumber((prevPageNumber) => {
        return ++prevPageNumber;
      });
    }
  };
  return (
    <SearchContext.Provider
      value={{
        results: searchResults,
        searchData: searchData,
      }}
    >
      <div className="App">
        <Search searchText={searchText} setSearchText={setSearchText} />
        {searchResults?.length > 0 && <SearchResults />}
        {isLoading && "Loading..."}
      </div>
    </SearchContext.Provider>
  );
}

export default App;
