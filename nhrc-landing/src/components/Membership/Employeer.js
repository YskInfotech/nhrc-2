import React, { useState, useEffect } from "react";
import "../../Styles/EmployeeForm.css";
import { IoPlayBackOutline } from "react-icons/io5";

function Employeer({ personalData = {}, onBackToPersonal, onNextForm }) {
  const [formData, setFormData] = useState({
    organizationName: "",
    industry: "",
    designation: "",
    department: "",
    companyUrl: "",
    workingLocation: "",
    companyStrength: "",
    employeeId: "",
    experience: "",
    officialEmail: "",
    referralId: "",
  });

  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState(["", "", "", ""]);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    
    if (personalData?.email) {
      setFormData((prev) => ({ ...prev, officialEmail: personalData.email }));
    } else {
      const saved = JSON.parse(localStorage.getItem("employeeDetails"));
      if (saved?.employerData) {
        setFormData((prev) => ({ ...prev, ...saved.employerData }));
      }
    }
  }, [personalData]);

  const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

  const handleSendOtp = () => {
    if (!formData.officialEmail) {
      alert("Please enter your official email first!");
      return;
    }
    const otpCode = generateOtp();
    setOtp(otpCode);
    setOtpSent(true);
    alert(`OTP sent to ${formData.officialEmail}: ${otpCode}`);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...enteredOtp];
    newOtp[index] = value.slice(0, 1);
    setEnteredOtp(newOtp);
  };

  const handleVerifyOtp = () => {
    if (enteredOtp.join("") === otp) {
      setOtpVerified(true);
      alert("Email Verified Successfully!");
    } else {
      alert("Invalid OTP, please try again!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert("Please verify your email before proceeding!");
      return;
    }

    
    const combined = {
      personalData,
      employerData: { ...formData },
      selectedFiles,
    };

    
    localStorage.setItem("employeeDetails", JSON.stringify(combined));

    
    if (onNextForm) onNextForm(combined);
  };

  return (
    <div className="personaldetails-section">
      <h3 className="heading">EMPLOYEE DETAILS</h3>
      <form className="employee-form" onSubmit={handleNext}>
        <div className="row">
          <div className="col-md-6">
            <label>Organization Name*</label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              placeholder="Enter Organization Name"
              required
            />
          </div>

          <div className="col-md-6">
            <label>Industry*</label>
            <select name="industry" value={formData.industry} onChange={handleChange} required>
              <option value="">Select Industry</option>
              <option>Information Technology (IT)</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Manufacturing</option>
              <option>Finance</option>
              <option>Others</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Designation*</label>
            <select name="designation" value={formData.designation} onChange={handleChange} required>
              <option value="">Select Designation</option>
              <option>Developer</option>
              <option>Manager</option>
              <option>HR</option>
              <option>Tester</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Department*</label>
            <select name="department" value={formData.department} onChange={handleChange} required>
              <option value="">Select Department</option>
              <option>Development</option>
              <option>Testing</option>
              <option>HR</option>
              <option>Finance</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Company Website URL*</label>
            <input type="url" name="companyUrl" value={formData.companyUrl} onChange={handleChange} placeholder="Company Website URL" required />
          </div>

          <div className="col-md-6">
            <label>Working Location*</label>
            <input type="text" name="workingLocation" value={formData.workingLocation} onChange={handleChange} placeholder="Working Location" required />
          </div>

          <div className="col-md-6">
            <label>Company Strength*</label>
            <select name="companyStrength" value={formData.companyStrength} onChange={handleChange} required>
              <option value="">Select Strength</option>
              <option>1-50</option>
              <option>50-100</option>
              <option>100-200</option>
              <option>200-500</option>
              <option>500+</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Employee ID*</label>
            <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Enter Employee ID" required />
          </div>

          <div className="col-md-6">
            <label>Experience*</label>
            <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience (in years)" required />
          </div>

          <div className="col-md-6">
            <label>ID Card Proof*</label>
            <input type="file" accept=".jpg,.png,.pdf" multiple onChange={handleFileUpload} required />
            {selectedFiles.length > 0 && (
              <ul className="file-list">
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-md-6">
            <label>Official Email*</label>
            <div className="email-row">
              <input
                type="email"
                name="officialEmail"
                value={formData.officialEmail}
                onChange={handleChange}
                placeholder="Official Email"
                required
              />
              <button type="button" className="verify-btn" onClick={handleSendOtp} disabled={otpSent || otpVerified}>
                {otpVerified ? "Verified" : "Send OTP"}
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <label>Referral ID</label>
            <input type="text" name="referralId" value={formData.referralId} onChange={handleChange} placeholder="Referral ID" />
          </div>

          {otpSent && !otpVerified && (
            <div className="col-12 otp-section">
              <label>Email OTP*</label>
              <div className="otp-inline">
                {enteredOtp.map((digit, index) => (
                  <input key={index} type="text" maxLength="1" value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} />
                ))}
                <button type="button" className="otp-verify" onClick={handleVerifyOtp}>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="form-actions">
          <button type="button" className="btn back-btn" onClick={onBackToPersonal}>
            <IoPlayBackOutline className="mx-1" /> Back
          </button>
          <button type="submit" className="btn next-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Employeer;
