import './Payroll Form.css';
import profile1 from '../../assets/images/image1.png';
import profile2 from '../../assets/images/image2.png';
import profile3 from '../../assets/images/image3.png';
import profile4 from '../../assets/images/image4.png';

function PayrollForm() {
    return (

        <div className="form-content">

            <form className="form" action='' onSubmit={''}>

                <div className="form-head">
                    Employee Payroll Form
                </div>

                <div className="row-content">
                    <label className="label text" htmlFor=''> Name : </label>
                    <input className="input" type="text" name="name" id="name" placeholder="Your Name" required />
                </div>

                <div className="row-content">
                    <label className="label text">Profile Image : </label>
                    <div className="profile-radio-content wrap-content">
                        <label>
                            <input type="radio" name="profile" id="profile1" required />
                            <img src={profile1} className="profile" alt="" />
                        </label>
                        <label>
                            <input type="radio" name="profile" id="profile2" required />
                            <img src={profile2} className="profile" alt="" />
                        </label>
                        <label>
                            <input type="radio" name="profile" id="profile3" required />
                            <img src={profile3} className="profile" alt="" />
                        </label>
                        <label>
                            <input type="radio" name="profile" id="profile4" required />
                            <img src={profile4} className="profile" alt="" />
                        </label>
                    </div>
                </div>

                <div className="row-content">
                    <label className="label text">Gender : </label>
                    <div>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label className="text">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label className="text">Female</label>
                    </div>
                </div>

                <div className="row-content">
                    <label name="department" className="label text">Department : </label>
                    <div className='wrap-content'>
                        <input type="checkbox" className="checkbox" name="hr" id="hr" value="HR" />
                        <label className="text">HR</label>
                        <input type="checkbox" className="checkbox" name="sales" id="sales" value="Sales" />
                        <label className="text">Sales</label>
                        <input type="checkbox" className="checkbox" name="finance" id="finance" value="Finance" />
                        <label className="text">Finance</label>
                        <input type="checkbox" className="checkbox" name="engineer" id="engineer" value="Engineer" />
                        <label className="text">Engineer</label>
                        <input type="checkbox" className="checkbox" name="others" id="others" value="Others" />
                        <label className="text">Others</label>
                    </div>
                </div>

                <div className="row-content">
                    <label className="label">Start Date :</label>
                    <input type='date' className='startDate'></input>
                </div>

                <div className="row-content">
                    <label className="label"> Salary : </label>
                    <input className="input" type="number" name="salary" id="salary" placeholder="Your Salary" required />
                </div>

                <div className="row-content">
                    <label htmlFor="notes" className="label text">Notes :</label>
                    <textarea name="notes" id="notes" className="input" ></textarea>
                </div>

                <div className="buttonParent">
                    <button type="reset" className="resetButton button">Reset</button>
                    <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                    <button className="button cancelButton">Cancel</button>
                </div>
            </form>
        </div>

    );
}
export default PayrollForm;