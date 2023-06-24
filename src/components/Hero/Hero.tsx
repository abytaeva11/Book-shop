import React from 'react';
// @ts-ignore
import img from "../Hero/img/Main image.png"
// @ts-ignore
import book2 from "../Hero/img/book2.png"
// @ts-ignore
import book3 from "../Hero/img/book3.png"
// @ts-ignore
import book4 from "../Hero/img/book4.png"
// @ts-ignore
import book5 from "../Hero/img/book5.png"
// @ts-ignore
import book6 from "../Hero/img/book6.png"
// @ts-ignore
import book7 from "../Hero/img/book7.png"
// @ts-ignore
import hover from "../Hero/img/hover1.png"
// @ts-ignore
import hover1 from "../Hero/img/hover2.png"
// @ts-ignore
import hover2 from "../Hero/img/hover3.png"
// @ts-ignore
import bio from "../Hero/img/bio1.png"
// @ts-ignore
import bio1 from "../Hero/img/bio2.png"
// @ts-ignore
import bio2 from "../Hero/img/bio3.png"
// @ts-ignore
import bio3 from "../Hero/img/bio4.png"
// @ts-ignore
import bio4 from "../Hero/img/bio5.png"
// @ts-ignore
import end from "../Hero/img/end1.png"


const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div>
                    <div className="hero">
                        <img src={img} alt="" width="1240px"/>
                        <h1>Welcome to our Bookshop</h1>
                        <p>A place where you can get all the books you want!</p>
                    </div>
                    <div>
                        <div className="title">
                            <h1>Genres</h1>
                            <div>
                                <a href="">View all</a>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-block">
                                <img src={book2} alt=""/>
                                <h3>Sci-Fi</h3>
                            </div>
                            <div className="block-block">
                                <img src={book3} alt=""/>
                                <h3>For kids</h3>
                            </div>
                            <div className="block-block">
                                <img src={book4} alt=""/>
                                <h3>Psychology</h3>
                            </div>
                            <div className="block-block">
                                <img src={book5} alt=""/>
                                <h3>Romantic</h3>

                            </div>
                            <div className="block-block">
                                <img src={book6} alt=""/>
                                <h3>Detective</h3>

                            </div>
                            <div className="block-block">
                                <img src={book7} alt=""/>
                                <h3>Finance</h3>
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <h1>New Books</h1>
                        <div className="block2">
                            <div className="block2-title1">
                                <img src={hover} alt=""/>
                                <h3>The Climate Book: <br/>The Facts and the <br/>Solutions
                                    <p>by Greta Thunberg</p>
                                </h3>
                            </div>
                            <div className="block2-title">
                                <img src={hover1} alt=""/>
                                <h3>Rest Is Resistance: <br/>A Manifesto</h3>
                                <p>by Tricia Hersey</p>
                            </div>
                            <div className="block2-title1">
                                <img src={hover2} alt=""/>
                                <h3>A New Name: <br/>Septology VI-VII</h3>
                                <p>by Jon Fosse</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="page">
                            <h1>Books</h1>
                            <div>
                                <a href="">View all</a>
                            </div>
                        </div>
                        <div className="block3">
                            <img src={bio} alt=""/>
                            <img src={bio1} alt=""/>
                            <img src={bio2} alt=""/>
                            <img src={bio3} alt=""/>
                            <img src={bio} alt=""/>
                            <img src={bio} alt=""/>
                            <img src={bio1} alt=""/>
                            <img src={bio2} alt=""/>
                            <img src={bio3} alt=""/>
                            <img src={bio} alt=""/>
                        </div>
                    </div>
                    <div className="block4">
                        <h1>About Us</h1>
                        <div className="title-text">
                            <img src={end} alt=""/>
                            <div>
                                <p>
                                    We believe that books have the power to change lives, and <br/>we're dedicated to
                                    helping our customers find the perfect <br/>book for them. Whether you're looking
                                    for an escape from <br/>reality, an educational read, or a book to inspire you,
                                    we've <br/>got you covered.
                                    <br/>Thank you for choosing to shop with us.We look forward to <br/>helping you
                                    discover
                                    your next favorite book!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;