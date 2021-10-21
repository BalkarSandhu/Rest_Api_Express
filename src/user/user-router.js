import { Router } from "express";
import controllers from "./user-controller";
const router = Router();

router.get('/', controllers.getAll);
router.post('/', controllers.createOne);

export default router;