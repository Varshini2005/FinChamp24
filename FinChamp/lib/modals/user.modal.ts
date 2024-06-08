import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: String,
        unique: true,
    },
    email: {
        type: String,
        required: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    photo: {
        type: String,
        required: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
});

const User = models?.User || model("User", UserSchema);

export default User;