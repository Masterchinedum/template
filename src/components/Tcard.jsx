import React from 'react';

function Tcard(props) {
    const {img, title, date, location, description} = props;
    return (
        <div className="tcard">
            <div className="tcard-image">
                <img src={img} alt="places visited" />
            </div>
            <div className="tcard-details">
                <div className="tcard-location">
                    <svg xmlns="http://www.w3.org/2000/svg" className = 'tcardicon' >
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A" />
                    </svg>
                    <p className = 'Location' >{location}</p>
                    <p  className = 'VGmap'>View on Google Maps </p>
                </div>
                <h2 className="tcard-title">{title}</h2>
                <p className= 'tcard-Date'> {date} </p>
                <p className="tcard-description">{description}</p>
            </div>
        </div>
    );
}

export default Tcard;

// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg