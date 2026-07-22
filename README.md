
# 🍅 Tomato Food Delivery Platform

> A full-stack MERN food ordering platform featuring a customer application, an admin dashboard, secure JWT authentication, Stripe Checkout integration, image uploads, and cloud deployment.

## Live Demo

| Service | Link |
|---|---|
| Frontend | https://tomato-food-del-web-frontend.vercel.app |
| Admin | https://tomato-food-del-web.vercel.app |
| Backend API | https://tomato-food-del-web-backend.onrender.com |

---

# Table of Contents
1. Overview
2. Features
3. Tech Stack
4. Architecture
5. Folder Structure
6. Authentication
7. Order Flow
8. Stripe Integration
9. REST APIs
10. Installation
11. Environment Variables
12. Deployment
13. Future Improvements
14. Author

---

# Overview

Tomato Food Delivery Platform is a production-style MERN stack application consisting of three independently deployed applications:

- Customer Frontend
- Admin Dashboard
- Express Backend API

The platform allows customers to browse food items, create accounts, manage carts, place orders securely through Stripe Checkout, and track orders. Administrators can manage food items, monitor orders, and update delivery status.

---

# Features

## Customer

- User Registration
- Secure Login using JWT
- Browse Menu
- Category Filtering
- Add / Remove Cart Items
- Persistent Cart
- Stripe Checkout
- Order Verification
- My Orders Page
- Responsive UI

## Admin

- Add Food Items
- Upload Images
- Delete Food Items
- View Orders
- Update Order Status

## Backend

- JWT Authentication
- RESTful APIs
- MongoDB Atlas Integration
- Multer File Upload
- Stripe Checkout Session
- Order Verification Logic

---

# Tech Stack

## Frontend

- React
- Vite
- React Router
- Context API
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Multer
- Stripe SDK

## Deployment

- Vercel (Frontend)
- Vercel (Admin)
- Render (Backend)
- MongoDB Atlas

---

# System Architecture

```text
Customer React App
        |
        | Axios
        v
Express REST API
   |      |      |
MongoDB Stripe Multer

Admin Dashboard
       |
       +--------> Same REST API
```

---

# Folder Structure

```text
Tomato-FoodDelWeb/
│
├── frontend/
├── admin/
├── backend/
└── .gitignore
```

---

# Authentication Flow

1. User registers.
2. Password stored securely.
3. JWT generated after login.
4. Token stored in Local Storage.
5. Token sent in request headers.
6. Backend middleware validates token.
7. Protected APIs execute only for authenticated users.

---

# Cart & Order Flow

```text
Browse Food
     ↓
Add to Cart
     ↓
Checkout
     ↓
Create Order
     ↓
Stripe Checkout
     ↓
Payment Success
     ↓
Verify Order
     ↓
Admin Processes Order
```

---

# Stripe Integration

- Stripe Checkout Sessions
- Redirect-based payment flow
- Success & Cancel URLs
- Order verification endpoint
- Test mode supported

---

# REST APIs

## User

- POST /api/user/register
- POST /api/user/login

## Food

- GET /api/food/list
- POST /api/food/add
- POST /api/food/remove

## Cart

- POST /api/cart/add
- POST /api/cart/remove
- POST /api/cart/get

## Orders

- POST /api/order/place
- POST /api/order/verify
- POST /api/order/userorders
- GET /api/order/list
- POST /api/order/status

---

# Installation

```bash
git clone https://github.com/CodingWithSandipta/Tomato-FoodDelWeb.git
```


# Deployment

Frontend → Vercel

Admin → Vercel

Backend → Render

Database → MongoDB Atlas

---

# Challenges Solved

- JWT Authentication
- Protected Routes
- React Context State Management
- Stripe Checkout Integration
- Image Upload using Multer
- Render Deployment
- Vercel SPA Routing
- Environment Variable Management
- MongoDB Atlas Connectivity
- GitHub Secret Protection

---

# Future Improvements

- Cloudinary Image Storage
- Email Notifications
- Coupon System
- Wishlist
- Reviews & Ratings
- Inventory Management
- Admin Roles
- Docker Support
- CI/CD Pipeline

---

# Resume Summary

Designed and developed a production-style full-stack MERN food delivery application featuring JWT authentication, Stripe payment gateway integration, MongoDB Atlas, image uploads using Multer, and a dedicated admin dashboard. Deployed the frontend and admin applications on Vercel and the backend on Render while integrating cloud database services for scalable data management.

---

# Author

**Sandipta Bhattacharyya**

GitHub:
https://github.com/CodingWithSandipta

Project Repository:
https://github.com/CodingWithSandipta/Tomato-FoodDelWeb

---

## License

MIT License

⭐ If you found this project interesting, consider giving it a star on GitHub!
