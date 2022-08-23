import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
// import pic from '../components/images/thiccboylogo.jpg';
import ImageSlider from '../components/imageSlider';
import images from '../images/images';



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
            <nav className="navbar navbar-light bg-light border-bottom border-dark border-5">
                <div className="container-fluid">
                    <a className="navbar-brand fs-1 fst-italic" href="#">
                        <img src="/VacaButton.webp" alt="" width="65" height="55" className="d-inline-block align-text-top mx-5" />
                        iTrip
                    </a>
                </div>
            </nav>
            <div className="pb-5" style={{backgroundImage:"url(/castle.jpeg)"}}>
                <h1>Details From Your {trip?.title} Trip</h1>
                <Link to={`/`}><button className="mb-3 rounded-pill btn-lg btn-light btn btn-outline-dark">GO HOME</button></Link>

                <div className="row d-flex justify-content-center mb-3">
                    <div className="col-sm-3">
                        <div className="card bg-secondary text-light">
                            <div className="card-body">
                                <h5 className="card-title fst-italic">Title Of My Trip</h5>
                                <p className="card-text fs-3">{trip?.title}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mb-3">
                    <div className="col-sm-3">
                        <div className="card bg-secondary text-light">
                            <div className="card-body">
                                <h5 className="card-title fst-italic">Where Did I Go?</h5>
                                <p className="card-text fs-3">{trip?.place}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mb-3">
                    <div className="col-sm-3">
                        <div className="card bg-secondary text-light">
                            <div className="card-body">
                                <h5 className="card-title fst-italic">What Did I Do?</h5>
                                <p className="card-text fs-3">{trip?.about}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mb-3">
                    <div className="col-sm-3">
                        <div className="card bg-secondary text-light">
                            <div className="card-body">
                                <h5 className="card-title fst-italic">Here Are My Memories</h5>
                                <img style={{width: "400px"}} className=" card-text fs-3" src={trip?.pictures} alt="pic"  />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ImageSlider images= {images} />
                </div>

            </div>
        </div>
    )


}

export default DisplayOne;