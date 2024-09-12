import { Router } from "express";
import { getAllUsers, loginUser, userSignup, } from "../controllers/user-controllers.js";
import { LoginValidator, signupValidator, validate, } from "../utils/validators.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(LoginValidator), loginUser);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map