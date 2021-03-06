import { imagesUrl } from "./coffee-store-image";

export const fetchCoffeeStores = async (latLng = "", origin= "") => {
    
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
      }
    };
    let URL = `https://api.foursquare.com/v3/places/nearby?query=coffee%20stores&near=${origin}`;

    if(latLng){
      URL = `https://api.foursquare.com/v3/places/nearby?query=coffee%20stores&ll=${latLng}`;
    }
  
    const response = await fetch(URL, options)
    
    const data = await response.json();
    console.log("dataaa ", data.results);
    const storeData = await data.results?.map((store, idx) => {
      return {
        id: store.fsq_id,
        name: store.name,
        imgUrl: imagesUrl[idx],
        websiteUrl: "",
        address: store.location.formatted_address,
        neighbourhood: "",
        vote: 0
      }
    })

    return storeData;
    
}

