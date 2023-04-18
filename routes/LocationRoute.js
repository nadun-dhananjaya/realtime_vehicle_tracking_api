import express from "express";
import setLocation from "../controller/LocationController/SetLocationController.js";

const locationRouter = express.Router()


locationRouter.get('/set-location',setLocation)


export default locationRouter

