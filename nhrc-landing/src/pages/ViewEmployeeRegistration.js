import React, { useState } from "react";
import "../Styles/ViewEmployeeRegistration.css";
import {
  FaFilter,
  FaSearch,
  FaEnvelope,
  FaWhatsapp,
  FaDownload,
  FaTrash,
  FaCommentDots,
  FaTimes,
} from "react-icons/fa";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

const employeeData = [
  {
    id: "NHRC-E-01",
    name: "Manikanta",
    phone: "7816085460",
    email: "manikanta@gmail.com",
    industry: "Human Resources (HR)",
    state: "Telangana",
    organization: "Vibrant HR Consultants",
    designation: "HR Coordinator",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "NHRC-E-02",
    name: "Arjun Reddy",
    phone: "9876543211",
    email: "arjunreddy@gmail.com",
    industry: "Human Resource Consulting",
    state: "Telangana",
    organization: "Human Resource Consulting",
    designation: "HR Manager",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "NHRC-E-03",
    name: "Anil Nair",
    phone: "9876543214",
    email: "anilnair@gmail.com",
    industry: "Human Resources Management",
    state: "Telangana",
    organization: "HR Director",
    designation: "HR Director",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "NHRC-E-04",
    name: "Priya Sharma",
    phone: "9876543212",
    email: "priyasharma@gmail.com",
    industry: "Human Resources Management",
    state: "Telangana",
    organization: "Head of Human Resources",
    designation: "Head of HR",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

function ViewEmployeeRegistration() {
  const [employees, setEmployees] = useState(employeeData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [viewEmployee, setViewEmployee] = useState(null);
  const [sendOptions, setSendOptions] = useState({
    email: false,
    whatsapp: false,
    message: false,
  });

  const recordsPerPage = 10;

  
  const filtered = employees.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.name.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term) ||
      emp.phone.toLowerCase().includes(term) ||
      emp.industry.toLowerCase().includes(term) ||
      emp.organization.toLowerCase().includes(term)
    );
  });

  const paginated = filtered.slice((page - 1) * recordsPerPage, page * recordsPerPage);
  const totalPages = Math.ceil(filtered.length / recordsPerPage);

  
  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(paginated.map((emp) => emp.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };


  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("Please select at least one employee to delete.");
      return;
    }
    if (window.confirm("Are you sure you want to delete selected employees?")) {
      setEmployees(employees.filter((emp) => !selectedIds.includes(emp.id)));
      setSelectedIds([]);
    }
  };


  const handleSendMessages = () => {
    if (selectedIds.length === 0) {
      alert("Select at least one employee to send messages.");
      return;
    }

    const selectedEmployees = employees.filter((emp) => selectedIds.includes(emp.id));

    let channels = [];
    if (sendOptions.email) channels.push("Email");
    if (sendOptions.whatsapp) channels.push("WhatsApp");
    if (sendOptions.message) channels.push("Message");

    if (channels.length === 0) {
      alert("Please select at least one communication method.");
      return;
    }

    alert(
      `Sending ${channels.join(", ")} to:\n${selectedEmployees
        .map((e) => e.name)
        .join(", ")}`
    );
  };

 
  const handleDownloadSelected = async () => {
    if (selectedIds.length === 0) {
      alert("Please select employees to download details.");
      return;
    }

    const selectedEmployees = employees.filter((emp) =>
      selectedIds.includes(emp.id)
    );

    for (const emp of selectedEmployees) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Employee Details",
                    bold: true,
                    size: 32,
                    underline: {},
                  }),
                ],
              }),
              new Paragraph({ text: "" }),
              new Paragraph(`Employee ID: ${emp.id}`),
              new Paragraph(`Name: ${emp.name}`),
              new Paragraph(`Email: ${emp.email}`),
              new Paragraph(`Phone: ${emp.phone}`),
              new Paragraph(`Industry: ${emp.industry}`),
              new Paragraph(`State: ${emp.state}`),
              new Paragraph(`Organization: ${emp.organization}`),
              new Paragraph(`Designation: ${emp.designation}`),
            ],
          },
        ],
      });

      try {
        const blob = await Packer.toBlob(doc);
        saveAs(blob, `${emp.name}_Details.docx`);
      } catch (error) {
        console.error("Error generating document for", emp.name, error);
        alert(`Failed to download details for ${emp.name}`);
      }
    }
  };

  return (
    <div className="empview-container">
     
      <div className="empview-header-bar">
        <h2>EMPLOYEE REGISTRATION</h2>
        <p>
          Total Employees: <b>{employees.length}</b>
        </p>
      </div>

     
      <div className="empview-action-bar">
        <button className="empview-filter-btn">
          <FaFilter /> Filter
        </button>

        <div className="empview-search-box">
          <FaSearch className="empview-search-icon" />
          <input
            type="text"
            placeholder="Search by Employee ID, name, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="empview-show-btn">Show</button>
        <button className="empview-delete-btn" onClick={handleDeleteSelected}>
          <FaTrash /> Delete
        </button>
      </div>

      
      <div className="empview-toolbar">
        <label>{selectedIds.length || 10} Employee</label>

        <label>
          <input
            type="checkbox"
            checked={sendOptions.email}
            onChange={() =>
              setSendOptions((prev) => ({ ...prev, email: !prev.email }))
            }
          />
          <FaEnvelope /> Email
        </label>

        <label>
          <input
            type="checkbox"
            checked={sendOptions.whatsapp}
            onChange={() =>
              setSendOptions((prev) => ({ ...prev, whatsapp: !prev.whatsapp }))
            }
          />
          <FaWhatsapp /> WhatsApp
        </label>

        <label>
          <input
            type="checkbox"
            checked={sendOptions.message}
            onChange={() =>
              setSendOptions((prev) => ({ ...prev, message: !prev.message }))
            }
          />
          <FaCommentDots /> Message
        </label>

        <button className="empview-download-btn" onClick={handleDownloadSelected}>
          <FaDownload /> Download
        </button>

        <button className="empview-send-btn" onClick={handleSendMessages}>
          Send
        </button>
      </div>

     
      <div className="empview-table-container">
        <table className="empview-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={paginated.length > 0 && selectedIds.length === paginated.length}
                />
              </th>
              <th>Member ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Industry</th>
              <th>State</th>
              <th>Organization</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? (
              paginated.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(emp.id)}
                      onChange={() => toggleSelect(emp.id)}
                    />
                  </td>
                  <td>{emp.id}</td>
                  <td>
                    <img src={emp.image} alt={emp.name} className="empview-profile-pic" />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.industry}</td>
                  <td>{emp.state}</td>
                  <td>{emp.organization}</td>
                  <td>
                    <button className="empview-view-btn" onClick={() => setViewEmployee(emp)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="empview-no-data">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
      <div className="empview-pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>

      
      {viewEmployee && (
        <div className="empview-overlay">
          <div className="empview-content">
            <button className="empview-close-btn" onClick={() => setViewEmployee(null)}>
              <FaTimes />
            </button>

            <h3 className="empview-popup-header">Employee Details</h3>
            <img src={viewEmployee.image} alt={viewEmployee.name} className="empview-popup-img" />

            <div className="empview-popup-scroll">
              <div className="empview-popup-details">
                {Object.entries(viewEmployee).map(([key, value]) => (
                  key !== "image" && (
                    <div key={key}>
                      <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                      <input type="text" value={value} readOnly />
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewEmployeeRegistration;
