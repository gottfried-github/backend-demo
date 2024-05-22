import mongoose, { Types } from 'mongoose'

interface PostInterface {
  createdBy: Types.ObjectId
  body: string
}

const PostSchema = new mongoose.Schema<PostInterface>({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})

const Post = mongoose.model<PostInterface>('Post', PostSchema)

export default Post
