import mongoose from "mongoose"

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sandiptabhattacharyya1234_db_user:sandipta1234@cluster1.yjrnrwt.mongodb.net/FOOD-DEL').then(()=> console.log("DB connected"))
}