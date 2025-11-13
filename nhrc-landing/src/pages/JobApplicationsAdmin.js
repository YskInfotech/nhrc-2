import React, { useState } from "react";
import "../Styles/JobApplicationsAdmin.css";
import CandidateProfile from "./CandidateProfile";

const JobApplicationsAdmin = () => {

  const departments = ["HR", "Marketing", "Development", "Finance", "Design"];
  const statusOptions = ["Shortlist", "Pending", "Rejected"];
  const experienceOptions = [
    "Fresher (0-1 Years)",
    "Experienced (1+ Years)",
  ];

  const initialData = [
    { id: 1, name: "Rahul Sharma", role: "Development", email: "rahul@example.com", phone: "+91 9876543210", exp: 3, status: "Pending" },
    { id: 2, name: "Priya Varma", role: "HR", email: "priya@example.com", phone: "+91 9123456780", exp: 6, status: "Shortlist" },
    { id: 3, name: "Amit Singh", role: "Marketing", email: "amit@example.com", phone: "+91 9988776655", exp: 4, status: "Rejected" },
    { id: 4, name: "Neha Kapoor", role: "Design", email: "neha@example.com", phone: "+91 9988223344", exp: 1, status: "Shortlist" },
    { id: 5, name: "Arjun Reddy", role: "Finance", email: "arjun@example.com", phone: "+91 8899776655", exp: 5, status: "Pending" },
    { id: 6, name: "Kavya Nair", role: "Development", email: "kavya@example.com", phone: "+91 7766554433", exp: 0, status: "Rejected" }
  ];

  const [records, setRecords] = useState(initialData);
  const [filters, setFilters] = useState({
    title: "",
    department: "",
    status: "",
    experience: "",
  });

  const [selectedRows, setSelectedRows] = useState([]);
  const [viewData, setViewData] = useState(null);

  
  const applyFilters = () => {
    let filtered = initialData;

    if (filters.title.trim()) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.department) {
      filtered = filtered.filter((item) => item.role === filters.department);
    }

    if (filters.status) {
      filtered = filtered.filter((item) => item.status === filters.status);
    }

    if (filters.experience === "Fresher (0-1 Years)") {
      filtered = filtered.filter((item) => item.exp <= 1);
    } else if (filters.experience === "Experienced (1+ Years)") {
      filtered = filtered.filter((item) => item.exp > 1);
    }

    setRecords(filtered);
  };

  
  const toggleSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };


  const deleteSelected = () => {
    setRecords(records.filter((item) => !selectedRows.includes(item.id)));
    setSelectedRows([]);
  };

  return (
    <div className="ja-admin-wrapper">

      
      {viewData ? (
        <CandidateProfile data={viewData} onClose={() => setViewData(null)} />
      ) : (
        <>
          <h2 className="ja-admin-title">NHRC - Applications (Admin)</h2>

         
          <div className="ja-filter-row">

            <input
              type="text"
              placeholder="Search by Candidate Name"
              className="ja-filter-input"
              onChange={(e) =>
                setFilters({ ...filters, title: e.target.value })
              }
            />

            <select
              className="ja-filter-input"
              onChange={(e) =>
                setFilters({ ...filters, department: e.target.value })
              }
            >
              <option value="">Filter by Department</option>
              {departments.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <select
              className="ja-filter-input"
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">Filter by Status</option>
              {statusOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <select
              className="ja-filter-input"
              onChange={(e) =>
                setFilters({ ...filters, experience: e.target.value })
              }
            >
              <option value="">Filter by Experience</option>
              {experienceOptions.map((ex) => (
                <option key={ex}>{ex}</option>
              ))}
            </select>

            <button className="ja-apply-btn" onClick={applyFilters}>
              Apply
            </button>
          </div>

         
          <div className="ja-status-bar">
            <label className="ja-select-all">
              <input
                type="checkbox"
                onChange={(e) =>
                  setSelectedRows(e.target.checked ? records.map((r) => r.id) : [])
                }
              />
              Select All
            </label>

            <div className="ja-status-box green">
              Shortlist: {records.filter((r) => r.status === "Shortlist").length}
            </div>

            <div className="ja-status-box orange">
              Pending: {records.filter((r) => r.status === "Pending").length}
            </div>

            <div className="ja-status-box red">
              Rejected: {records.filter((r) => r.status === "Rejected").length}
            </div>

            <button className="ja-delete-btn" onClick={deleteSelected}>
              Delete
            </button>
          </div>

         
          <table className="ja-table">
            <thead>
              <tr>
                <th></th>
                <th>Candidate Name</th>
                <th>Applied For</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Experience</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {records.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => toggleSelect(item.id)}
                    />
                  </td>

                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.exp} Years</td>

                  <td
                    className={
                      item.status === "Shortlist"
                        ? "ja-tag green"
                        : item.status === "Pending"
                        ? "ja-tag orange"
                        : "ja-tag red"
                    }
                  >
                    {item.status}
                  </td>

                  <td>
                    <button
                      className="ja-view-btn"
                      onClick={() => setViewData(item)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default JobApplicationsAdmin;
