import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../../pages/DashboardHome";
import QuickContacts from "../../pages/QuickContacts";
import ViewEmployeeRegistration from "../../pages/ViewEmployeeRegistration";
import ViewStudentRegistration from "../../pages/ViewStudentRegistration";
import ViewRepresentativeRegistration from "../../pages/ViewRepresentativeRegistration";
import AddOnJobForm from "../../pages/AddOnJobForm";
import AddOnJobAdminForm from "../../pages/AddOnJobAdminForm";
import ViewJobsAdmin from "../../pages/ViewJobsAdmin";
import JobApplicationsAdmin from "../../pages/JobApplicationsAdmin";
import CandidateProfile from "../../pages/CandidateProfile";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="QuickContacts" element={<QuickContacts />} />
      <Route path="ViewEmployeeRegistration" element={<ViewEmployeeRegistration />} />
      <Route path="ViewStudentRegistration" element={<ViewStudentRegistration />} />
      <Route path="ViewRepresentativeRegistration" element={<ViewRepresentativeRegistration />} />
      <Route path="AddOnJobForm" element={<AddOnJobForm />} />
      <Route path="AddOnJobAdminForm" element={<AddOnJobAdminForm />} />
      <Route path="ViewJobsAdmin" element={<ViewJobsAdmin />} />
      <Route path="JobApplicationsAdmin" element={<JobApplicationsAdmin />} />
      <Route path="CandidateProfile" element={<CandidateProfile />} />
    </Routes>
  );
}

export default DashboardRoutes;
