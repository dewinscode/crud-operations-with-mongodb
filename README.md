# 💬 Mini chat Clone (CRUD App)

A simple backend project that simulates basic chat functionality similar to WhatsApp.
Built using Node.js, Express, MongoDB, and EJS.

---

## 🚀 Features

* Create new chat messages
* View all chats
* Edit existing messages
* Delete messages
* Server-side rendering using EJS

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS (Templating Engine)
* Method Override
* HTML

---

## 📁 Project Structure

```
mongobackend/
│── models/
│   └── chat.js
│── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│── public/
|   |__ style.css
|   
│── index.js
│── package.json
│── .gitignore
|__ init.js
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone <your-repo-link>
```

2. Navigate to project folder:

```
cd mongobackend
```

3. Install dependencies:

```
npm install
```

4. Start MongoDB locally

5. Run the server:

```
node index.js
```

6. Open in browser:

```
http://localhost:8080/chats
```

---

## 📌 Routes

| Method | Route           | Description    |
| ------ | --------------- | -------------- |
| GET    | /chats          | View all chats |
| GET    | /chats/new      | New chat form  |
| POST   | /chats          | Create chat    |
| GET    | /chats/:id/edit | Edit form      |
| PUT    | /chats/:id      | Update chat    |
| DELETE | /chats/:id      | Delete chat    |

---

## 🧠 Learning Outcomes

* Understanding CRUD operations
* Working with MongoDB and Mongoose
* Handling form data in Express
* Using method-override for PUT and DELETE
* Rendering dynamic content using EJS

---



## 🙌 Author

Made by Yuvraj singh
