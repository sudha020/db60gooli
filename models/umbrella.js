const mongoose = require("mongoose") 
const umbrellaSchema = mongoose.Schema({ 
    use: String, 
    type: String, 
    cost: Number 
}) 
 
module.exports = mongoose.model("umbrella",umbrellaSchema) 