# 📘 Project Requirement Document (PRD)
# Local Service Booking System

---

## 1. 📌 Project Overview

### Project Name:
Local Service Booking System

### Project Type:
Web Application (Future scope: Mobile App)

### Objective:
To create a platform that connects Customers with Local Service Providers through an Admin-controlled system.

The system will allow:
- Customers to search and book services.
- Service Providers to manage bookings and earnings.
- Admin to manage users, services, and platform revenue.

---

## 2. 🎯 Goals & Vision

- Provide easy booking for local services.
- Enable small service providers to get online visibility.
- Build a scalable SaaS model.
- Generate revenue via commission-based model.

---

## 3. 👥 User Roles

The system will support three main user roles:

1. Admin
2. Service Provider
3. Customer

---

## 4. 🧑‍💼 Admin Requirements

### 4.1 Authentication
- Secure Admin login
- JWT-based authentication
- Role-based access control

### 4.2 Dashboard
- Total Users
- Total Service Providers
- Total Bookings
- Revenue Overview
- Booking Status Summary
- Graphs & Analytics

### 4.3 Service Category Management
- Add Category
- Edit Category
- Delete Category
- Add Subcategory
- Manage pricing model

### 4.4 Service Provider Management
- Approve/Reject provider registration
- View documents (KYC)
- Suspend/Activate provider
- View provider performance
- Set commission percentage

### 4.5 Customer Management
- View customer list
- View booking history
- Block/Unblock users
- Handle complaints

### 4.6 Booking Management
- View all bookings
- Filter bookings by status
- Cancel bookings (admin override)

### 4.7 Payment & Commission
- Set global commission rate
- View payment history
- Manual payout tracking
- Generate revenue reports

### 4.8 Reports & Analytics
- Monthly revenue report
- Top performing services
- City-wise bookings
- Provider earnings report

---

## 5. 🧑‍🔧 Service Provider Requirements

### 5.1 Authentication
- Signup (Name, Email, Phone, Address)
- Upload documents (ID proof)
- Login/Logout
- Password reset

### 5.2 Dashboard
- Total bookings
- Upcoming bookings
- Completed bookings
- Earnings summary
- Reviews & Ratings

### 5.3 Service Management
- Add service
- Edit service
- Set price (fixed/hourly)
- Define availability schedule
- Define service area

### 5.4 Booking Management
- Accept booking
- Reject booking
- Mark as completed
- Reschedule request
- View customer details

### 5.5 Wallet System
- View earnings
- View commission deducted
- Withdrawal request
- Transaction history

### 5.6 Reviews
- View ratings
- Reply to reviews

---

## 6. 👤 Customer Requirements

### 6.1 Authentication
- Signup/Login via email or phone
- OTP-based login (future)
- Profile management

### 6.2 Search & Discovery
- Search services
- Filter by:
  - Price
  - Rating
  - Distance
- View provider profile

### 6.3 Booking Flow
1. Select service
2. Select provider
3. Choose date & time
4. Add address
5. Choose payment method
6. Confirm booking

### 6.4 Booking Management
- View upcoming bookings
- Cancel booking
- Rebook service
- View booking history

### 6.5 Reviews & Ratings
- Rate provider
- Write feedback

### 6.6 Notifications
- Booking confirmation
- Status updates
- Payment confirmation

---

## 7. 🔔 System Notifications

- Email notifications
- SMS notifications (future)
- In-app notifications

---

## 8. 💳 Payment Integration

### Supported Payment Methods:
- Online payment (Razorpay/Stripe)
- Cash on Service

### Payment Flow:
- Customer pays
- System deducts commission
- Remaining amount credited to provider wallet

---

## 9. 🗂 Functional Requirements

- Role-based authentication
- Secure API endpoints
- RESTful API structure
- Prevent double booking
- Real-time booking updates (future)
- Data validation (frontend + backend)
- Error handling & logging

---

## 10. 🛡 Non-Functional Requirements

- Secure JWT authentication
- Password encryption (bcrypt)
- Scalable architecture
- Responsive UI
- Fast load time
- Secure file upload (Cloud storage)
- Input validation & sanitization

---

## 11. 🗄 Database Design (High-Level Collections)

- Users
- ServiceCategories
- Services
- Bookings
- Payments
- Reviews
- WalletTransactions
- Notifications
- ChatMessages (future)

---

## 12. 🏗 Technical Stack

### Frontend
- React
- Redux Toolkit
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer (file upload)
- Cloudinary

### Real-time (Future)
- Socket.io

---

## 13. 📊 Booking Status Flow

- Pending
- Accepted
- In Progress
- Completed
- Cancelled

---

## 14. 📦 MVP Scope

### Phase 1 (MVP)
- User authentication (3 roles)
- Category management
- Booking system
- Admin dashboard
- Commission logic

### Phase 2
- Payment integration
- Wallet system
- Reviews & ratings
- Notifications

### Phase 3
- Real-time chat
- Live tracking
- Advanced analytics
- Subscription model

---

## 15. 💰 Revenue Model

- Commission per booking (10–20%)
- Featured listing
- Subscription for providers
- Advertisements (future)

---

## 16. 🚀 Future Enhancements

- Mobile app (React Native)
- AI-based service recommendations
- Dynamic pricing
- Multi-city support
- Subscription packages
- Corporate service bookings

---

## 17. 📅 Estimated Development Timeline

| Phase | Duration |
|-------|----------|
| Planning & Design | 1–2 Weeks |
| MVP Development | 4–6 Weeks |
| Testing | 2 Weeks |
| Deployment | 1 Week |

---

## 18. 📌 Success Metrics

- Number of registered providers
- Number of completed bookings
- Monthly revenue
- Customer retention rate
- Average rating score

---

# ✅ Conclusion

This project aims to build a scalable local service marketplace that connects customers and providers while generating sustainable platform revenue through a commission-based model.

The system will initially launch as an MVP and gradually scale with advanced features and multi-city support.



## Core Features

### 1. User Authentication & Authorization
  - User Registration : Account creation with email verification
  - User Login : Secure authentication with JWT tokens
  - Password Management : Chnage password, forgot/reset password
  - Email Verification : Account verification via email tokens
  - Token management : Access token refresh mechanism
  - Role based access control

### 2. Service Management
  - Service creatioon : Create new service with name and description (Service Provider & Admin)
  - Service Listing - Make the service available for users (Service Provider & admin)
  - Service Details - Access Individual service informations
  - Service Updates : Modify service details (Service Provider Only)
  - Service Deletion : Remove service from listing (Service Provider Only)

### User Management : 
  - Service Provider Approval : Admin need to approve service provider details (Admin only)
  - 


