import dbConnect from '../../middleware/database';
import Stores from "../../model/store.model";


const handler = (async (req, res) => {
    await dbConnect()
    if(req.method !== "PATCH"){
        res.json({message: "HTTP method should be patch"})
    }
    try{
        
        const {id, ...updatedBody} = req.body;
        console.log(id)
        const response = await Stores.findByIdAndUpdate(id, updatedBody, {
            new: true,
            runValidators: true,
          });
    
        res.status(200)
        res.json(response);

    }catch(err){
        res.status(500);
        console.error(err.message);
        res.json({message: err.message})
        
    }
});


export default handler;