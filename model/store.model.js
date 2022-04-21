const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, "Store must have name"]
    },
    address:{
        type: String,
    },
    imgUrl:{
        type:String,
    },
    websiteUrl:{
        type: String,
    },
    neighbourhood:{
        type:String
    },
    vote:{
        type: Number,
        default: 0
    }
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Stores = mongoose.models.Store || mongoose.model('Store', StoreSchema);

export default Stores;