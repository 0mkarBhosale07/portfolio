import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema({
    title: String,
    content:String,
    image:String,
    date:String,
},
{timestamps: true});

const Blog = mongoose.model.Blog || mongoose.model("Blog", blogSchema)

export default Blog;