import express from "express";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {setDoc,getFirestore,doc} from "firebase/firestore/lite"
import dotenv from "dotenv"

const firebaseConfig = {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: "real-time-vehicle-tracki-62ecc.firebaseapp.com",
    projectId: "real-time-vehicle-tracki-62ecc",
    storageBucket: "real-time-vehicle-tracki-62ecc.appspot.com",
    messagingSenderId: "132350944633",
    appId: "1:132350944633:web:b537913e8f57b4f5ce3ba8",
    measurementId: "G-RFW79PHRS9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp)
const collectionName  = "v_cars"


const addCar = async(req,res) =>  {
    const riderName =  req.query.riderName;
    const vehicleNo = req.query.vehicleNo;


    const data = {
        "riderName" : riderName,
        "vehicleNo" : vehicleNo,
    }

    await setDoc(doc(firestore,collectionName,vehicleNo),data)

    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(data))

}

export default addCar

