# 🚀 SB Works – Freelancing Platform (MERN Stack)

## 📌 Overview

SB Works is a full-stack freelancing platform that connects clients with freelancers. Users can post projects, browse opportunities, and collaborate efficiently through a modern web interface.

This project is built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

---

## 🧠 Features

* 👤 User Authentication (Login system)
* 📂 Project Posting & Listing
* 🔍 Browse Freelance Projects
* 💬 Scalable architecture for chat integration
* ⚙️ REST API-based backend
* 📦 Modular component-based frontend

---

## 🏗️ Tech Stack

### Frontend:

* React.js
* Axios
* React Router DOM

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (Mongoose ODM)

---

## 📁 Project Structure

```
freelancer-app/
│
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│
├── server/                 # Node Backend
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 🔹 Step 1: Clone Repository

```bash
git clone https://github.com/your-username/freelancer-app.git
cd freelancer-app
```

---

### 🔹 Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

---

### 🔹 Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## ▶️ Running the Application

### 🔸 Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

---

### 🔸 Start Backend Server

```bash
cd server
node index.js
```

Server runs on:

```
http://localhost:5000
```

---

### 🔸 Start Frontend

```bash
cd client
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### 👤 User Routes

* POST `/api/users/login`

### 📂 Project Routes

* GET `/api/projects`
* POST `/api/projects`

---

## 🧪 Sample API Request

### Create Project

```json
POST /api/projects

{
  "title": "Build MERN App",
  "description": "Need a full-stack developer",
  "budget": 5000
}
```

---

## ❗ Common Issues & Fixes

### 1. MongoDB not connecting

* Ensure MongoDB is running
* Check connection URL:

```
mongodb://127.0.0.1:27017/freelancer
```

### 2. Port already in use

* Change port in `server/index.js`

### 3. React not starting

* Run:

```bash
npm install
```

---

## 🚀 Future Enhancements

* JWT Authentication 🔐
* Real-time Chat (Socket.io) 💬
* Freelancer Dashboard 📊
* Admin Panel ⚙️
* Payment Integration 💳

---

## 👨‍💻 Author

* Anand Sen

---

## 📄 License

This project is for educational purposes.
