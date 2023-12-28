import asyncHandler from "express-async-handler";

export const registerChat = asyncHandler(async (req, res, next) => {
    const data = req.body

    defaultResponse(res, 200, "Berhasil", data)
})