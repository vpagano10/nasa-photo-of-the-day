import React from 'react';

const PhotoCard = props => {
    return (
        <div className='photo-list' key={props.id}>
            <h2 className='img-title'>{`${props.title}`}</h2>
            <h2 className='img-date'><button className='date-button'>Date</button>{`: ${props.date}`}</h2>
            <img className='img-otd' alt='nasa pic of the day' src={`${props.pic}`} />
            <p className='img-description-top'><button className='description-button'>What do we see here?</button></p>
            <p className='img-description'>{`${props.explanation}`}</p>
        </div>
    );
};

export default PhotoCard;