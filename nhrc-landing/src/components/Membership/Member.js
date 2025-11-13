import React, { useState, useEffect } from "react";
import "../../Styles/Member.css";
import { FaSquareWhatsapp } from "react-icons/fa6";
import EmployeeForm from "../Membership/Employeer";
import StudentForm from "../Membership/StudentForm";
import TPOForm from "../Membership/TPOForm";
import Employee1 from "../Membership/Employee1";

const stateDistrictData = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "Guntur", "Krishna", "Nellore", "Kurnool"],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam", "Rangareddy"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
};

function Member() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    state: "",
    district: "",
    pincode: "",
    profilePhoto: "",
    email: "",
    phone: "",
    candidateType: "",
    notification: false,
  });

  const [districts, setDistricts] = useState([]);
  const [showPersonalForm, setShowPersonalForm] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [subForm, setSubForm] = useState(null);

  useEffect(() => {
    setDistricts(stateDistrictData[formData.state] || []);
  }, [formData.state]);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("memberData"));
    if (saved) setFormData(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0]?.name || "" : value,
    }));
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const pinRegex = /^[0-9]{6}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.(com|in|org)$/;

    if (!nameRegex.test(formData.fullName))
      return alert("Full Name should contain only alphabets.");
    if (!formData.gender) return alert("Please select gender.");
    if (!formData.state || !formData.district)
      return alert("Please select both state and district.");
    if (!pinRegex.test(formData.pincode))
      return alert("Pincode must be 6 digits only.");
    if (!emailRegex.test(formData.email))
      return alert("Please enter a valid email address.");
    if (!phoneRegex.test(formData.phone))
      return alert("Phone number must be 10 digits.");
    if (!formData.candidateType)
      return alert("Please select Professional Candidate type.");
    return true;
  };

  const onBackToPersonal = () => {
    setShowPersonalForm(true);
    setSubForm(null);
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    
    localStorage.setItem("memberData", JSON.stringify(formData));
    sessionStorage.setItem("memberData", JSON.stringify(formData));

    setShowPersonalForm(false);
    setShowPopup(true);

    
    switch (formData.candidateType) {
      case "Employee":
        setSubForm(
          <EmployeeForm
            personalData={formData}
            onBackToPersonal={onBackToPersonal}
            onNextForm={(data) =>
              setSubForm(<Employee1 employeeData={data} onBack={onBackToPersonal} />)
            }
          />
        );
        break;
     case "Student":
  setSubForm(
    <StudentForm
      personalData={formData}
      onBackToPersonal={onBackToPersonal}
    />
  );
  break;

      case "TPO":
        setSubForm(
          <TPOForm
            personalData={formData}
            onBackToPersonal={onBackToPersonal}
          />
        );
        break;
      default:
        setSubForm(null);
    }
  };

  return (
    <div className="memberpage-wrapper d-flex justify-content-center align-items-center">
      {showPersonalForm && (
        <div className="memberpage-card shadow-lg border-0 rounded-4 member-card">
          <h4 className="memberpage-title text-center">Personal Details</h4>
          <form className="row g-3 p-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Gender <span className="text-danger">*</span>
              </label>
              <select
                name="gender"
                className="form-select"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Date of Birth <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                State <span className="text-danger">*</span>
              </label>
              <select
                name="state"
                className="form-select"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                {Object.keys(stateDistrictData).map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">
                District <span className="text-danger">*</span>
              </label>
              <select
                name="district"
                className="form-select"
                value={formData.district}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                {districts.map((district) => (
                  <option key={district}>{district}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Pin Code <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                className="form-control"
                maxLength="6"
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Profile Photo <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                name="profilePhoto"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Phone Number <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Professional Candidate <span className="text-danger">*</span>
              </label>
              <select
                name="candidateType"
                className="form-select"
                value={formData.candidateType}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>Employee</option>
                <option>Student</option>
                <option>TPO</option>
              </select>
            </div>

            <div className="col-md-6">
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="notification"
                  checked={formData.notification}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">
                  Notification <FaSquareWhatsapp className="iconwhat" />
                </label>
              </div>
            </div>

            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn memberpage-btn px-5 fw-bold">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content rounded-4 shadow-lg">
            <button className="close-btn" onClick={onBackToPersonal}>
              ✕
            </button>
            {subForm}
          </div>
        </div>
      )}
    </div>
  );
}

export default Member;
