import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/book")
      .then(res => setBooks(res.data.filter(book => book.category === "Free")))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Unlock your potential with our extensive collection of free course books. Empower yourself with invaluable skills through expertly curated materials designed to guide you every step of the way.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(item => <Cards item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default Freebook;
