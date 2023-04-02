import { Router } from "express";
import signUpSchema from "../schemas/signUpSchema.js";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import patientsController from "../controllers/patientControllers.js";

const patientRoutes = Router();

patientRoutes.post("/signup", validateSchema(signUpSchema), patientsController.create);

export default patientRoutes;