import logo from '../../assets/icons/icon1.png';
import './Header.css';

const Header = () => {
    return (

        <header className="header-content header">
            <div className="logo-content">
                <img src={logo} alt="" />
                <div>
                    <span className="emp-text">
                        EMPLOYEE PAYROLL
                    </span>
                </div>
            </div>
        </header>

    );
}
export default Header;