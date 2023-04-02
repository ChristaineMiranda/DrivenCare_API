import { Router } from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import doctorSchemas from "../schemas/doctorSchemas.js";
import doctorControllers from "../controllers/doctorControllers.js";


const doctorRoutes = Router();

doctorRoutes.post("/signup", validateSchema(doctorSchemas.signup), doctorControllers.create);

export default doctorRoutes;