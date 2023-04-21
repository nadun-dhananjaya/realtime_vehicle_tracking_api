import express from "express";
import setLocation from "../controller/LocationController/SetLocationController.js";
import addCar from "../controller/Cars/CarsAddController.js"
const locationRouter = express.Router()


locationRouter.post('/set-location',setLocation)

locationRouter.post('/car/add',addCar)

export default locationRouter

