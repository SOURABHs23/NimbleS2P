import Employee from "../models/Employee.js";

export const addEmployee = async (req, res) => {
  try {
    let { name, position, salary } = req.body;
    name = name.toLowerCase();
    position = position.toLowerCase();
    const employee = new Employee({ name, position, salary });
    await employee.save();
    res.status(201).json({ message: "Employee added successfully", employee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEmployeeByName = async (req, res) => {
  try {
    let { name } = req.params;
    name = name.toLowerCase();
    console.log(name);

    const employee = await Employee.findOne({ name });
    if (employee) res.status(200).json(employee);
    else res.status(404).json({ message: "Employee not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getHighestSalaryEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne().sort({ salary: -1 }).limit(1);
    if (employee) res.status(200).json(employee);
    else res.status(404).json({ message: "No employees found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
