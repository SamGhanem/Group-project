import React, {useState} from "react";
import TripList from "../components/tripList";

const Home = (props)  => {
    const [tripList, setTripList]  = useState([]);
    const removeFromDom = _id => {
        setTripList(tripList.filter(tripList => tripList._id !== _id));
    }
    return(
        <>
        <TripList tripList={tripList} setTripList={setTripList} removeFromDom={removeFromDom} />
        </>
    )

}
export default Home;