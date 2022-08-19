import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';


const DisplayOne = (props) => {
    const {id} = useParams();
    const [trip, setTrip] = useState("")



    useEffect(() => {
        axios.get("http://localhost:8000/api/travel/" + id)
            .then( res => {
                console.log(res.data);
                setTrip(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    


    return (
        <div>
            <h1>Your Trip</h1>
            <Link to={`/`}>GO HOME</Link>
            <p>Title: {trip?.title}</p>
            <div>
                <p>Place: {trip?.place}</p>
            </div>
            <div>
                <p>About: {trip?.about}</p>
            </div>
            <div>
                <p>Pictures: {trip?.pictures}</p>
            </div>
        </div>
    )


}

export default DisplayOne;