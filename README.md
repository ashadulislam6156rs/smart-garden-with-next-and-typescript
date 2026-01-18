# 🌿 SmartGarden

## 📌 Project Description

**SmartGarden** is a web-based platform where users (clients) can easily order plants, flowers, and other garden-related products online.

There are three main roles in this system:

* **Client/User** → Browse and order products
* **Admin** → Verify orders and assign delivery man
* **Delivery Man** → Deliver orders to specific clients

This project is built following modern UI, secure authentication and role-based workflow.

---

## 🌐 Live Demo

**Live:** [https://smart-garden-gules.vercel.app](https://smart-garden-gules.vercel.app/)  

## 👤 Credentials

**Email:**  ashadulislam@gmail.com 
**Password:** Asd123456

---

## ⚙️ Setup & Installation Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ashadulislam6156rs/smart-garden-with-next-and-typescript.git
cd smartgarden
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment setup


Create a `.env` file in the project root and add the necessary environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
NODE_ENV = development
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_IMAGE_API_KEY=like imageBB
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🛣️ Route Summary

### 🔓 Public Routes

* `/` → Home page
* `/products` → All garden products
* `/about` → About the SmartGarden
* `/login` → User login
* `/register` → User registration


### 🛠️ Admin Routes

* `/dashboard/create-product` → Create a product
* `/dashboard/all-products` → All products management (Edit and Delete)

---

## ✨ Implemented Features

* User authentication & authorization (NextAuth)
* Admin create product and manage all products
* Responsive modern UI (Tailwind CSS)
* Toast notifications

---

## 🔍 Feature Explanation (Brief)

### 🔐 Authentication System

Users can register and login securely using **NextAuth**, password encryption handled by **bcrypt**.

### 🛒 Product Ordering

Clients can browse garden products and place orders easily from the product details page.

### 🧑‍💼 Admin Management

Admin can manage all products and create


### 🎨 UI & UX

Modern component-based UI built with **Radix UI**, **Tailwind CSS**, and icons from **Lucide & React Icons**.

---

## 📦 Tech Stack & Dependencies

### Frontend & Framework

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### Backend & Auth

* MongoDB
* NextAuth
* Axios
* bcrypt

### UI Libraries

* Radix UI
* Lucide React
* React Icons
* Sonner / React Toastify

---

## 🚀 Future Improvements

* Online payment integration
* Order tracking with map
* Review & rating system
* Admin analytics dashboard

---

## 👨‍💻 Author

**SmartGarden Project**
Developed as a full-stack web application for learning and production-ready experience.

---

🌱 *Grow smart, garden smarter with SmartGarden!*
