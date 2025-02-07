import express from "express"
import { addTocCart,removeFromCart,getCart } from "../controlers/cartControlers.js"
import authMiddleware from "../middleware/auth.js";


const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addTocCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;

