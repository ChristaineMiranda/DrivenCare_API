import { Router } from "express";
import patientSchemas from "../schemas/patientSchemas.js";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import patientsController from "../controllers/patientControllers.js";

const patientRoutes = Router();

patientRoutes.post("/signup", validateSchema(patientSchemas.signup), patientsController.create);

export default patientRoutes;