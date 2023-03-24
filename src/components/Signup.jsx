import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/index";
import { FormSection } from "../styles/ComponentStyles";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const defValue = {
    name: "",
    email: "",
    password: "",
    Cpassword: "",
  };
  const [formData, setFormData] = useState(defValue);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signup(formData);
    if (resp) {
      navigate("/");
    }
  };
  return (
    <FormSection>
      <h1 className="mainText sm">Signup to use iNotebook</h1>
      <form className="globalForm">
        <div className="inputDiv">
          <label htmlFor="text">Name</label>
          <input
            type="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            name="name"
            className="PrimaryInput"
            minLength="3"
            required
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            name="email"
            className="PrimaryInput"
            minLength="5"
            required
          />
        </div>
        <div className="inputDiv">
          <label
            htmlFor="
      password"
          >
            Password
          </label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Your password"
            name="password"
            className="PrimaryInput"
            minLength="5"
            required
          />
        </div>
        <div className="inputDiv">
          <label
            htmlFor="
      Cpassword"
          >
            Confirm Password
          </label>
          <input
            value={formData.Cpassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm your password"
            name="Cpassword"
            className="PrimaryInput"
            minLength="5"
            required
          />
        </div>

        <button
          disabled={
            formData.password.length < 5 ||
            formData.email < 5 ||
            formData.name.length < 5 ||
            formData.password !== formData.Cpassword
          }
          onClick={handleSubmit}
          className="PrimaryButton"
        >
          SignUp
        </button>
      </form>

      <div className="formBelowBox">
        <p>
          Already have a account?<Link to="/login"> Login</Link>
        </p>
      </div>
    </FormSection>
  );
};
export default Signup;
