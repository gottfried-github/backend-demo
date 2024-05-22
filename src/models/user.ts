import mongoose from 'mongoose'

interface UserInterface {
  name: string
  email: string
  password: string
}

const UserSchema = new mongoose.Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = mongoose.model<UserInterface>('User', UserSchema)

export default User
