# Mechanic Booking System

A full-stack MERN application for managing mechanic service bookings. This application replaces manual paper and Excel-based booking management with a modern digital system that supports authentication, secure CRUD operations, search functionality, booking statistics, and dashboard analytics.

---

## Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcrypt

---

### Booking Management

- Create Booking
- View All Bookings
- Edit Booking
- Delete Booking
- Search Bookings
- Booking Status Management

---

### Dashboard

- Booking Statistics
- Pie Chart Visualization
- Search Bar
- Responsive Dashboard
- Today's Date
- Loading Indicators

---

### Booking Details

- Customer Name
- Phone Number
- Vehicle Number
- Vehicle Type
- Service Type
- Booking Date
- Booking Status

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Chart.js
- React ChartJS 2
- React Toastify
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Validator

---

## Folder Structure

```
Mechanic-booking-system
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│
└── server
    ├── config
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    ├── utils
    ├── package.json
    └── server.js
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

---

### Backend

```bash
cd server
npm install
npm run dev
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

---

### Bookings

GET /api/bookings

POST /api/bookings

PUT /api/bookings/:id

DELETE /api/bookings/:id

---

## Security

- JWT Authentication
- Password Hashing
- Protected Routes
- Input Validation
- XSS Input Sanitization

---

## Accessibility

- Keyboard Navigable
- ARIA Labels
- Loading Indicators
- Empty State Handling
- Form Validation

---

## Dashboard Analytics

- Total Bookings
- Pending Bookings
- In Progress Bookings
- Completed Bookings
- Booking Status Pie Chart

---

## Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

---

## Future Improvements

- Email Notifications
- Service History
- Mechanic Assignment
- Invoice Generation
- Payment Integration
- Admin Dashboard
- Booking Export (PDF/Excel)

---