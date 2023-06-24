import React, {useState} from 'react';
import img1 from "../../assets/img/img1.png";
import img3 from "../../assets/img/img3.png";
import img2 from "../../assets/img/img2.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img55.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img7.png";
import img8 from "../../assets/img/img8.png";
import img9 from "../../assets/img/img9.png";
import "./Tabs.css"

interface Book {
    title: string;
    category: string;
    text: string;
    image: string;
}

const BookList: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const books: Book[] = [
        {
            title: ' THE SUBTLE ART OF NOT GIVING A F*CK',
            text: "by Mark Manson",
            category: 'Category 1',
            image: img1,
        },
        {
            title: '8 RULES OF LOVE',
            text: "by Jay Shetty",
            category: 'Category 1',
            image: img2,
        },
        {
            title: 'THE CREATIVE ACT',
            text: "by Rick Rubin with Neil Strauss",
            category: 'Category 1',
            image: img3,
        },
        {
            title: 'THE BOY, THE MOLE, THE FOX AND THE HORSE',
            text: "by Charlie Mackesy",
            category: 'Category 1',
            image: img4,
        },
        {
            title: 'HARRY POTTER',
            text: " by J.K. Rowling",
            category: 'Category 1',
            image: img5,
        },
        {
            title: 'IT ENDS WITH US',
            text: "by Colleen Hoover",
            category: 'Category 1',
            image: img6,
        },

        {
            title: 'IT STARTS WITH US',
            text: "by Colleen Hoover",
            category: 'Category 3',
            image: img7,
        },
        {
            title: 'HEART BONES',
            text: "by Colleen Hoover",
            category: 'Category 2',
            image: img8,
        },
        {
            title: 'SOMEONE ELSE',
            text: "by Jojo Moyes",
            category: 'Category 2',
            image: img9,
        },
    ];

    let filteredBooks: Book[] = books;

    if (selectedCategories.length > 0) {
        filteredBooks = books.filter(book => selectedCategories.includes(book.category));
    }

    return (

        <div id="tabs">
            <div className="container">
                <div>
                    <div className="text">
                        <h5>All Books</h5>
                        <h6>Here you can find all the books you need</h6>
                    </div>
                    <div className="category">
                        <div className="categories">
                            <div style={{display:"flex",alignItems:"flex-end" ,padding:"20px 0"}}>
                                <h1>Filters</h1>
                                <a href="">Clear filters</a>
                            </div>

                            <h3 >Genres</h3>


                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 1')}
                                    onChange={() => handleCategoryChange('Category 1')}
                                />
                                <h4>Autographed Books</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 2')}
                                    onChange={() => handleCategoryChange('Category 2')}
                                />
                                <h4> Sci-Fi</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 3')}
                                    onChange={() => handleCategoryChange('Category 3')}
                                />
                                <h4> For kids</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 4')}
                                    onChange={() => handleCategoryChange('Category 4')}
                                />
                                <h4> For teenagers</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 5')}
                                    onChange={() => handleCategoryChange('Category 5')}
                                />
                                <h4> Finance</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 6')}
                                    onChange={() => handleCategoryChange('Category 6')}
                                />
                                <h4> Detective</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 7')}
                                    onChange={() => handleCategoryChange('Category 7')}
                                />
                                <h4>Romantic</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 8')}
                                    onChange={() => handleCategoryChange('Category 8')}
                                />
                                <h4> Psychology</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 9')}
                                    onChange={() => handleCategoryChange('Category 9')}
                                />
                                <h4>Self-Improvement</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 9')}
                                    onChange={() => handleCategoryChange('Category 9')}
                                />
                                <h4>Educational</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 9')}
                                    onChange={() => handleCategoryChange('Category 9')}
                                />
                                <h4>Literature</h4>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('Category 9')}
                                    onChange={() => handleCategoryChange('Category 9')}
                                />
                                <h4>Religion</h4>
                            </label>
                        </div>

                        <div className="options">
                            <div className="just">
                                <select>
                                    <option><h4>Sort By</h4> <h5 >Popular</h5></option>
                                    <option><h5>Popular</h5></option>
                                    <option><h5>Popular</h5></option>
                                </select>
                            </div>
                            <div className="books">
                                {filteredBooks.map((book, index) => (
                                    <div className="book-all" key={index}>
                                        <img src={book.image} alt=""/>
                                        <h2> {book.title}</h2>
                                        <h3>{book.text}</h3>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>);
};

export default BookList;