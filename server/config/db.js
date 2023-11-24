import mongoose from 'mongoose';
import colors from 'colors';
const connetDB =async() => {
    try{
const conn = await mongoose.connect("mongodb+srv://sanjugag21it:sanju1234@cluster0.jmrnbez.mongodb.net/ecommerce")
console.log('Connected');
    }catch(error)
    {
        console.log(`Error ${error}`.bgRed.white)
    }
}
export default connetDB;