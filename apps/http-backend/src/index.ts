import express from 'express';
import jwt from "jsonwebtoken"
import Auth_middleware from "./Auth_middleware"
import { JWT_SECRET } from './config';

const app = express();


app.post('signup', async (req, res) => {
    const { username, password } = req.body;
    // Handle user signup logic here

    res.json({
        uesrId: 123
    })

}),

app.post('signin', async (req, res) => {
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

    res.json({
        roomId: 123
    })
})


app.listen(3003, () => {
    console.log('HTTP server listening on port 3003');
})