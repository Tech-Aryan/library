import React, { useEffect, useState } from 'react';
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/book")
      .then(res => setBooks(res.data.filter(book => book.category !== "Free")))
      .catch(console.log);
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500">here! :)</span></h1>
          <p className="mt-12">You must be an unturned page, because I'm eager to find out what comes next.</p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {books.map((item) => (
            <Cards  item={item}  key={item.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
