import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const apodDataArray =[];
        let apodDataObject ={};
        
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            // .get()
            .then(response => {
                console.log(response.data);
                // setPhotos(response.data);
                apodDataObject = response.data;
                apodDataArray.push(Object.values(apodDataObject));
                setPhotos(apodDataArray);
                console.log(photos);
            })
            .catch(error => {
                console.log('data not returned', error)
            });
    }, []);

    return (
        <div className='photo'>
            {photos.map((photo, index) => {
                return (
                    <PhotoCard
                    key={index}
                    title={photo[5]}
                    date={photo[0]}
                    pic={photo[2]}
                    explanation={photo[1]}
                    />
                );
        })}
        </div>
    );
}