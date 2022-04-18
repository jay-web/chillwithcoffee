import {useState} from "react";


const trackGeoLocation = () => {
    const [latLng, setLatLng] = useState("");
    const [locationErrorMsg,  setLocationErrorMsg] = useState("");
    const [findingLocation, setFindingLocation] = useState(false);

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLatLng(`${latitude},${longitude}`);
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
        latLng,
        trackLocation,
        locationErrorMsg,
        findingLocation

    }
}


export default trackGeoLocation;