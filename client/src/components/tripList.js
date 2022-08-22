import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const TripList = (props) => {
    const {tripList, setTripList, removeFromDom} = props
    //{} = destructing and [ ] = is used for setting state!!!!
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/travel")
    	.then((res)=>{
	    console.log(res.data);
        setTripList(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [setTripList]);


    const deleteTrip = (_id) => 
axios.delete('http://localhost:8000/api/travel/' + _id)
.then(res => {
    removeFromDom(_id)
    })
    
    return (
        <div>
            <nav class="navbar navbar-light bg-light border-bottom border-dark border-5">
                <div class="container-fluid">
                    <a class="navbar-brand fs-1 fst-italic" href="#">
                        <img src="/VacaButton.webp" alt="" width="65" height="55" class="d-inline-block align-text-top mx-5" />
                        iTrip
                    </a>
                </div>
            </nav>
            <div class="pb-5" style={{backgroundImage:"url(/Background.jpeg)"}}>
                <h1>Your trips</h1>
                <Link to={`/travel/create`}><button class="rounded-pill btn-lg btn-light btn btn-outline-dark">Add a new Trip</button></Link>
                <table className='table table-bordered border-primary table-hover bg-light container mt-5 p-5'>
                    <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            About
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>{
                    tripList.map((travel, index)=>{
                    return <tr>
                        <td> {travel.title}</td>
                        <td> {travel.about} </td>
                    <td>
                    <Link to={`/travel/update/${travel._id}`}><button class="me-3 rounded-pill btn btn-success btn btn-outline-light">Edit</button></Link>
                    <Link to={`/travel/${travel._id}`}><button class="me-3 rounded-pill btn btn-info btn btn-outline-warning">Details</button></Link>
                    <button class="rounded-pill btn btn-outline-danger btn btn-dark" onClick={(e) =>deleteTrip (travel._id)}>Delete</button>
                    </td>
                    </tr>
                    })
                }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TripList;