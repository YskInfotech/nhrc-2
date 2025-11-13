
import React, { useState, useMemo } from "react";
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
import "../Styles/ViewRepresentativeRegistration.css"; 

function ViewRepresentativeRegistration() {
  const initial = [
    {
      id: "NHRC-C-01",
      name: "Manikanta",
      phone: "7816085460",
      email: "manikanta@gmail.com",
      industry: "Human Resources (HR)",
      state: "Telangana",
      organization: "Vibrant HR Consultants",
      designation: "HR Coordinator",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "NHRC-C-02",
      name: "Arjun Reddy",
      phone: "9876543210",
      email: "arjunreddy@gmail.com",
      industry: "Human Resource Consulting",
      state: "Telangana",
      organization: "Human Resource Consulting",
      designation: "HR Manager",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: "NHRC-C-03",
      name: "Anil Nair",
      phone: "8899776655",
      email: "anilnair@gmail.com",
      industry: "Human Resources Management",
      state: "Telangana",
      organization: "HR Director",
      designation: "HR Director",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: "NHRC-C-04",
      name: "Priya Sharma",
      phone: "9876543212",
      email: "priyasharma@gmail.com",
      industry: "Human Resources Management",
      state: "Telangana",
      organization: "Head of Human Resources",
      designation: "Head of HR",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
  ];

  const [records, setRecords] = useState(initial);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const recordsPerPage = 10;
  const [sortAsc, setSortAsc] = useState(true);
  const [viewItem, setViewItem] = useState(null);
  const [sendOptions, setSendOptions] = useState({ email: false, whatsapp: false, message: false });


  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return records.filter((r) => {
      if (!term) return true;
      return (
        r.id.toLowerCase().includes(term) ||
        r.name.toLowerCase().includes(term) ||
        (r.email || "").toLowerCase().includes(term) ||
        (r.phone || "").toLowerCase().includes(term) ||
        (r.organization || "").toLowerCase().includes(term)
      );
    });
  }, [records, search]);

  
  const totalPages = Math.max(1, Math.ceil(filtered.length / recordsPerPage));
  const paginated = filtered.slice((page - 1) * recordsPerPage, page * recordsPerPage);

 
  const toggleSelect = (id) =>
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const toggleSelectAllOnPage = (checked) => {
    if (checked) setSelectedIds((prev) => {
      
      const ids = paginated.map((r) => r.id);
      const merged = Array.from(new Set([...prev, ...ids]));
      return merged;
    });
    else setSelectedIds((prev) => prev.filter((id) => !paginated.some((r) => r.id === id)));
  };

  
  const handleFilterToggle = () => {
    const sorted = [...records].sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    setRecords(sorted);
    setSortAsc(!sortAsc);
    setPage(1);
  };


  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("Select at least one row to delete.");
      return;
    }
    if (!window.confirm("Delete selected records?")) return;
    setRecords((prev) => prev.filter((r) => !selectedIds.includes(r.id)));
    setSelectedIds([]);
    if (page > Math.ceil((filtered.length - selectedIds.length) / recordsPerPage)) setPage(1);
  };

  
  const handleSend = () => {
    if (selectedIds.length === 0) return alert("Please select at least one person to send.");
    const channels = [];
    if (sendOptions.email) channels.push("Email");
    if (sendOptions.whatsapp) channels.push("WhatsApp");
    if (sendOptions.message) channels.push("Message");
    if (channels.length === 0) return alert("Select at least one channel (Email / WhatsApp / Message).");
    const names = records.filter((r) => selectedIds.includes(r.id)).map((r) => r.name);
    alert(`Sending ${channels.join(", ")} to:\n${names.join(", ")}`);
    
  };

 
  const handleDownloadSelected = async () => {
    if (selectedIds.length === 0) return alert("Please select at least one person to download.");
    const toDownload = records.filter((r) => selectedIds.includes(r.id));
    for (const r of toDownload) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [new TextRun({ text: "Representative Details", bold: true, size: 28 })],
              }),
              new Paragraph(""),
              new Paragraph(`ID: ${r.id}`),
              new Paragraph(`Name: ${r.name}`),
              new Paragraph(`Email: ${r.email || ""}`),
              new Paragraph(`Phone: ${r.phone || ""}`),
              new Paragraph(`Industry: ${r.industry || ""}`),
              new Paragraph(`State: ${r.state || ""}`),
              new Paragraph(`Organization: ${r.organization || ""}`),
              new Paragraph(`Designation: ${r.designation || ""}`),
            ],
          },
        ],
      });

      try {
        const blob = await Packer.toBlob(doc);
        saveAs(blob, `${r.name || r.id}_details.docx`);
      } catch (err) {
        console.error("Doc generation failed for", r, err);
        alert(`Failed to create document for ${r.name || r.id}`);
      }
    }
  };

  
  const handleView = (row) => setViewItem(row);

  
  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="repreg-container">
     
      <div className="repreg-header">
        <h2>REPRESENTATIVE REGISTRATION</h2>
        <div className="repreg-total">Total Representatives: <strong>{records.length}</strong></div>
      </div>

      
      <div className="repreg-actionbar">
        <button className="repreg-btn repreg-filter" onClick={handleFilterToggle}>
          <FaFilter /> Filter
        </button>

        <div className="repreg-search">
          <FaSearch className="repreg-search-icon" />
          <input
            type="search"
            placeholder="Search by ID, name, email..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="repreg-search-input"
          />
        </div>

        <div className="repreg-action-right">
          <button className="repreg-btn repreg-show">Show</button>
          <button className="repreg-btn repreg-delete" onClick={handleDeleteSelected}>
            <FaTrash /> Delete
          </button>
        </div>
      </div>

      
      <div className="repreg-toolbar">
        <div className="repreg-toolbar-left">
          <label className="repreg-count-label">
            <input type="checkbox"
              checked={paginated.length > 0 && paginated.every(r => selectedIds.includes(r.id))}
              onChange={(e) => toggleSelectAllOnPage(e.target.checked)}
            /> <span>{selectedIds.length || paginated.length} Representative</span>
          </label>
        </div>

        <div className="repreg-channels">
          <label className="repreg-channel">
            <input type="checkbox" checked={sendOptions.email} onChange={() => setSendOptions(prev => ({...prev, email: !prev.email}))} />
            <FaEnvelope /> Email
          </label>

          <label className="repreg-channel">
            <input type="checkbox" checked={sendOptions.whatsapp} onChange={() => setSendOptions(prev => ({...prev, whatsapp: !prev.whatsapp}))} />
            <FaWhatsapp /> WhatsApp
          </label>

          <label className="repreg-channel">
            <input type="checkbox" checked={sendOptions.message} onChange={() => setSendOptions(prev => ({...prev, message: !prev.message}))} />
            <FaCommentDots /> Message
          </label>

          <button className="repreg-btn repreg-download" onClick={handleDownloadSelected}><FaDownload /> Download</button>
          <button className="repreg-btn repreg-send" onClick={handleSend}>Send</button>
        </div>
      </div>

      
      <div className="repreg-table-container">
        <table className="repreg-table">
          <thead>
            <tr>
              <th style={{width: 36}}><input
                type="checkbox"
                checked={paginated.length > 0 && paginated.every(r => selectedIds.includes(r.id))}
                onChange={(e) => toggleSelectAllOnPage(e.target.checked)}
              /></th>
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
            {paginated.length === 0 ? (
              <tr><td colSpan="9" className="repreg-no-data">No records found</td></tr>
            ) : (
              paginated.map((r) => (
                <tr key={r.id}>
                  <td><input type="checkbox" checked={selectedIds.includes(r.id)} onChange={() => toggleSelect(r.id)} /></td>
                  <td>{r.id}</td>
                  <td className="repreg-photo-cell"><img className="repreg-photo" src={r.photo} alt={r.name} /></td>
                  <td>{r.name}</td>
                  <td>{r.phone}</td>
                  <td>{r.industry}</td>
                  <td>{r.state}</td>
                  <td>{r.organization}</td>
                  <td>
                    <button className="repreg-view-btn" onClick={() => handleView(r)}>View Details</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* pagination area */}
      <div className="repreg-pagination">
        <button className="repreg-page-btn" onClick={prevPage} disabled={page === 1}>Previous</button>
        <span className="repreg-page-info">Page {page} of {totalPages}</span>
        <button className="repreg-page-btn" onClick={nextPage} disabled={page === totalPages}>Next</button>
      </div>

      {/* VIEW MODAL */}
      {viewItem && (
        <div className="repreg-modal-overlay" onClick={() => setViewItem(null)}>
          <div className="repreg-modal" onClick={(e) => e.stopPropagation()}>
            <button className="repreg-modal-close" onClick={() => setViewItem(null)}><FaTimes /></button>
            <h3 className="repreg-modal-title">Representative Details</h3>
            <img className="repreg-modal-photo" src={viewItem.photo} alt={viewItem.name} />
            <div className="repreg-modal-scroll">
              <div className="repreg-modal-grid">
                <div className="repreg-field"><label>ID</label><input value={viewItem.id} readOnly /></div>
                <div className="repreg-field"><label>Name</label><input value={viewItem.name} readOnly /></div>
                <div className="repreg-field"><label>Email</label><input value={viewItem.email || ""} readOnly /></div>
                <div className="repreg-field"><label>Phone</label><input value={viewItem.phone || ""} readOnly /></div>
                <div className="repreg-field"><label>Industry</label><input value={viewItem.industry || ""} readOnly /></div>
                <div className="repreg-field"><label>State</label><input value={viewItem.state || ""} readOnly /></div>
                <div className="repreg-field"><label>Organization</label><input value={viewItem.organization || ""} readOnly /></div>
                <div className="repreg-field"><label>Designation</label><input value={viewItem.designation || ""} readOnly /></div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ViewRepresentativeRegistration;
