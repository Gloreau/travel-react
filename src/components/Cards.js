import React from 'react';
import CardItem from './CardItem';
import './Card.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Checkout those destinations ! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={require('./images/img-9.jpg')} text="Explore the hidden Waterfall inside the jungle" label="Adventure" path='/services' />
                        <CardItem src={require('./images/img-8.jpg')} text="Explore the hidden Waterfall inside the jungle" label="Adventure" path='/services' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={require('./images/img-3.jpg')} text="Explore the hidden Waterfall inside the jungle" label="Adventure" path='/services' />
                        <CardItem src={require('./images/img-1.jpg')} text="Explore the hidden Waterfall inside the jungle" label="Cruze" path='/services' />
                        <CardItem src={require('./images/img-4.jpg')} text="Explore the hidden Waterfall inside the jungle" label="Adventure" path='/services' />

                    </ul>
                </div>
            </div>
        </div>
    )

}


export default Cards