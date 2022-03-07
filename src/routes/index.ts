import { Router } from "express";
import CarRoutes from "../routes/CarRoutes";

const router = Router();
router.use("/cars", CarRoutes);

export default router;
