import { Router } from "express";
const router = Router();

/*import all controllers*/
import * as controllers from "../controllers/controller.js";

/*Questions Routes API*/
router
  .route("/questions")
  .get(controllers.getQuestions)
  .post(controllers.insertQuestions)
  .delete(controllers.dropQuestions);

/*Results Routes API*/
router
  .route("/results")
  .get(controllers.getResult)
  .post(controllers.storeResult)
  .delete(controllers.dropResult);

export default router;
