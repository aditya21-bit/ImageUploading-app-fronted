# 📸 Image Upload App

A full-stack image upload application built using React, Express.js, Multer, and Axios. Users can upload and preview up to 5 images at a time with support for JPG, PNG, and GIF formats.

## 🚀 Features

- Upload up to 5 images simultaneously
- Preview selected images before uploading
- Store uploaded images using Multer
- Display uploaded images dynamically
- Clean and responsive user interface
- Supports JPG, PNG, and GIF formats

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Multer
- CORS

## 📂 Project Structure

```
image-upload-app/
│
├── backend/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## 📸 Supported Formats

- JPG
- PNG
- GIF

## 🔄 Workflow

1. Select up to 5 images.
2. Preview images before upload.
3. Click Upload Images.
4. Images are stored inside the `uploads` folder.
5. Uploaded images are displayed on the screen.

## 📌 Future Enhancements

- Drag and drop upload
- Image validation
- Progress bar
- Cloudinary integration
- MongoDB support
- User authentication

## 👨‍💻 Author

**Aditya Gupta**

Built with ❤️ using React and Node.js.