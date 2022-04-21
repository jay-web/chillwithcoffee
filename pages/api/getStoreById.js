import dbConnect from '../../middleware/database';
import Stores from "../../model/store.model";




const handler = (async (req, res) => {
    await dbConnect()

    try{
        const id = req.query.id;
        console.log(id)
        const response = await Stores.findById(id);
        console.log({response});
        res.status(200)
        res.json(response);

    }catch(err){
        res.status(500);
        console.error(err.message);
        res.json({message: err.message})
        
    }
});


export default handler;