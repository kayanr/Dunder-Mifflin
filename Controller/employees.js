const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Employee = require("../models/Employee");

exports.getEmployees = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(
      new ErrorResponse(`Employee not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: employee });
});

exports.createEmployee = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const employee = await Employee.create(req.body);

  res.status(201).json({
    success: true,
    data: employee,
  });
});

exports.updateEmployee = asyncHandler(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(
      new ErrorResponse(`Employee not found with id of ${req.params.id}`, 404)
    );
  }

  
  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: employee });
});

exports.deleteEmployee = asyncHandler(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(
      new ErrorResponse(`Employee not found with id of ${req.params.id}`, 404)
    );
  }
  

  await employee.remove();

  res.status(200).json({ success: true, data: {} });
});


