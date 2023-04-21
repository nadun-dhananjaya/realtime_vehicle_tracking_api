import express from "express";
import addCar from "../controller/Cars/CarsAddController.js"
const locationRouter = express.Router()

locationRouter.post('/add',addCar)

export default locationRouter

