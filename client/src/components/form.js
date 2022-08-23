import React, {useRef, useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';


const TravelForm = ({tripList, setTripList}) => {
    const [title, setTitle] = useState("");
    const [place, setPlace] = useState("");
    const [about, setAbout] = useState('');
    const [pictures, setPictures] = useState("");
    const [picturesText, setPicturesText] = useState('');
    const [preview, setPreview] = useState('');
    const fileInputRef = useRef('');
    const navigator = useNavigate();
    const [errors, setErrors] = useState({}); 
    // {} = destructing and [ ] = is used for setting state!!!!


    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/travel/create",{
            title,
            place,
            about,
            pictures,
    })
    .then((res)=>{
        console.log(res.data);
        navigator("/")
    })
    .catch(err => {console.log(err); setErrors(err.response.data.error.errors)})
}
    // useEffect(() => {
    //     if (pictures) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setPreview(reader.result);
    //     };
    //     reader.readAsDataURL(pictures);
    //     } else {
    //     setPreview(null);
    //     }
    // }, [pictures]);



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
            <div className="pb-5" style={{backgroundImage:"url(/destinations.jpeg)"}}>
                <h1 className="text-light">Add A Trip</h1>
                <Link to={`/`}><button className="rounded-pill btn-lg btn-light btn btn-outline-dark">GO HOME</button></Link>
                <form className="mt-5 p-5 container"onSubmit={submitHandler}>
                    <div>
                    {errors.title && <span>{errors.title.message}</span>}
                        <label className="fs-2 text-light fw-bolder mb-3">Title:</label>
                        <input onChange={(e)=> setTitle(e.target.value)} value={title}  type="text"/>
                    </div>
                    <div>
                
                        <label className="fs-2 text-light fw-bolder mb-3">Place:</label>
                        <input
                            type="text"
                            value={place}onChange={(e) => setPlace(e.target.value)}
                        />
                    </div>
                    <div>
                    {errors.about && <span>{errors.about.message}</span>}
                        <label className="fs-2 text-light fw-bolder mb-3">About:</label>
                        <input
                        type="text"
                        value={about}onChange={(e) => setAbout(e.target.value)}
                        />
                    </div>
                    <div>
                
                    <label className="fs-2 text-light fw-bolder mb-3">Pictures:</label>
                    <input type="file" ref={fileInputRef} value={picturesText} multiple accept="image/png, image/gif, image/jpeg " 
                    onChange={(e) =>{
                        // const file = e.target.files[0];
                        // if (file && file.type.substring(0, 5) === "image") {
                        //     setPictures(file);
                        // } else {
                        //     setPictures(null);
                        // }
                        // setPicturesText(e.target.value)
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
                    <div>
                        <img src={pictures} style={{width: "400px"}}  alt="pics" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TravelForm;
