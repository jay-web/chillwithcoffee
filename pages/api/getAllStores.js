import dbConnect from '../../middleware/database';
import Stores from "../../model/store.model";



const handler = (async (req, res) => {
    await dbConnect();

    try{
        let doc = await Stores.find();
        console.log(doc);
        res.json(doc);
    }catch(err){
        console.error(err.message);
        res.json(500);
        res.json({message: err.message})
    }
    
});

export default handler;