import admin from "./firebase-service";
import * as Express from "express";

interface IRequest extends Express.Request {
    [key: string]: any
}

// admin.auth().verifyIdToken()

const getAuthToken = (req:IRequest, _, next) => {
    // Authorization: "Bearer 1234asdjkf"

    if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        req.authToken = req.headers.authorization.split(" ")[1];
    } else {
        req.authToken = null;
    }

    next();
}

export const checkIfAuthenticated = (req:IRequest, res:Express.Response, next) => {
    getAuthToken(req, res, async () => {
        try {
            const { authToken } = req;
            const userInfo = await admin.auth().verifyIdToken(authToken);
            req.authID = userInfo.uid;
        return next();
        } catch (error) {
            return res.status(401).send({Error: "You are not authorized"})
        }
    })
}