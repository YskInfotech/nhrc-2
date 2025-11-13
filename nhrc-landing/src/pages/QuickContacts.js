import React, { useState } from "react";
import "../Styles/QuickContacts.css";
import {
  FaSearch,
  FaFilter,
  FaTrash,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaTimes,
} from "react-icons/fa";

const initialContacts = [
  {
    id: 1,
    fullName: "Ram",
    email: "ram@example.com",
    phone: "+91 98765 43210",
    message:
      "I’m interested in applying for the Software Developer role. I have 3 years of experience in React and Node.js. Looking forward to contributing to your development team. Please share the next steps in the hiring process.",
    status: "Pending",
  },
  {
    id: 2,
    fullName: "Mani",
    email: "mani@gmail.com",
    phone: "+91 9876543210",
    message: "Need a redesign for our company website.",
    status: "Approved",
  },
  {
    id: 3,
    fullName: "Revanth",
    email: "revanthon@gmail.com",
    phone: "+91 8899776655",
    message: "Interested in a long-term web development project.",
    status: "Pending",
  },
  {
    id: 4,
    fullName: "Divya",
    email: "divya@gmail.com",
    phone: "+91 9988776655",
    message: "Interested in a mobile app project.",
    status: "Pending",
  },
  {
    id: 5,
    fullName: "Siva",
    email: "siva@gmail.com",
    phone: "+91 8899776655",
    message: "Interested in a long-term web development project.",
    status: "Approved",
  },
  {
    id: 6,
    fullName: "Kumar",
    email: "kumar@gmail.com",
    phone: "+91 7788996655",
    message: "Looking for backend developer position.",
    status: "Pending",
  },
  {
    id: 7,
    fullName: "Kanta",
    email: "kanta@gmail.com",
    phone: "+91 9988776644",
    message: "Interested in working on your e-commerce platform.",
    status: "Pending",
  },
  {
    id: 8,
    fullName: "Babu",
    email: "babu@gmail.com",
    phone: "+91 8899771122",
    message: "I’d like to collaborate on a full-stack project.",
    status: "Approved",
  },
  {
    id: 9,
    fullName: "RajaShekhar",
    email: "raja@gmail.com",
    phone: "+91 7788554433",
    message: "Interested in a React + Spring Boot project.",
    status: "Approved",
  },
];

function QuickContacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [viewContact, setViewContact] = useState(null);

 
  const filteredContacts = contacts.filter((c) => {
    const term = searchTerm.toLowerCase();
    return (
      (c.fullName?.toLowerCase() || "").includes(term) ||
      (c.email?.toLowerCase() || "").includes(term) ||
      (c.phone?.toLowerCase() || "").includes(term) ||
      (c.message?.toLowerCase() || "").includes(term)
    );
  });

  
  const sortedContacts = [...filteredContacts].sort((a, b) => {
    if (!sortOrder) return 0;
    const nameA = a.fullName?.toLowerCase() || "";
    const nameB = b.fullName?.toLowerCase() || "";
    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  const total = contacts.length;
  const approved = contacts.filter((c) => c.status === "Approved").length;
  const pending = total - approved;

  
  const toggleSelectContact = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    setSelectedContacts(e.target.checked ? contacts.map((c) => c.id) : []);
  };

  
  const handleDelete = () => {
    if (selectedContacts.length === 0) {
      alert("Select at least one contact to delete!");
      return;
    }
    setContacts((prev) => prev.filter((c) => !selectedContacts.includes(c.id)));
    setSelectedContacts([]);
  };

  
  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  
  const handleStatusChange = (status) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === viewContact.id ? { ...c, status } : c
      )
    );
    setViewContact(null); 
  };

  const openView = (contact) => setViewContact(contact);
  const closeView = () => setViewContact(null);

  return (
    <div className="quickcontacts-container">
      
      <div className="quickcontacts-header">
        <h2>QUICK CONTACTS</h2>
        <p className="summary">
          Total: <b>{total}</b> &nbsp;|&nbsp;
          <span className="pending">Pending: {pending}</span> &nbsp;|&nbsp;
          <span className="resolved">Approved: {approved}</span>
        </p>
      </div>

     
      <div className="contact-actions">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name, email, or message"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="filter-btn" onClick={handleSortToggle}>
          <FaFilter /> Sort{" "}
          {sortOrder === "asc" ? "(A-Z)" : sortOrder === "desc" ? "(Z-A)" : ""}
        </button>

        <button className="delete-btn" onClick={handleDelete}>
          <FaTrash /> Delete
        </button>
      </div>

   
      <div className="contact-list">
        <label className="select-all">
          <input
            type="checkbox"
            checked={
              selectedContacts.length === contacts.length && contacts.length > 0
            }
            onChange={handleSelectAll}
          />{" "}
          {contacts.length} Contacts
        </label>

        {sortedContacts.length === 0 ? (
          <p className="no-results">No contacts found</p>
        ) : (
          sortedContacts.map((c) => (
            <div key={c.id} className="contact-card">
              <input
                type="checkbox"
                className="contact-checkbox"
                checked={selectedContacts.includes(c.id)}
                onChange={() => toggleSelectContact(c.id)}
              />

              <div className="avatar">{c.fullName?.[0]?.toUpperCase()}</div>

              <div className="details">
                <p className="info">
                  <FaEnvelope className="icon" /> <span>{c.email}</span>
                </p>
                <p className="info">
                  <FaPhone className="icon" /> <span>{c.phone}</span>
                </p>
                <p className="info message">
                  <FaCommentDots className="icon" /> <span>{c.message}</span>
                </p>
              </div>

              <div className="status-section">
                <span className={`status ${c.status.toLowerCase()}`}>
                  {c.status}
                </span>
                <button className="view-btn" onClick={() => openView(c)}>
                  View
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      
      {viewContact && (
        <div className="popup-overlay" onClick={closeView}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeView}>
              <FaTimes />
            </button>

            <h3>Quick contacts › {viewContact.fullName}</h3>

            <div className="popup-card">
              <div className="popup-avatar">
                {viewContact.fullName?.[0]?.toUpperCase()}
              </div>

              <div className="popup-fields">
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" value={viewContact.fullName} readOnly />
                </div>

                <div className="field">
                  <label>Phone Number</label>
                  <input type="text" value={viewContact.phone} readOnly />
                </div>

                <div className="field">
                  <label>Email Id</label>
                  <input type="text" value={viewContact.email} readOnly />
                </div>

                <div className="field">
                  <label>Leave Message</label>
                  <textarea value={viewContact.message} readOnly rows="4" />
                </div>

                <div className="action-buttons">
                  <button
                    className="approve-btn"
                    onClick={() => handleStatusChange("Approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="pending-btn"
                    onClick={() => handleStatusChange("Pending")}
                  >
                    Pending
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuickContacts;
