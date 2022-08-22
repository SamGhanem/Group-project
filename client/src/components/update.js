import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';


const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState("");
    const [place, setPlace] = useState("");
    const [about, setAbout] = useState('');
    const [pictures, setPictures] = useState("");
    const [errors, setErrors] = useState("");
    const navigator = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/travel/' + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPlace(res.data.place);
                setAbout(res.data.about);
            })
            .catch(err => console.log(err))
    }, [])

    const updateHandler =(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/travel/" + id,{
            title,
            place,
            about,
            pictures,
    })
        .then((res)=>{
            console.log(res.data);
            navigator("/")
    })
        .catch(err => setErrors(err.response.data.error.errors))
        // console.log(setErrors(err.response.data));
}
    
    return(
        <div>
            <nav class="navbar navbar-light bg-light border-bottom border-dark border-5">
                <div class="container-fluid">
                    <a class="navbar-brand fs-1 fst-italic" href="#">
                        <img src="/VacaButton.webp" alt="" width="65" height="55" class="d-inline-block align-text-top mx-5" />
                        iTrip
                    </a>
                </div>
            </nav>
        <div class="pb-5" style={{backgroundImage:"url(/grassy.jpeg)"}}>
            <h1>Edit your {title} Trip</h1>
            <Link to={`/`}><button class="rounded-pill btn-lg btn-light btn btn-outline-dark">GO HOME</button></Link>
            <form class="mt-5 p-5 container"onSubmit={updateHandler}>
                <div>
                {errors.title && <span>{errors.title.message}</span>}
                    <label class="text-dark fw-bolder mb-3">Title:</label>
                    <input onChange={(e)=> setTitle(e.target.value)} value={title} name="title"  type="text"/>
                </div>
                <div>
                
                    <label class="text-dark fw-bolder mb-3">Place:</label>
                    <input
                        type="text"
                        value={place}onChange={(e) => setPlace(e.target.value)}
                    />
                </div>
                <div>
                {errors.about && <span>{errors.about.message}</span>}
                    <label class="text-dark fw-bolder mb-3">About:</label>
                    <input
                        type="text"
                        value={about}onChange={(e) => setAbout(e.target.value)}
                    />
                </div>
                <div>
                
                <label class="text-dark fw-bolder mb-3">Pictures:</label>
                <input
                    type="file"
                    value={pictures} onChange={(e) => setPictures(e.target.value)}
                />
            </div>
            <button class="mb-3 rounded-pill btn btn-light btn btn-outline-dark" type="submit">Add Trip</button>
            </form>
        </div>
        </div>
    );




}

export default Update