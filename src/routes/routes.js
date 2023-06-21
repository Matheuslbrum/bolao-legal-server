import express from "express";
import { userController } from "../controllers/userController.js";
const router = express.Router();

router.get('/user', userController.getAllUsers)
router.post('/user', userController.createUser)

router.get('/score', userController.getAllScore)
router.post('/score', userController.createScore)

router.get('/adm', userController.getAdmInformation)
router.put('/adm', userController.updateAdmInformation)
router.delete('/adm', userController.deleteUsersAndScores)

router.put('/result/true', userController.setResult)
router.put('/result/false', userController.removeResult)



export default router;