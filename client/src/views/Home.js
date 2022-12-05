import React, {useState} from "react";
import TripList from "../components/tripList";

const Home = (props)  => {
    const [tripList, setTripList]  = useState([]);
    const removeFromDom = id => {
        setTripList(tripList.filter(tripList => tripList._id !== id));
    }
    return(
        <>
        <TripList tripList={tripList} setTripList={setTripList} removeFromDom={removeFromDom} />
        </>
    )
}
export default Home;