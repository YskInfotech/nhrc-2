import React, { useState } from "react";
import {
  FaFilter,
  FaDownload,
  FaEnvelope,
  FaWhatsapp,
  FaTrashAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import "../Styles/ViewStudentRegistration.css";
import StudentViewPopup from "./StudentViewPopup";

const ViewStudentRegistration = () => {
  const [students, setStudents] = useState([
    {
      id: "NRHC-S-01",
      name: "Narikatta",
      phone: "7816054840",
      university: "Acharya Nagarjuna University",
      state: "Andhra Pradesh",
      college: "Sri Harshini Degree College, Ongole",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
      email: "narikatta@example.com",
    },
    {
      id: "NRHC-S-02",
      name: "Ajan Reddy",
      phone: "9876543210",
      university: "Jawaharlal Nehru Technological University",
      state: "Andhra Pradesh",
      college: "Vignan Institute of Information Technology",
      photo: "https://randomuser.me/api/portraits/men/20.jpg",
      email: "ajanreddy@example.com",
    },
    {
      id: "NRHC-S-03",
      name: "Anil Nair",
      phone: "9676541231",
      university: "Jawaharlal Nehru Technological University",
      state: "Andhra Pradesh",
      college: "Vignan Institute of Information Technology",
      photo: "https://randomuser.me/api/portraits/men/30.jpg",
      email: "anilnair@example.com",
    },
  ]);

  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [popupData, setPopupData] = useState(null);

  
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(filteredStudents.map((s) => s.id));
    } else {
      setSelected([]);
    }
  };

  
  const handleFilter = () => {
    const sorted = [...students].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setStudents(sorted);
    setSortAsc(!sortAsc);
  };

  
  const handleDelete = () => {
    setStudents((prev) => prev.filter((s) => !selected.includes(s.id)));
    setSelected([]);
  };

  
  const handleDownload = async () => {
    if (selected.length === 0)
      return alert("Please select at least one student!");

    const selectedStudents = students.filter((s) => selected.includes(s.id));
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: selectedStudents.map(
            (s) =>
              new Paragraph({
                children: [
                  new TextRun(`Student ID: ${s.id}\n`),
                  new TextRun(`Name: ${s.name}\n`),
                  new TextRun(`Phone: ${s.phone}\n`),
                  new TextRun(`Email: ${s.email}\n`),
                  new TextRun(`University: ${s.university}\n`),
                  new TextRun(`State: ${s.state}\n`),
                  new TextRun(`College: ${s.college}\n\n`),
                ],
              })
          ),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "StudentDetails.docx");
  };

  
  const handleEmail = () => {
    if (selected.length === 0) return alert("Select at least one student!");
    const selectedStudents = students.filter((s) => selected.includes(s.id));
    alert(
      `Sending Email to: ${selectedStudents.map((s) => s.email).join(", ")}`
    );
  };

  const handleWhatsapp = () => {
    if (selected.length === 0) return alert("Select at least one student!");
    const selectedStudents = students.filter((s) => selected.includes(s.id));
    alert(
      `Sending WhatsApp message to: ${selectedStudents
        .map((s) => s.phone)
        .join(", ")}`
    );
  };

  const handleMessage = () => {
    if (selected.length === 0) return alert("Select at least one student!");
    const selectedStudents = students.filter((s) => selected.includes(s.id));
    alert(`Sending Message to: ${selectedStudents.map((s) => s.name).join(", ")}`);
  };

  return (
    <div className="studentview-container">
      
      <div className="studentview-fixed-header">
        <h2>STUDENT REGISTRATION</h2>
        <p>Total Students: {students.length}</p>
      </div>

     
      <div className="studentview-toolbar">
        <button onClick={handleFilter} className="studentview-btn studentview-filter-btn">
          <FaFilter /> Filter
        </button>

        <div className="studentview-search-box">
          <input
            type="text"
            placeholder="Search by ID, Name, or University..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="studentview-btn studentview-show-btn">Show</button>
        <button onClick={handleDelete} className="studentview-btn studentview-delete-btn">
          <FaTrashAlt /> Delete
        </button>
      </div>

      
      <div className="studentview-actionbar">
        <label>
          <input
            type="checkbox"
            checked={
              selected.length === filteredStudents.length &&
              filteredStudents.length > 0
            }
            onChange={handleSelectAll}
          />{" "}
          Select All
        </label>

        <button onClick={handleEmail} className="studentview-icon-btn">
          <FaEnvelope /> Email
        </button>
        <button onClick={handleWhatsapp} className="studentview-icon-btn">
          <FaWhatsapp /> WhatsApp
        </button>
        <button onClick={handleMessage} className="studentview-icon-btn">
          <FaPaperPlane /> Message
        </button>
        <button onClick={handleDownload} className="studentview-download-btn">
          <FaDownload /> Download
        </button>
      </div>

      
      <div className="studentview-table-container">
        <table className="studentview-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={
                    selected.length === filteredStudents.length &&
                    filteredStudents.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th>Member ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Phone</th>
              <th>University</th>
              <th>State</th>
              <th>College</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <tr key={s.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.includes(s.id)}
                      onChange={() => toggleSelect(s.id)}
                    />
                  </td>
                  <td>{s.id}</td>
                  <td>
                    <img src={s.photo} alt={s.name} className="studentview-photo" />
                  </td>
                  <td>{s.name}</td>
                  <td>{s.phone}</td>
                  <td>{s.university}</td>
                  <td>{s.state}</td>
                  <td>{s.college}</td>
                  <td>
                    <button
                      className="studentview-view-btn"
                      onClick={() => setPopupData(s)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: "center", padding: "10px" }}>
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
      {popupData && (
        <StudentViewPopup data={popupData} onClose={() => setPopupData(null)} />
      )}
    </div>
  );
};

export default ViewStudentRegistration;
