import React, { useState, useEffect } from "react";
import "../../Styles/EmployeeForm.css";
import { FaSyncAlt } from "react-icons/fa";

const Employeer = ({ onBackToPersonal }) => {
const [personalData, setPersonalData] = useState(null);
const [formData, setFormData] = useState({
organizationName: "",
industry: "",
department: "",
designation: "",
companyUrl: "",
workingLocation: "",
companyStrength: "",
employerId: "",
experience: "",
officialEmail: "",
userName: "",
password: "",
confirmPassword: "",
referralId: "",
captchaInput: "",
});

const [captcha, setCaptcha] = useState(generateCaptcha());
const [errors, setErrors] = useState({});


useEffect(() => {
const memberData = localStorage.getItem("memberData");
if (memberData) {
setPersonalData(JSON.parse(memberData));
}
}, []);


function generateCaptcha() {
const chars =
"ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789";
let text = "";
for (let i = 0; i < 6; i++)
text += chars.charAt(Math.floor(Math.random() * chars.length));
return text;
}

const refreshCaptcha = () => setCaptcha(generateCaptcha());

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};


const validateForm = () => {
let newErrors = {};
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|[\w-]+\.(in|org))$/;
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
const alphaRegex = /^[A-Za-z\s]+$/;


if (!formData.organizationName.match(alphaRegex))
  newErrors.organizationName = "Only alphabets allowed";
if (!formData.department.match(alphaRegex))
  newErrors.department = "Only alphabets allowed";
if (!formData.companyUrl.match(urlRegex))
  newErrors.companyUrl = "Enter valid URL (http/https)";
if (!formData.companyStrength || isNaN(formData.companyStrength))
  newErrors.companyStrength = "Enter valid number";
if (!formData.employerId) newErrors.employerId = "Required field";
if (!formData.experience) newErrors.experience = "Required field";
if (!formData.officialEmail.match(emailRegex))
  newErrors.officialEmail = "Enter valid email";
if (!formData.password) newErrors.password = "Password required";
if (formData.password !== formData.confirmPassword)
  newErrors.confirmPassword = "Passwords do not match";
if (formData.captchaInput !== captcha)
  newErrors.captchaInput = "Invalid captcha";

setErrors(newErrors);
return Object.keys(newErrors).length === 0;


};


const handleSubmit = (e) => {
e.preventDefault();
if (validateForm()) {
const combinedData = {
personalDetails: personalData || {},
employeeDetails: formData,
};


  localStorage.setItem("employeeFormData", JSON.stringify(combinedData));
  sessionStorage.setItem("employeeFormData", JSON.stringify(combinedData));

  alert("Employee details submitted successfully!");
  onBackToPersonal();
}


};

return ( <div className="employee-form-wrapper"> <div className="employee-card"> <h4 className="employee-title">EMPLOYEE DETAILS</h4> <form onSubmit={handleSubmit} className="employee-form"> <div className="row"> <div className="col"> <label>
Organization Name<span className="required">*</span> </label> <input
             type="text"
             name="organizationName"
             value={formData.organizationName}
             onChange={handleChange}
             placeholder="Organization Name"
             required
           />
{errors.organizationName && <small>{errors.organizationName}</small>} </div>

        <div className="col">
          <label>
            Industry<span className="required">*</span>
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          >
            <option value="">Select Industry</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Healthcare</option>
            <option>Manufacturing</option>
          </select>
        </div>

        <div className="col">
          <label>
            Department<span className="required">*</span>
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            required
          />
          {errors.department && <small>{errors.department}</small>}
        </div>

        <div className="col">
          <label>
            Designation<span className="required">*</span>
          </label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          >
            <option value="">Select Designation</option>
            <option>Developer</option>
            <option>Tester</option>
            <option>Manager</option>
            <option>HR</option>
          </select>
        </div>

        <div className="col">
          <label>
            Company URL<span className="required">*</span>
          </label>
          <input
            type="url"
            name="companyUrl"
            value={formData.companyUrl}
            onChange={handleChange}
            placeholder="Company URL"
            required
          />
          {errors.companyUrl && <small>{errors.companyUrl}</small>}
        </div>

        <div className="col">
          <label>
            Working Location<span className="required">*</span>
          </label>
          <input
            type="text"
            name="workingLocation"
            value={formData.workingLocation}
            onChange={handleChange}
            placeholder="Working Location"
            required
          />
        </div>

        <div className="col">
          <label>
            Company Strength<span className="required">*</span>
          </label>
          <input
            type="number"
            name="companyStrength"
            value={formData.companyStrength}
            onChange={handleChange}
            placeholder="Company Strength"
            required
          />
          {errors.companyStrength && <small>{errors.companyStrength}</small>}
        </div>

        <div className="col">
          <label>
            Employer ID<span className="required">*</span>
          </label>
          <input
            type="text"
            name="employerId"
            value={formData.employerId}
            onChange={handleChange}
            placeholder="Enter Employer ID"
            required
          />
        </div>

        <div className="col">
          <label>
            Experience<span className="required">*</span>
          </label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience"
            required
          />
        </div>

        <div className="col">
          <label>
            Official Email<span className="required">*</span>
          </label>
          <input
            type="email"
            name="officialEmail"
            value={formData.officialEmail}
            onChange={handleChange}
            placeholder="Official Email"
            required
          />
          {errors.officialEmail && <small>{errors.officialEmail}</small>}
        </div>

        <div className="col">
          <label>
            User Name<span className="required">*</span>
          </label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="User Name"
            required
          />
        </div>

        <div className="col">
          <label>
            Password<span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          {errors.password && <small>{errors.password}</small>}
        </div>

        <div className="col">
          <label>
            Confirm Password<span className="required">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
        </div>

        <div className="col">
          <label>Referral ID</label>
          <input
            type="text"
            name="referralId"
            value={formData.referralId}
            onChange={handleChange}
            placeholder="Referral ID"
          />
        </div>

        {/* Captcha */}
        <div className="captcha-col">
          <label>
            CAPTCHA<span className="required">*</span>
          </label>
          <div className="captcha-box">
            <span className="captcha-text">{captcha}</span>
            <button
              type="button"
              onClick={refreshCaptcha}
              className="captcha-refresh"
            >
              <FaSyncAlt />
            </button>
          </div>
          <input
            type="text"
            name="captchaInput"
            value={formData.captchaInput}
            onChange={handleChange}
            placeholder="Enter Captcha"
            required
          />
          {errors.captchaInput && <small>{errors.captchaInput}</small>}
        </div>
      </div>

      <div className="form-actions">
        <button type="button" onClick={onBackToPersonal} className="back-btn">
          Back
        </button>
        <button type="submit" className="register-btn">
          Register
        </button>
      </div>
    </form>
  </div>
</div>


);
};

export default Employeer;
