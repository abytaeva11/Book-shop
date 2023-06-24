import React from 'react';
// @ts-ignore
import look from "../Info/img/Product Image.png"


const Info = () => {
    return (
        <section id="info">
            <div className="container">
                <div className="info">
                    <img src={look} alt=""/>
                    <div className="info-block">
                        <h1>THE BOY , THE MOLE,THE FOX<br/>AND THE HORSE</h1>
                        <p>By Harlie Masckey</p>
                        <h4>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Consequuntur culpa eius e<br/>veniet ex necessitatibus <br/>officia.</h4>
                        <h2>$99</h2>
                        <div className="btns">
                            <button className="btn">Add to card</button>
                            <button className="btn2">1</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Info;