import bcrypt from "bcryptjs";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils.js";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(
        async(req, res) => {
            await User.remove({});
            const createdUsers = await User.insertMany(data.users);
            res.send({createdUsers});
        }
    ) 
)

userRouter.post(
    'sigin', 
    expressAsyncHandler(
        async(req, res) => {
            const user = await User.findOne({ email: req.body.email });
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token:generateToken(user)
                });
                return;
            }
            res.status(401).send({ message: 'Invalid Email or Password' });
        }
    )
)

export default userRouter;