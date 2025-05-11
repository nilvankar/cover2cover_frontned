import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Popular Books</h2>
      
      <Slider {...settings} className="px-2">
        {books.data?.map((book, i) => (
          <div key={i} className="px-2">
            <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <img
                src={book["Image-URL-M"]}
                alt={book["Book-Title"]}
                className="w-full h-48 object-contain mb-3 rounded"
              />
              <h3 className="font-semibold text-lg truncate">{book["Book-Title"]}</h3>
              <p className="text-gray-600">{book["Book-Author"]}</p>
              <p className="text-sm text-blue-600 mt-1">
                {book["Year-Of-Publication"]}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}