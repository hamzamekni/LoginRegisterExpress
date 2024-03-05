const mongoose = require('mongoose')
const categorieSchema = mongoose.Schema({
    name :String,
    decription:String
    
})

const Categorie=mongoose.model("categorie", categorieSchema)
module.exports=Categorie;