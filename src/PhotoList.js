import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                console.log(response.data);
                setPhotos(response.data);
            })
            .catch(error => {
                console.log('data not returned', error)
            });
    }, []);

    return (
        <div className='photo'>
            <PhotoCard title={photos.title} pic={photos.hdurl} explanation={photos.explanation} date={photos.date} />
        </div>
    );
}









// *
// === This version converts the data to an array and uses .map to iterate over the data ===
// === Does not work for this data because the spot in the array for the data changes each day ===
// *


// export default function PhotoList() {
//     const [photos, setPhotos] = useState([]);

//     useEffect(() => {
//         const apodDataArray =[];
//         let apodDataObject ={};
        
//         axios
//             .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
//             .then(response => {
//                 console.log(response.data);
//                 apodDataObject = response.data;
//                 apodDataArray.push(Object.values(apodDataObject));
//                 setPhotos(apodDataArray);
//                 console.log(photos);
//             })
//             .catch(error => {
//                 console.log('data not returned', error)
//             });
//     }, []);

//     return (
//         <div className='photo'>
//             {photos.map((photo, index) => {
//                 return (
//                     <PhotoCard
//                     key={index}
//                     title={photo[6]}
//                     date={photo[1]}
//                     pic={photo[3]}
//                     explanation={photo[2]}
//                     />
//                 );
//         })}
//         </div>
//     );
// }