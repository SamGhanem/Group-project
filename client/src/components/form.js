import React, {useRef, useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';


const TravelForm = ({tripList, setTripList}) => {
    const [title, setTitle] = useState("");
    const [place, setPlace] = useState("");
    const [about, setAbout] = useState('');
    const [pictures, setPictures] = useState('');
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
    useEffect(() => {
        if (pictures) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(pictures);
        } else {
        setPreview(null);
        }
    }, [pictures]);



    return(
        <div>
            <h1>Add A Trip</h1>
            <Link to={`/`}>GO HOME</Link>
            <form onSubmit={submitHandler}>
                <div>
                {errors.title && <span>{errors.title.message}</span>}
                    <label>Title:</label>
                    <input onChange={(e)=> setTitle(e.target.value)} value={title}  type="text"/>
                </div>
                <div>
                
                    <label>Place:</label>
                    <input
                        type="text"
                        value={place}onChange={(e) => setPlace(e.target.value)}
                    />
                </div>
                <div>
                {errors.about && <span>{errors.about.message}</span>}
                    <label>About:</label>
                    <input
                        type="text"
                        value={about}onChange={(e) => setAbout(e.target.value)}
                    />
                </div>
                <div>
                
                <label>Pictures:</label>
                <input type="file" ref={fileInputRef} value={picturesText} accept="image/png, image/gif, image/jpeg" 
                onChange={(e) =>{
                    const file = e.target.files[0];
                    if (file && file.type.substring(0, 5) === "image") {
                        setPictures(file);
                    } else {
                        setPictures(null);
                    }
                    setPicturesText(e.target.value)
                }} />
            </div>
                <input type="submit" value="ADD TRIP" />
            <div>
                <img src={preview} onClick={() => {setPictures(null); }} />
            </div>
            </form>
        </div>
    );
}
export default TravelForm;
