import asyncHandler from 'express-async-handler'
import {message} from "../libs/messageGreeting.js"
import testCollection from "../config/firebase.js";
import {addDoc} from "firebase/firestore"
import {defaultResponse} from "../helpers/response.js";

const forgetKpjRules = [
    {answer: null, identityNumber: null, name: null},
]

export const chatGreeting = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        "status": "success",
        "message": message,
    })
})

export const chooseAnswerProblem = asyncHandler(async (req, res, next) => {

    if (req.body.answer === 1) {
        forgetKpjRules[0].answer = req.body.answer
        defaultResponse(res, 200, "Silahkan masukkan NIK anda", forgetKpjRules)
    }

})

export const identityNumberAnswer = asyncHandler(async (req, res, next) => {

    if (forgetKpjRules[0].answer === 1) {
        forgetKpjRules[0].identityNumber = req.body.identityNumber
        defaultResponse(res, 200, "Silahkan masukkan Nama Lengkap anda sesuai KTP", forgetKpjRules)
    }

    if (forgetKpjRules[0].answer === null) {
        defaultResponse(res, 200, "Silahkan pilih menu dibawah ini untuk memulai chat", message.message[2].choices)
    }

    // const data = {
    //     "identityNumber": req.body.identityNumber
    // }
    //
    // try {
    //     const docRef = await addDoc(testCollection, data)
    //     res.status(201).json({
    //         "status": "success",
    //         "data": req.body.identityNumber
    //     })
    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     res.status(500).json({
    //         "status": "error",
    //         "message": e
    //     })
    //     console.error("Error adding document: ", e);
    // }
})

export const nameAnswer = asyncHandler(async (req, res, next) => {

    if (forgetKpjRules[0].answer === null && forgetKpjRules[0].identityNumber === null) {
        defaultResponse(res, 200, "Silahkan pilih menu dibawah ini untuk memulai chat", message.message[2].choices)
    }

    if (forgetKpjRules[0].answer === 1 && forgetKpjRules[0].identityNumber === null) {
        defaultResponse(res, 200, "Silahkan masukkan NIK anda", forgetKpjRules)
    }

    if (forgetKpjRules[0].answer === 1 && forgetKpjRules[0].identityNumber !== null) {
        forgetKpjRules[0].name = req.body.name
        defaultResponse(res, 200, forgetKpjRules)
    }
})
