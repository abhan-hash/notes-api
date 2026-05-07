````md
# 📝 Notes API
This is my first project in backend development i made using nodejs.

A simple RESTful Notes API built using Node.js and Express.  
This project supports full CRUD operations (Create, Read, Update, Delete) for managing notes using a local JSON file as storage.

---

## 🚀 Features

- 📄 Get all notes
- 🔍 Get a note by ID
- ➕ Create a new note
- ✏️ Update an existing note
- ❌ Delete a note
- 💾 File-based storage using `data.json`
- ⚡ Built with Express.js

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- File System Module (`fs`)

---

## 📁 Project Structure

```bash
notes-api/
│
├── routes/
│   └── notes.js
│
├── data.json
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
````

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/abhan-hash/notes-api.git
```

Move into the project folder:

```bash
cd notes-api
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Server

```bash
node index.js
```

Server runs on:

```bash
http://localhost:3000
```

---

# 📌 API Endpoints

## 1️⃣ Get All Notes

### Request

```http
GET /notes
```

### Response

```json
[
  {
    "id": 1740000000000,
    "title": "Sample Note",
    "content": "This is a sample note"
  }
]
```

---

## 2️⃣ Get Note by ID

### Request

```http
GET /notes/:id
```

Example:

```http
GET /notes/1740000000000
```

---

## 3️⃣ Create a New Note

### Request

```http
POST /notes
```

### Body

```json
{
  "title": "New Note",
  "content": "This is a new note"
}
```

### Response

```json
{
  "id": 1740000000000,
  "title": "New Note",
  "content": "This is a new note"
}
```

---

## 4️⃣ Update a Note

### Request

```http
PUT /notes/:id
```

### Body

```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

---

## 5️⃣ Delete a Note

### Request

```http
DELETE /notes/:id
```

### Response

```json
{
  "message": "note deleted successfully"
}
```

---

# 🧪 Testing the API

You can test the API using:

* Postman
* Thunder Client
* cURL

---

# 📚 Learning Concepts Used

* REST APIs
* Express Routing
* Middleware
* JSON Parsing
* File Handling with `fs`
* CRUD Operations

---

# ⚠️ Limitations

* Uses local JSON storage instead of a database
* Synchronous file operations (`readFileSync`, `writeFileSync`)
* No authentication

---

# 🔮 Future Improvements

* MongoDB integration
* Async file handling
* Authentication & Authorization
* Validation using middleware
* Better error handling

---

# 👨‍💻 Author

### Abhan

GitHub:
[abhan-hash](https://github.com/abhan-hash?utm_source=chatgpt.com)

---

# ⭐ If you found this useful

Give the repository a star ⭐

```
```
