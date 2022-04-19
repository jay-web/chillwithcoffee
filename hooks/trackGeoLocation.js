import {useState, useContext} from "react";
import { StoreContext } from "./context";
import { ACTION_TYPES } from "./storeReducer";


const trackGeoLocation = () => {
    const { dispatch } = useContext(StoreContext)
    const [locationErrorMsg,  setLocationErrorMsg] = useState("");
    const [findingLocation, setFindingLocation] = useState(false);

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch({type: ACTION_TYPES.FETCH_LAT_LONG, payload: `${latitude},${longitude}` });
        setLocationErrorMsg("");
        setFindingLocation(false);
    } 

    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location !!!😪");
        setFindingLocation(false);
    }

    const trackLocation = () => {
        setFindingLocation(true);
        if(!navigator.geolocation){ 
            setLocationErrorMsg("Your browser doesn't support geolocation feature !! 😮");
            setFindingLocation(false);
        }else{
            navigator.geolocation.getCurrentPosition(success, error);
            setFindingLocation(false);
        }
    }

    return {
        trackLocation,
        locationErrorMsg,
        findingLocation

    }
}


export default trackGeoLocation;