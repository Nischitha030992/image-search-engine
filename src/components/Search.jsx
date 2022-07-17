import { useContext } from "react";
import SearchContext from "../context/search-context";
import '../styles/search.css'

function Search({ searchText, setSearchText }) {
  const searchCtx = useContext(SearchContext);
  const searchImages = () => {
    searchCtx.searchData(searchText);
  };

  return (
    <form className="search" >
      <input type="text" placeholder="Search Images" name="search" value={searchText}
        onChange={(e) => setSearchText(e.target.value)} />
      <button type="button" onClick={searchImages} disabled={!searchText?.length}>Search</button>
    </form>

  );
}

export default Search;
