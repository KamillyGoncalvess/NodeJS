import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/usecases/createCategory/createCategoryController";
import { ImportCategoryController } from "@modules/cars/usecases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/usecases/listCategories/ListCategoriesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", 
ensureAuthenticated,
ensureAdmin,
createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/import",
upload.single("file"),
ensureAuthenticated,
ensureAdmin,
importCategoryController.handle);

export { categoriesRoutes };