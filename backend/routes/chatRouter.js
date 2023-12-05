import express from "express";
import {
    chatGreeting,
    chooseAnswerProblem,
    identityNumberAnswer,
    nameAnswer
} from "../controllers/forgetKPJController.js";
import {
    chooseAnswerProblemValidation,
    identityNumberAnswerValidation,
    nameAnswerValidation
} from "../validation/chatRequestValidation.js";

const router = express.Router();

router.get("/", chatGreeting)
router.post("/", chooseAnswerProblemValidation, chooseAnswerProblem)
router.post('/identity-number', identityNumberAnswerValidation, identityNumberAnswer)
router.post("/name", nameAnswerValidation, nameAnswer)

export default router;