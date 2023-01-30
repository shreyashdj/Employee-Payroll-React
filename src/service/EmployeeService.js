import axios from "axios";

class EmployeeService {
  baseUrl = "http://localhost:8000/employee-payroll";

  addEmployee(data) {
    return axios.post(`${this.baseUrl}/add`, data);
  }

  getAllEmployees() {
    return axios.get(`${this.baseUrl}/getAll`);
  }

  delete = (employeeId) => {
    return axios.delete(`${this.baseUrl}/delete/${employeeId}`);
  };

  updateEmployee = (empId, data) => {
    console.log(empId);
    return axios.put(`${this.baseUrl}/update/${empId}`, data);
  };

  getById = (employeeId) => {
    return axios.get(`${this.baseUrl}/getById/${employeeId}`);
  };

  getByName = (empName) => {
    return axios.get(`${this.baseUrl}/getByName/${empName}`);
  };

  getByDept = (dept) => {
    return axios.get(`${this.baseUrl}/getByDept/${dept}`);
  };
}
export default new EmployeeService();