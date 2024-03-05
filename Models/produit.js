const mongoose = require('mongoose')
const produitSchema = mongoose.Schema({
    name :String,
    decription:String ,
    prix:Number,
    categorie:{type:mongoose.Schema.Types.ObjectId,ref:'Categorie'}
})

const produit=mongoose.model("produit", produitSchema)
module.exports=produit;