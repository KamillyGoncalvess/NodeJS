import { Router } from "express";
import { CreateCarController } from "@modules/cars/usecases/createCar/CreateCarController";
import uploadConfig from "@config/upload"
import multer from "multer";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListAvailableCarsController } from "@modules/cars/usecases/listAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/usecases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImagesController } from "@modules/cars/usecases/uploadCarImages/UploadCarImagesController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig);


carsRoutes.post("/", 
ensureAuthenticated,
ensureAdmin,
createCarController.handle);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post("/specifications/:id", ensureAuthenticated,
ensureAdmin, createCarSpecificationController.handle);

carsRoutes.post("/images/:id",
ensureAuthenticated,
ensureAdmin,
upload.array("images"),
 uploadCarImagesController.handle);

export { carsRoutes };