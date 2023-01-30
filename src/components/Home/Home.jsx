import './Home.css'
import Header from '../Header/Header';
import profile1 from '../../assets/images/image1.png';
import profile2 from '../../assets/images/image2.png';
import profile3 from '../../assets/images/image3.png';
import profile4 from '../../assets/images/image4.png';
import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
        };
    };
    fetchData() {
        EmployeeService.getAllEmployees().then((response) => {
            console.log('Response \n', response);                                // additionl
            this.setState({ employeeList: response.data.data });
        });
    };
    componentDidMount() {
        this.fetchData();
        console.log('Props \n', this.props);                                   // additionl
    };
    deleteEmployee(empId) {
        console.log("Delete Clicked");
        console.log("Employee id" + empId);
        EmployeeService.delete(empId);
        window.location.reload();
    };


    updateEmployee = (empId) => {
        console.log('Edit Clicked');
        console.log("Employee id" + empId);
        this.props.history.push(`payrollform/${empId}`);
    };


    render() {
        return (
            <div>
                <Header />
                <div className="main-content">
                    <div className="table-head">
                        <div className="emp-detail-text">
                            Employee Details
                            <div className="emp-count">
                                {this.state.employeeList.length}
                            </div>
                        </div>
                        <Link to="/payrollform" className="add-button"> {" "} + Add Emp </Link>
                    </div>

                    <div className="table-main">
                        <table id="table-display" className="table">

                            <tr>
                                <th>Emp Id</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Start Date</th>
                                <th>Notes</th>
                                <th>Actions</th>
                            </tr>
                            <tbody>
                                {
                                    this.state.employeeList.map((employee) => {
                                        return (
                                            <tr key={employee.employeeId}>

                                                <td>{employee.employeeId}</td>
                                                <td>
                                                    <img src={
                                                        employee.profilePic === "../../assets/images/image1.png" ? profile1 :
                                                            employee.profilePic === "../../assets/images/image2.png" ? profile2 :
                                                                employee.profilePic === "../../assets/images/image3.png" ? profile3 :
                                                                    profile4
                                                    }
                                                        alt="ProfilePic" />
                                                </td>
                                                <td>{employee.name}</td>
                                                <td>{employee.gender}</td>
                                                <td>
                                                    {employee.departments.map(dept =>
                                                        <div className="dept-label" id="dept">
                                                            {dept}
                                                        </div>
                                                    )}
                                                </td>
                                                <td>{employee.salary}</td>
                                                <td>{employee.startDate}</td>
                                                <td>{employee.note}</td>
                                                <td>
                                                    <Link to={`/payrollform/${employee.employeeId}`}>
                                                        <img
                                                            onClick={() => this.updateEmployee(employee.employeeId)}
                                                            src={editIcon}
                                                            alt="edit" />
                                                    </Link>
                                                    <img
                                                        onClick={() => this.deleteEmployee(employee.employeeId)}
                                                        src={deleteIcon}
                                                        alt="delete" />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;