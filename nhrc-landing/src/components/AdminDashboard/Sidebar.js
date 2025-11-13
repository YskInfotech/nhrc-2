import React, { useState } from "react";
import {
  FaHome,
  FaUserTie,
  FaBriefcase,
  FaUsers,
  FaCogs,
  FaUserShield,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaUserCircle,
  FaBlackTie,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css";

function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="admin-sidebar-header">
        <h3 className="admin-sidebar-logo">ADMIN</h3>
        <button
          className="admin-toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FaBars />
        </button>
      </div>

      <ul className="admin-sidebar-menu">
        
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaHome className="admin-icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        
        <li>
          <div className="admin-menu-item" onClick={() => toggleMenu("contact")}>
            <FaUserCircle className="admin-icon" />
            <span>Contact Us</span>
            {openMenus.contact ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className={`admin-submenu ${openMenus.contact ? "open" : ""}`}>
            <li>
              <NavLink to="/dashboard/QuickContacts">Quick Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/contact-feedback">Feedback</NavLink>
            </li>
          </ul>
        </li>

        
        <li>
          <div
            className="admin-menu-item"
            onClick={() => toggleMenu("registration")}
          >
            <FaUserTie className="admin-icon" />
            <span>Registration</span>
            {openMenus.registration ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className={`admin-submenu ${openMenus.registration ? "open" : ""}`}>
            <li>
              <NavLink to="/dashboard/ViewEmployeeRegistration">Employee</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/ViewStudentRegistration">Student</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/ViewRepresentativeRegistration">
                Representative
              </NavLink>
            </li>
          </ul>
        </li>

        
        <li>
          <div className="admin-menu-item" onClick={() => toggleMenu("jobs")}>
            <FaBriefcase className="admin-icon" />
            <span>Jobs</span>
            {openMenus.jobs ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className={`admin-submenu ${openMenus.jobs ? "open" : ""}`}>
            <li>
              <NavLink to="/dashboard/AddOnJobForm">Add Job</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/ViewJobsAdmin">View Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/JobApplicationsAdmin">Job Applications</NavLink>
            </li>
          </ul>
        </li>

        
        <li>
          <div
            className="admin-menu-item"
            onClick={() => toggleMenu("permission")}
          >
            <FaUserShield className="admin-icon" />
            <span>Permission</span>
            {openMenus.permission ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className={`admin-submenu ${openMenus.permission ? "open" : ""}`}>
            <li>
              <NavLink to="/dashboard/permission/employee">Employee</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/permission/student">Student</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/permission/tpo">TPO</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/permission/job-posting">Job Posting</NavLink>
            </li>
          </ul>
        </li>

        
        <li>
          <div className="admin-menu-item" onClick={() => toggleMenu("services")}>
            <FaCogs className="admin-icon" />
            <span>Services</span>
            {openMenus.services ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <ul className={`admin-submenu ${openMenus.services ? "open" : ""}`}>
            
            <li>
              <div
                className="admin-submenu-item"
                onClick={() => toggleMenu("global")}
              >
                Global Networking
                {openMenus.global ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <ul
                className={`admin-nested-submenu ${
                  openMenus.global ? "open" : ""
                }`}
              >
                <li>
                  <NavLink to="/dashboard/services/global-networking/applications">
                    GN Total Applications
                  </NavLink>
                </li>
              </ul>
            </li>

            
            <li>
              <div
                className="admin-submenu-item"
                onClick={() => toggleMenu("knowledge")}
              >
                Knowledge Sharing
                {openMenus.knowledge ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <ul
                className={`admin-nested-submenu ${
                  openMenus.knowledge ? "open" : ""
                }`}
              >
                <li>
                  <NavLink to="/dashboard/services/knowledge-sharing/applications">
                    KN Total Applications
                  </NavLink>
                </li>
              </ul>
            </li>

            
            <li>
              <div
                className="admin-submenu-item"
                onClick={() => toggleMenu("skill")}
              >
                Ud Skill & Training
                {openMenus.skill ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <ul
                className={`admin-nested-submenu ${
                  openMenus.skill ? "open" : ""
                }`}
              >
                <li>
                  <NavLink to="/dashboard/services/skill-training/applications">
                    UST Total Applications
                  </NavLink>
                </li>
              </ul>
            </li>

           
            <li>
              <div
                className="admin-submenu-item"
                onClick={() => toggleMenu("jobfair")}
              >
                Job and JobFairs
                {openMenus.jobfair ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <ul
                className={`admin-nested-submenu ${
                  openMenus.jobfair ? "open" : ""
                }`}
              >
                <li>
                  <NavLink to="/dashboard/services/jobfairs/applications">
                    JF Total Applications
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/dashboard/services/talent-publication">
                Talent Publication
              </NavLink>
            </li>
          </ul>
        </li>

        
        <li>
          <NavLink to="/dashboard/board-members">
            <FaUsers className="admin-icon" />
            <span>Board Members</span>
          </NavLink>
        </li>

       
        <li>
          <NavLink to="/dashboard/benefits">
            <FaUserTie className="admin-icon" />
            <span>Board Members Benefits</span>
          </NavLink>
        </li>

       
        <li>
          <div
            className="admin-menu-item"
            onClick={() => toggleMenu("blackProfile")}
          >
            <FaBlackTie className="admin-icon" />
            <span>Black Profile</span>
            {openMenus.blackProfile ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul
            className={`admin-submenu ${
              openMenus.blackProfile ? "open" : ""
            }`}
          >
            <li>
              <NavLink to="/dashboard/black-profile">Add / View Profiles</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
