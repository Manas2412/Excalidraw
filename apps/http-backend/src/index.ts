import express, { json } from 'express';
import jwt from "jsonwebtoken"
import Auth_middleware from "./Auth_middleware"
import { JWT_SECRET } from '@repo/backend-common/config';
import { CreateroomSchema, CreateUserSchema, SigninSchema } from '@repo/common/types';

const app = express();


app.post('signup', async (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return ;
    }
    // Handle user signup logic here

    res.json({
        uesrId: 123
    })

}),

    app.post('signin', async (req, res) => {
        const data = SigninSchema.safeParse(req.body);
        if (!data.success) {
            res.json({
                message: "Incorrect inputs"
            })
            return;
        }

        // Handle user login logic here
        const userId = 1;
        const token = jwt.sign({
            userId
        }, JWT_SECRET);
        res.json({
            token
        })
    })


app.post('room', Auth_middleware, async (req, res) => {
    //db call
    const data = CreateroomSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return ;
    }

    res.json({
        roomId: 123
    })
})


app.listen(3003, () => {
    console.log('HTTP server listening on port 3003');
})