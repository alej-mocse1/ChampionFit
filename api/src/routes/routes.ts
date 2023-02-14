import { Router } from "express";
const router : Router = Router()


router.get('/',(req , res) => {
 res.send({prop1: '2222'})
})

export default router