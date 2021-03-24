const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    Employee: {
        id: Number,
        name: String,
        title: String,
        department: {
            type: [String],
            enum: [
                "SALES",
                "CORPORATE",
                "ACCOUNTING",
                "RECEPTION",
                "HUMAN_RESOURCES"
            ],
            salary: Number,
            manager: String
    
        },
    }
  
});


module.exports = mongoose.model("Employee", EmployeeSchema);
