# LeaveGuard  
### A Verified Leave Approval & Audit System

---

## 📌 Overview

**LeaveGuard** is a role-based, time-bound leave and issue approval system designed to eliminate attendance-related disputes caused by ignored or unseen leave applications in colleges.

The system does **not modify college ERP attendance data**.  
Instead, it acts as a **verification and audit layer**, generating tamper-proof digital approval logs that can be used by students and administrators as official proof during attendance disputes, internal assessments, or exam eligibility reviews.

---

## ❗ Problem Statement

In most colleges, the leave approval process is manual and unreliable:
- Students submit handwritten or WhatsApp-based leave requests.
- Teachers or mentors may not see or respond to the request.
- Even after approval, students are sometimes marked **absent**.
- There is no centralized system to track approvals or responsibility.

This often results in:
- Attendance shortages
- Internal marks issues
- Exam eligibility problems
- Student–faculty conflicts

---

## ✅ Proposed Solution

LeaveGuard introduces a **structured, accountable, and auditable workflow** for leave and issue approvals:

- Role-based approval flow (Student → Mentor → Teacher → Admin)
- Time-bound approvals with **automatic escalation**
- Immutable approval logs with timestamps
- Student-facing timeline view for full transparency
- Admin-level audit and dispute resolution support

---

## 👥 User Roles

| Role    | Responsibilities |
|--------|------------------|
| Student | Create leave/issue requests, track status |
| Mentor  | First-level approval or rejection |
| Teacher | Subject-level approval acknowledgment |
| Admin   | Final authority, escalation handling, audit access |

---

## 🔁 Request Workflow

1. **Student submits a request**
   - Leave (date-based)
   - Issue (subject-based)

2. **Mentor Review**
   - Approve / Reject
   - If no action within 24 hours → auto-escalated to Admin

3. **Teacher Review**
   - Subject-specific approval
   - If ignored for 24 hours → auto-escalated to Admin

4. **Approval Log Generation**
   - Once approved, the system generates a **verified digital log**

5. **Attendance Dispute Handling**
   - If ERP attendance later shows "Absent"
   - Student presents LeaveGuard log to Admin/HOD
   - Manual correction or exam permission can be granted

---

## 🧾 Approval Log (Audit Proof)

Each approved request generates a permanent audit record containing:
- Student details
- Leave / Issue details
- Mentor approval timestamp
- Teacher approval timestamp
- Unique Request ID
- System-generated status

These logs serve as **official verification proof**, not attendance records.

---

## 🕒 Timeline Feature

Students can view a real-time timeline showing:
- Request creation
- Approval stages
- Escalations (if any)
- Final approval status

This ensures transparency and eliminates confusion.

---

## 🛑 ERP Integration Policy

⚠️ **Important Notice**

LeaveGuard **does not integrate directly with the college ERP system** due to:
- Security restrictions
- Privacy concerns
- Lack of authorized access

Instead, it functions as a **verification and audit system** that supports administrative decision-making without modifying ERP data.

---

## 🏗️ System Architecture

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT-based Role Authentication  
- **Automation:** Cron Jobs for time-based escalation  
- **Frontend:** React (Timeline & Dashboard Views)

---

## 🎯 Key Features

- Role-Based Access Control (RBAC)
- Time-bound approvals (24-hour SLA)
- Automatic escalation mechanism
- Immutable audit logs
- Transparent request tracking
- Admin dispute resolution support

---

## 🎓 Academic Use Case (PBL)

This project demonstrates:
- Real-world problem analysis
- System and process design
- Backend architecture skills
- Accountability-driven software design
- Ethical handling of restricted systems (ERP)

---

## 🚀 Future Enhancements

- PDF / QR-based approval log export
- Mobile application support
- Notification integration (Email/SMS)
- Analytics dashboard for admins
- Optional ERP integration (with official permission)

---

## 🏁 Conclusion

LeaveGuard ensures that **no student is academically penalized due to human negligence after an approved leave**, by providing a verified, transparent, and auditable digital approval system.

---

## 📄 License

This project is developed for academic purposes under Project-Based Learning (PBL).
