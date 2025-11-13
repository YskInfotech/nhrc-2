import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import "../Styles/ViewJobsAdmin.css";

const ViewJobsAdmin = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [editJob, setEditJob] = useState(null);

  
  const updateStatusFromDeadline = (job) => {
    if (!job.deadline) return { ...job, status: "Inactive" };

    const today = new Date();
    const deadline = new Date(job.deadline);

    return {
      ...job,
      status: deadline >= today ? "Active" : "Inactive",
    };
  };

  useEffect(() => {
    const allJobs = JSON.parse(localStorage.getItem("allJobs")) || [];
    const updatedJobs = allJobs.map(updateStatusFromDeadline);

    setJobs(updatedJobs);
    setFilteredJobs(updatedJobs);
    localStorage.setItem("allJobs", JSON.stringify(updatedJobs));
  }, []);

  const toggleSelect = (id) => {
    let updated;

    if (selectedJobs.includes(id)) {
      updated = selectedJobs.filter((jobId) => jobId !== id);
    } else {
      updated = [...selectedJobs, id];
    }
    setSelectedJobs(updated);
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedJobs([]);
    } else {
      setSelectedJobs(filteredJobs.map((job) => job.id));
    }
    setSelectAll(!selectAll);
  };

  const deleteJobs = () => {
    if (selectedJobs.length === 0) {
      alert("Please select at least one job!");
      return;
    }
    const updated = jobs.filter((job) => !selectedJobs.includes(job.id));

    setJobs(updated);
    setFilteredJobs(updated);
    localStorage.setItem("allJobs", JSON.stringify(updated));

    setSelectedJobs([]);
    setSelectAll(false);
  };

  const handleEdit = (job) => {
    setEditJob(job);
    setShowModal(true);
  };

  const saveEdit = () => {
    const updated = jobs.map((job) =>
      job.id === editJob.id ? updateStatusFromDeadline(editJob) : job
    );

    setJobs(updated);
    setFilteredJobs(updated);
    localStorage.setItem("allJobs", JSON.stringify(updated));

    setShowModal(false);
  };

  const applyFilters = () => {
    let temp = jobs;

    if (search.trim() !== "") {
      temp = temp.filter((job) =>
        job.jobTitle.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (departmentFilter !== "") {
      temp = temp.filter((job) => job.department === departmentFilter);
    }

    if (statusFilter !== "") {
      temp = temp.filter((job) => job.status === statusFilter);
    }

    setFilteredJobs(temp);
  };

  const activeCount = jobs.filter((job) => job.status === "Active").length;
  const inactiveCount = jobs.filter((job) => job.status === "Inactive").length;

  return (
    <div className="vja-container">
      <h3 className="vja-title">NHRC - View Jobs (Admin)</h3>

      
      <div className="row vja-filters-row mb-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control vja-input"
            placeholder="Search by Job Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select vja-select"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="">Filter by Department</option>
            <option value="IT">IT</option>
            <option value="Non-IT">Non-IT</option>
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select vja-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Filter by Status</option>
            <option value="Active" >Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="col-md-3">
          <button className="btn vja-apply-btn w-100" onClick={applyFilters}>
            Apply
          </button>
        </div>
      </div>

     
      <div className="d-flex align-items-center gap-3 mb-3 vja-status-box">
        <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
        <span>Select All</span>

        <span className="vja-badge-active">Active = {activeCount}</span>
        <span className="vja-badge-inactive">Inactive = {inactiveCount}</span>

        <button className="vja-delete-btn ms-auto" onClick={deleteJobs}>
          Delete
        </button>
      </div>

      
      <table className="table vja-table">
        <thead>
          <tr>
            <th></th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredJobs.map((job) => (
            <tr key={job.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedJobs.includes(job.id)}
                  onChange={() => toggleSelect(job.id)}
                />
              </td>

              <td>{job.jobTitle}</td>
              <td>{job.department}</td>
              <td>{job.jobLocation}</td>

              <td>
                {job.experienceMin} - {job.experienceMax} Years
              </td>

              <td>
                ₹{job.salaryMin} - ₹{job.salaryMax}
              </td>

              <td>{job.deadline}</td>

              <td
                className={
                  job.status === "Active "
                    ? "vja-status-active "
                    : "vja-status-inactive"
                }
              >
                {job.status}
              </td>

              <td>
                <button className="vja-edit-btn" onClick={() => handleEdit(job)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="vja-modal-dialog"
      >
        <Modal.Header closeButton className="vja-modal-header">
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>

        <Modal.Body className="vja-modal-body">
          {editJob && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  value={editJob.jobTitle}
                  onChange={(e) =>
                    setEditJob({ ...editJob, jobTitle: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select
                  value={editJob.department}
                  onChange={(e) =>
                    setEditJob({ ...editJob, department: e.target.value })
                  }
                >
                  <option value="IT">IT</option>
                  <option value="Non-IT">Non-IT</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Experience Min</Form.Label>
                <Form.Control
                  type="number"
                  value={editJob.experienceMin}
                  onChange={(e) =>
                    setEditJob({ ...editJob, experienceMin: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Experience Max</Form.Label>
                <Form.Control
                  type="number"
                  value={editJob.experienceMax}
                  onChange={(e) =>
                    setEditJob({ ...editJob, experienceMax: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Salary Min</Form.Label>
                <Form.Control
                  type="number"
                  value={editJob.salaryMin}
                  onChange={(e) =>
                    setEditJob({ ...editJob, salaryMin: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Salary Max</Form.Label>
                <Form.Control
                  type="number"
                  value={editJob.salaryMax}
                  onChange={(e) =>
                    setEditJob({ ...editJob, salaryMax: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  value={editJob.jobLocation}
                  onChange={(e) =>
                    setEditJob({ ...editJob, jobLocation: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Locality</Form.Label>
                <Form.Control
                  value={editJob.jobLocality}
                  onChange={(e) =>
                    setEditJob({ ...editJob, jobLocality: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Openings</Form.Label>
                <Form.Control
                  type="number"
                  value={editJob.openings}
                  onChange={(e) =>
                    setEditJob({ ...editJob, openings: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  type="date"
                  value={editJob.deadline}
                  onChange={(e) =>
                    setEditJob({ ...editJob, deadline: e.target.value })
                  }
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>

        <Modal.Footer className="vja-modal-footer">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>

          <Button variant="primary" onClick={saveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewJobsAdmin;
