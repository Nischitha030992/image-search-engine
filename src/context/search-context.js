import React from "react";

const SearchContext = React.createContext({
    results: {},
    searchData: () => {}
});

export default SearchContext;