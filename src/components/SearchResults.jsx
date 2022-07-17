import { useContext } from "react";
import SearchContext from "../context/search-context";
import Card from "react-bootstrap/Card";
import "../styles/searchResults.css";
function SearchResults() {
  const ctx = useContext(SearchContext);

  return (
    <ul className="center">
      <div className="container">
        {
          ctx.results?.map((res) => (
            <div className="img-block">
              <Card>
                <Card.Img variant="top" src={res.urls?.small} />
                <Card.Body>
                  <Card.Title className="card-title">{res.alt_description}</Card.Title>
                  
                </Card.Body>
              </Card>
            </div>
          ))

          // <div key={res.id} className='image-container d-flex justify-content-start m-3'>
          //   <img src={res.urls?.thumb} alt={res.title}></img>
          // </div>
        }
      </div>
    </ul>
  );
}

export default SearchResults;
