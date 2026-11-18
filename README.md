# CadPrint
An internal ERP, Point-of-Sale (POS), and accounting management web application built for CADPrint to streamline shop order intake, real-time inventory tracking, employee attendance, and daily cash reconciliation.

🚀 Core Modules & Features

* **🛒 Point of Sale (POS) & Omnichannel Intake:** A unified counter terminal to log and track print shop orders coming from Walk-ins, Phone Calls, Emails, and Messages.
* **📦 Smart Inventory & Material Recipes:** Real-time stock monitoring with automated material deductions via bill-of-materials (recipes) whenever an order is marked `COMPLETED`, featuring dynamic unit conversions and low-stock alerts.
* **💰 Daily Cash & Multi-Gateway Reconciliation:** Evening end-of-day balancing workspace reconciling physical cash drawers alongside digital payment channels (GCash, Maya, Bank Transfers) and a check ledger to track and safeguard against bounced checks.
* **⏱️ Employee Attendance & Payroll:** Time-in/time-out tracking for shop staff that automatically records working hours to assist with bi-monthly wage and payroll processing.
* **📊 Automated Financial Reporting:** Pre-aggregated monthly and yearly performance history snapshots covering revenue, inventory consumption, payroll totals, and cash variances.
* **🔐 Authentication & Role-Based Access Control (RBAC):** Secure user management leveraging **Supabase Auth** with forced first-time password resets, strict permission boundaries separating general staff from administrative financial ledgers, and audit trails across all operations.

---

🛠️ Tech Stack

* **Frontend:** React.js & Tailwind CSS
* **Backend / API Logic:** Node.js & Express (RESTful API architecture)
* **Database:** Supabase PostgreSQL (Relational tables enforcing strict integrity constraints)
* **Authentication:** Supabase Auth (Built-in user sessions and secure token management)
* **Storage:** Supabase Storage (Cloud object storage for supplementary files, invoices, and documents)