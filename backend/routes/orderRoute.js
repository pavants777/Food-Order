import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verifyOrder ,userOders,listOrders,updateStatus} from "../controlers/orderControler.js"

const orderRouter = express.Router();


orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder)          
orderRouter.post("/userorders",authMiddleware,userOders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
export default orderRouter;