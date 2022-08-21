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
            <h1>Your trips</h1>
            <Link to={`/travel/create`}>Add a new Trip</Link>
            <table >
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
                <Link to={`/travel/update/${travel._id}`}>Edit</Link>
                ||<Link to={`/travel/${travel._id}`}>Detials</Link>||
                <button onClick={(e) =>deleteTrip (travel._id)}>Delete</button>
                </td>
                </tr>
                })
            }
                </tbody>
            </table>
        </div>
    )
}
export default TripList;