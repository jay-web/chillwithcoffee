import { imagesUrl } from "./coffee-store-image";

export const fetchCoffeeStores = async () => {
    let origin = Intl.DateTimeFormat().resolvedOptions().timeZone;
    origin = origin.split("/")[0];
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: process.env.FOURSQUARE_API_KEY
      }
    };
  
    const response = await fetch(`https://api.foursquare.com/v3/places/nearby?query=coffee stores&near=${origin}`, options)
    
    const data = await response.json();
  
    const storeData = await data.results?.map((store, idx) => {
      return {
        id: store.fsq_id,
        name: store.name,
        imgUrl: imagesUrl[idx],
        websiteUrl: "",
        address: store.location.formatted_address,
        neighbourhood: ""
      }
    })

    return storeData;
    
}

