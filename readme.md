# 🛍️ Product Helpers eCommerce Platform

**Product Helpers** is an open-source eCommerce platform built with the **MERN stack** and **Redux**, designed to streamline the process of collecting, managing, and displaying product reviews and ratings. It provides a user-friendly interface for both consumers and businesses, enabling seamless communication and feedback.

---

## 🚀 Deployment

🔗 [Live Demo](https://product-helpers-4avp.onrender.com/)

---

## 👥 Login Credentials

### Admin:
- **Email:** `admin@email.com`  
- **Password:** `admin`

### User:
- **Email:** `tester@gmail.com`  
- **Password:** `tester`

---

## ✨ Features

- 🛒 Full-featured shopping cart
- ⭐ Product reviews and ratings
- 🎠 Top products carousel
- 📄 Product pagination
- 🔍 Product search functionality
- 👤 User profile with order history
- 🛠️ Admin product management
- 👥 Admin user management
- 📦 Admin order details view
- ✅ Mark orders as delivered
- 💳 Complete checkout process (shipping, payment, etc.)
- 🌱 Database seeder (products & users)

---

--
## ER Daigram 


![image alt]()

## 📦 Scripts

| Command          | Description                   |
|------------------|-------------------------------|
| `npm run build`  | Builds the app for production |
| `npm start`      | Starts the server             |

---

## ⚙️ Environment Variables (`.env`)

```env
PORT=5000
MONGO_URI=mongodb+srv://test1234:test1234@cluster0.ahqesyk.mongodb.net/proshop
JWT_SECRET=abc123

PAYPAL_CLIENT_ID=<your_paypal_client_id>
PAYPAL_APP_SECRET=<your_paypal_secret>
PAYPAL_API_URL=https://api-m.sandbox.paypal.com
