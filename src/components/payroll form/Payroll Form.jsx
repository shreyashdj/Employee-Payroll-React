import './Payroll Form.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import profile1 from '../../assets/images/image1.png';
import profile2 from '../../assets/images/image2.png';
import profile3 from '../../assets/images/image3.png';
import profile4 from '../../assets/images/image4.png';
import EmployeeService from '../../service/EmployeeService';
import { Link, useParams } from 'react-router-dom';


function PayrollForm() {
    const [errorName, setErrorName] = useState('');
    const [errorSalary, setErrorSalary] = useState('');
    const [isUpdate, setUpdate] = useState(false);
    const [name, setName] = useState('');
    const [profilePic, setProfile] = useState('');
    const [gender, setGender] = useState('');
    const [startDate, setDate] = useState('');
    const [salary, setSalary] = useState('');
    const [note, setNotes] = useState('');
    const [departments, setDepartment] = useState([]);

    const dept = ["HR", "Sales", "Finance", "Others", "Engineer"];

    const handleChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            departments.push(value)
            setDepartment(departments)
        } else {
            let newDepartment = departments.filter((e) => e !== value)
            setDepartment(newDepartment)
        }
    };
    const params = useParams();
    const getEmployeeId = (employeeId) => {
        EmployeeService.getById(employeeId).then((data) => {
            let obj = data.data.data;
            setData(obj)
        })

    };
    useEffect(() => {
        if (Object.keys(params).length !== 0) {
            console.log('Get By Id Called');
            console.log(params.id);
            getEmployeeId(params.id);
            setUpdate(true);
        }
    }, [params.employeeId]);

    const setData = (obj) => {
        console.log('obj1', obj);
        setName(obj.name);
        setProfile(obj.profilePic);
        setGender(obj.gender);
        setDate(obj.startDate);
        setSalary(obj.salary);
        setNotes(obj.note);
        setDepartment(obj.departments);

        const dep = obj.departments;
        console.log(dep);
        console.log(dep[0]);
        if(dep[0] === "Others") {
            console.log(document.getElementById("others"));
            document.getElementById("others").click();
        }

        switch (obj.gender) {
            case 'Male': document.getElementById("male").click();
                break;
            default: document.getElementById("female").click();
                break;
        }

        switch (obj.profilePic) {
            case '../../assets/images/image1.png': document.getElementById("profile1").click();
                break;
            case '../../assets/images/image2.png': document.getElementById("profile2").click();
                break;
            case '../../assets/images/image3.png': document.getElementById("profile3").click();
                break;
            default: document.getElementById("profile4").click();
                break;
        }
    };

    const onSave = (e) => {
        console.log('Submit button clicked');
        if (name === "" || profilePic === "" || gender === "" || departments === [""] || startDate === "" || salary === "" || note === "") {
            alert("All Fields are Mandatory");
            return;
        }
        e.preventDefault();

        let employee = {
            name,
            profilePic,
            gender,
            departments,
            startDate,
            salary,
            note,
        }
        console.log('Employee Data', employee);

        if (isUpdate) {
            EmployeeService.updateEmployee(params.id, employee).then((data) => {
                var value = window.confirm(data);
                if (value === true) {
                    alert("update successfull!");
                } else {
                    window.location.reload();
                }
            });
        } else {
            EmployeeService.addEmployee(employee).then((response) => {
                console.log(response);
                alert("Data Added!!", response)
            })
        }
        setUpdate(false);
        onReset();
    }

    const onReset = () => {
        console.log('Reset button clicked');
        setName('');
        setProfile('');
        setGender('');
        setDate('');
        setSalary('');
        setNotes('');
        setDepartment([]);
    }

    const onNameChange = (value) => {
        const regexForOnlyChar = RegExp("^[A-z\\s]*$");
        const regexForFirstChar = RegExp("^[A-Z]{1}[a-zA-Z\\s]*$");
        const regexForMinChar = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (!(regexForOnlyChar.test(value))) {
            setErrorName("Only char allowed");
            setName(value);
        } else if (!(regexForFirstChar.test(value))) {
            setErrorName("First char should be upper case");
            setName(value);
        } else if (!(regexForMinChar.test(value))) {
            setErrorName("Min 3 char reqired");
            setName(value);
        } else {
            setErrorName('');
            setName(value);
        }
    }
    const onSalaryChange = (value) => {
        if (value < 10000) {
            setErrorSalary("Min Salary is 10,000");
            setSalary(value);
        } else if (value > 100000) {
            setErrorSalary("Max Salary is 1,00,000");
            setSalary(value);
        } else {
            setErrorSalary("");
            setSalary(value);
        }
    }
    return (
        <div>

            <Header />
            <div className="form-content">

                <form className="form">

                    <div className="form-head">
                        Employee Payroll Form
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor=''> Name : </label>
                        <input className="input" type="text" name="name" id="name" value={name} onChange={e => onNameChange(e.target.value)} placeholder="Your Name" required />
                        <span className='error-output'> {errorName} </span>
                    </div>

                    <div className="row-content">
                        <label className="label text">Profile Image : </label>
                        <div className="profile-radio-content wrap-content">
                            <label>
                                <input type="radio" name="profile" id="profile1" value='../../assets/images/image1.png' onClick={e => setProfile(e.target.value)} required />
                                <img src={profile1} className="profile" alt=""  />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile2" value='../../assets/images/image2.png' onClick={e => setProfile(e.target.value)} required />
                                <img src={profile2} className="profile" alt=""  />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile3" value='../../assets/images/image3.png' onClick={e => setProfile(e.target.value)} required />
                                <img src={profile3} className="profile" alt="" />
                            </label>
                            <label>
                                <input type="radio" name="profile" id="profile4" value='../../assets/images/image4.png' onClick={e => setProfile(e.target.value)} required />
                                <img src={profile4} className="profile" alt=""  />
                            </label>
                        </div>
                    </div>

                    <div className="row-content">
                        <label className="label text">Gender : </label>
                        <div>
                            <input type="radio" name="gender" id="male" value="Male" defaultChecked={gender === "Male"} onClick={e => setGender(e.target.value)} />
                            <label className="text">Male</label>
                            <input type="radio" name="gender" id="female" value="Female" defaultChecked={gender === "Female"} onClick={e => setGender(e.target.value)} />
                            <label className="text">Female</label>
                        </div>
                    </div>

                    <div className="row-content">
                        <label name="department" className="label text" >Department : </label>
                        <div className='wrap-content' >


                        <div>
                                    <input type="checkbox" className="checkbox" name="hr" id="hr" value="HR" onChange={handleChange} />
                                    <label className="text">HR</label>
                                    <input type="checkbox" className="checkbox" name="sales" id="sales" value="Sales" onChange={handleChange} />
                                    <label className="text">Sales</label>
                                    <input type="checkbox" className="checkbox" name="finance" id="finance" value="Finance" onChange={handleChange} />
                                    <label className="text">Finance</label>
                                    <input type="checkbox" className="checkbox" name="engineer" id="engineer" value="Engineer" onChange={handleChange} />
                                    <label className="text">Engineer</label>
                                    <input type="checkbox" className="checkbox" name="others" id="others" value="Others" onChange={handleChange} />
                                    <label className="text">Others</label>
                                </div>


                            {/* {e.target.value.dept.map((a) =>

                                <div>
                                    <input type="checkbox" className="checkbox" name="hr" id="hr" value="HR" onChange={handleChange} checked={target.value==="HR"}/>
                                    <label className="text">HR</label>
                                    <input type="checkbox" className="checkbox" name="sales" id="sales" value="Sales" onChange={handleChange} checked={target.value==="Sales"}/>
                                    <label className="text">Sales</label>
                                    <input type="checkbox" className="checkbox" name="finance" id="finance" value="Finance" onChange={handleChange} checked={target.value==="Finance"}/>
                                    <label className="text">Finance</label>
                                    <input type="checkbox" className="checkbox" name="engineer" id="engineer" value="Engineer" onChange={handleChange} checked={target.value==="Engineer"}/>
                                    <label className="text">Engineer</label>
                                    <input type="checkbox" className="checkbox" name="others" id="others" value="Others" onChange={handleChange} checked={target.value==="Others"}/>
                                    <label className="text">Others</label>
                                </div>
                            )} */}
                        </div>
                    </div>

                    <div className="row-content">
                        <label className="label">Start Date :</label>
                        <input type='date' className='startDate' value={startDate} onChange={e => setDate(e.target.value)}></input>
                    </div>

                    <div className="row-content">
                        <label className="label"> Salary : </label>
                        <input className="input" type="number" name="salary" id="salary" value={salary} onChange={e => onSalaryChange(e.target.value)} placeholder="Your Salary" required />
                        <span className='error-output'> {errorSalary} </span>
                    </div>

                    <div className="row-content">
                        <label htmlFor="notes" className="label text">Notes :</label>
                        <textarea name="notes" id="notes" className="input" value={note} onChange={e => setNotes(e.target.value)}></textarea>
                    </div>

                    <div className="buttonParent">
                        <button type="reset" className="resetButton button" onClick={onReset}>Reset</button>
                        <button type="submit" className="button submitButton" id="submitButton" onClick={onSave}>Submit</button>
                        {/* <Link to="/home" className="button submitButton" onClick={onSave}>Sumbit</Link> */}
                        {/* <a href='/home'>
                        <button type="cancel" className="button cancelButton" onClick={onCancel}>Cancel</button>
                        </a> */}
                        <Link to="/home" className="resetButton button cancelButton">Cancel</Link>

                    </div>
                </form>
            </div>
        </div>
    );
}
export default PayrollForm;