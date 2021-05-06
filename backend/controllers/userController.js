import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @des  Auth user & get token
// @ route POST /api/users/login
// @ Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  res.send({ email, password });
});

export { authUser };
