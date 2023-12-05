import {body, validationResult} from "express-validator";

export const chooseAnswerProblemValidation = [
    body("answer")
        .notEmpty().withMessage("Answer is required")
        .isInt().withMessage("Answer must be integer"),

    (req, res, next) => {

        const errors = validationResult(req);
        const msg = errors.array().map((err) => {
            return {
                "text": err.msg
            }
        })

        if (!errors.isEmpty()) {
            return res.status(400).json({
                "status": "fail",
                "message": msg
            })
        }
        next()
    }
]

export const identityNumberAnswerValidation = [
    body("identityNumber")
        .notEmpty().withMessage("Identity number is required")
        .isInt().withMessage("Identity number must be integer"),

    (req, res, next) => {

        const errors = validationResult(req);
        const msg = errors.array().map((err) => {
            return {
                "text": err.msg
            }
        })

        if (!errors.isEmpty()) {
            return res.status(400).json({
                "status": "fail",
                "message": msg
            })
        }
        next()
    }
]

export const nameAnswerValidation = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isString().withMessage("Name must be string"),

    (req, res, next) => {

        const errors = validationResult(req);
        const msg = errors.array().map((err) => {
            return {
                "text": err.msg
            }
        })

        if (!errors.isEmpty()) {
            return res.status(400).json({
                "status": "fail",
                "message": msg
            })
        }
        next()
    }
]