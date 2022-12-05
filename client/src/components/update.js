import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState("");
    const [place, setPlace] = useState("");
    const [about, setAbout] = useState('');
    const [pictures, setPictures] = useState([]);
    const [picturesText, setPicturesText] = useState('');
    const fileInputRef = useRef('');
    const [errors, setErrors] = useState("");
    const navigator = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/travel/' + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPlace(res.data.place);
                setAbout(res.data.about);
                setPictures(res.data.pictures);
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
            <nav className="navbar navbar-light bg-light border-bottom border-dark border-5">
                <div className="container-fluid">
                    <a className="navbar-brand fs-1 fst-italic" href="#">
                        <img src="/VacaButton.webp" alt="" width="65" height="55" className="d-inline-block align-text-top mx-5" />
                        iTrip
                    </a>
                </div>
            </nav>
        <div className="pb-5" style={{backgroundImage:"url(/grassy.jpeg)"}}>
            <h1>Edit your {title} Trip</h1>
            <Link to={`/`}><button className="rounded-pill btn-lg btn-light btn btn-outline-dark">GO HOME</button></Link>
            <form className="mt-5 p-5 container"onSubmit={updateHandler}>
                <div>
                {errors.title && <span>{errors.title.message}</span>}
                    <label className="text-dark fw-bolder mb-3">Title:</label>
                    <input onChange={(e)=> setTitle(e.target.value)} value={title} name="title"  type="text"/>
                </div>
                <div>
                
                    <label className="text-dark fw-bolder mb-3">Place:</label>
                    <input
                        type="text"
                        value={place}onChange={(e) => setPlace(e.target.value)}
                    />
                </div>
                <div>
                {errors.about && <span>{errors.about.message}</span>}
                    <label className="text-dark fw-bolder mb-3">About:</label>
                    <input
                        type="text"
                        value={about}onChange={(e) => setAbout(e.target.value)}
                    />
                </div>
                <div>
                
                <label className="fs-2 text-light fw-bolder mb-3">Pictures:</label>
                    <input type="file" ref={fileInputRef} value={picturesText} multiple accept="image/png, image/gif, image/jpeg " 
                    onChange={(e) =>{
                        const file = e.target.files[0];
                        const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = () => {
                                console.log(reader.result, "look here for the pic ")
                            const imageData = reader.result;
                            setPictures(imageData);
                            };

                    }} />
                    </div>
                    
            <button className="mb-3 rounded-pill btn btn-light btn btn-outline-dark" type="submit">Add Trip</button>
            </form>
            <div>
                <img src={pictures} style={{width: "400px"}}  alt="pics" />
            </div>
        </div>
        </div>
    );
}

export default Update