import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployeeByName,
  getHighestSalaryEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);
router.get("/name/:name", getEmployeeByName);
router.get("/highest-salary", getHighestSalaryEmployee);

export default router;
