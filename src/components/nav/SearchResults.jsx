import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        try {
          const response = await axios.get('https://dummyjson.com/products/search', {
            params: { q: query },
          });
          setResults(response.data.products);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Результаты поиска: {query}</h2>
      <div className="product-cards">
        {results.length > 0 ? (
          results.map((product) => (
            <div key={product.id} className="product-card">
              <img className="product-image" src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results" style={{ marginLeft: '-85px' }}>Ничего не найдено по запросу "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
