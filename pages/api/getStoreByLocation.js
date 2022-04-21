import {fetchCoffeeStores} from "../../lib/coffee_store";


const getStoreByLocation = async (req, res) => {

    try{
        let {latLong} = req.query;
        let response = await fetchCoffeeStores(latLong);
        res.status(200);
        res.json(response);

    }catch(err){
        res.status(500);
        res.json({message: "Something went wrong " + err.message});

    }
}

export default getStoreByLocation;