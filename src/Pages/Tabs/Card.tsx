import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import img1 from "../../assets/img/img1.png";
import img3 from "../../assets/img/img3.png";
import img2 from "../../assets/img/img2.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img7.png";
import img8 from "../../assets/img/img8.png";
import img9 from "../../assets/img/img9.png";
import './Card.css'; // Import CSS fileFiShare2
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import { HiShare } from 'react-icons/hi';
interface Book {
  id: number;
  title: string;
  text: string;
  category: string;
  image: string;
}

interface CardProps {
  id: string;
}

const Card: React.FC<CardProps> = () => {
  const [heart, setHeart] = useState(false);
  const [share, setShare] = useState(false);

  const getShare = () => {
    setShare(true)
  }
  const getShareBlue = () => {
    setShare(false)
  }
  const getHeart = () => {
    setHeart(true);
  };

  const getHeartBlue = () => {
    setHeart(false);
  };

  const { id } = useParams<{ id: string }>();
  const books: Book[] = [
    {
        id: 1,
        title: ' THE SUBTLE ART OF NOT GIVING A F*CK',
        text: "by Mark Manson",
        category: 'Category 1',
        image: img1,
    },
    {
        id: 2,
        title: '8 RULES OF LOVE',
        text: "by Jay Shetty",
        category: 'Category 2',
        image: img2,
    },
    {
        id: 3,
        title: 'THE CREATIVE ACT',
        text: "by Rick Rubin with Neil Strauss",
        category: 'Category 3',
        image: img3,
    },
    {
        id: 4,
        title: 'THE BOY, THE MOLE, THE FOX  AND THE HORSE',
        text: "by Charlie Mackesy",
        category: 'Category 4',
        image: img4,
    },
    {
        id: 5,
        title: 'HARRY POTTER',
        text: " by J.K. Rowling",
        category: 'Category 5',
        image: img5,
    },
    {
        id: 6,
        title: 'IT ENDS WITH US',
        text: "by Colleen Hoover",
        category: 'Category 6',
        image: img6,
    },

    {
        id: 7,
        title: 'IT STARTS WITH US',
        text: "by Colleen Hoover",
        category: 'Category 7',
        image: img7,
    },
    {
        id: 8,
        title: 'HEART BONES',
        text: "by Colleen Hoover",
        category: 'Category 8',
        image: img8,
    },
    {
        id: 9,
        title: 'SOMEONE ELSE',
        text: "by Jojo Moyes",
        category: 'Category 9',
        image: img9,
    },

];
const selectedBook = books.find((book) => book.id === Number(id));

if (!selectedBook) {
  return <div>Book not found</div>;
}

return (
  <div id="deta">
    <div className="container">
      <div className="book-info">
        <div className='book-details'>
          <img src={selectedBook.image} alt={selectedBook.title} />
        </div>
        <div className="book-title"> 
        <div className='icon-main'>
            <div className='book-love'>
              <h2>{selectedBook.title}</h2> 
              </div>
              <div className='icon-book'>
                {heart ? (
          
              <AiTwotoneHeart className='heart-blue' onClick={getHeartBlue} />
    
             ) : (
              <AiOutlineHeart className='heart' onClick={getHeart} />
          ) }
          {
            share ? <HiShare className='shareBlue' onClick={getShareBlue} /> : <FiShare2 className='share' onClick={getShare}/>

          }
          </div>
        </div>
       
          

          <h3>{selectedBook.text}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h4>$99</h4>
          <div className='chet'><button>Add to Cart </button><h5></h5></div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Card;

