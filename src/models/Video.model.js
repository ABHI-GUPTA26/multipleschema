import mongoose,{Schema,model} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
  const videoSchema=new Schema({
       fileName:{
        type:String,// cloudinary se AYEGA jo url return karta hai string formate me
        required:true
       },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        view:{
            type:Number,
            required:true
        },
        isPublished:{
            type:Boolean,
            required:true
        },
        oweR:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
  },
  {timestamps:true})
  videoSchema.plugin(mongooseAggregatePaginate)
  const Video=model("Video",videoSchema)