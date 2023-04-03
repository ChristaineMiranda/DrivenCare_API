import { Router } from "express";
import patientSchemas from "../schemas/patientSchemas.js";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import patientsController from "../controllers/patientControllers.js";
import authValidate from "../middlewares/authMiddleware.js";


const patientRoutes = Router();

patientRoutes.post("/signup", validateSchema(patientSchemas.signup), patientsController.create);
patientRoutes.post("/signin", patientsController.signin);
patientRoutes.get("/searchby", authValidate, patientsController.searchDoctors);
patientRoutes.post("/makeappointment", authValidate, patientsController.createAppointment);
patientRoutes.get("/availablemeetings/:id", authValidate, patientsController.viewAvailableMeetings);

export default patientRoutes;