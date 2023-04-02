import { Router } from "express";
import patientRoutes from "./patientRoutes.js";
import doctorRoutes from "./doctorRoutes.js";


const routes = Router();

routes.use("/patient", patientRoutes);
routes.use("/doctor", doctorRoutes);

export default routes;