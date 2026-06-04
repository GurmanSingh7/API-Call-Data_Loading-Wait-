<div align="center">

# 🌐 API Call Loading and Showing Loader while Loading Data

<img src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif" width="350"/>

### ⏳ Loading Animation While Waiting for Server Response

![React](https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![API](https://img.shields.io/badge/API-Integration-blue?style=for-the-badge)
![Loader](https://img.shields.io/badge/Loading-Screen-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)

</div>

---

# 🚀 Overview

This project demonstrates how to:

✅ Fetch data from an API

✅ Display a professional loading screen

✅ Handle asynchronous requests

✅ Improve user experience during data fetching

✅ Display API response dynamically

✅ Handle loading and error states

---

# 🎥 Project Preview

<div align="center">

<img src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" width="600"/>

</div>

---

# ⚡ Workflow

```text
User Request
     │
     ▼
Show Loader
     │
     ▼
API Request Sent
     │
     ▼
Waiting For Server
     │
     ▼
Response Received
     │
     ▼
Hide Loader
     │
     ▼
Display Data
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| ReactJS | Frontend |
| JavaScript | Logic |
| Fetch API / Axios | API Calls |
| CSS3 | Styling |
| HTML5 | Structure |

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Loader.jsx
│   ├── ApiData.jsx
│
├── App.jsx
├── main.jsx
└── styles.css
```

---

# 🔄 Loading State Example

```javascript
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
}, []);
```

---

# 🎨 Features

✨ Modern Loader Animation

✨ API Integration

✨ Responsive Design

✨ Error Handling

✨ Clean UI

✨ Reusable Components

✨ Fast Performance

---

# 📊 Status Flow

```mermaid
graph TD
A[Start] --> B[Show Loader]
B --> C[Call API]
C --> D[Waiting]
D --> E[Response Received]
E --> F[Hide Loader]
F --> G[Render Data]
```

---

# 📸 Screenshots

## Loading State

<img src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" width="450"/>

---

## Data Loaded Successfully

<img src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif" width="450"/>

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/GurmanSingh7/API-Call-Loading-Demo.git
```

### Install Dependencies

```bash
npm install
```

### Run Project

```bash
npm run dev
```

---

# 💡 Use Cases

- Dashboard Loading States
- User Authentication Screens
- Product Fetching
- Weather APIs
- News APIs
- Admin Panels
- Analytics Platforms

---

# 👨‍💻 Developer

### Gurman Singh

GitHub:

https://github.com/GurmanSingh7

---

<div align="center">

## ⭐ Star This Repository If You Found It Useful

<img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="200"/>

### Happy Coding 🚀

</div>
