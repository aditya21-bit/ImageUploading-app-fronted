import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    setImages(files);

    const previewUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(previewUrls);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const res = await axios.post(
        "https://imageuploading-app-backend.onrender.com/upload",
        formData
      );

      setUploadedImages(res.data.imageUrls);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>UPLOAD YOUR IMAGES</h1>
       <h6 className="subtitle">
    Upload up to 5 images at a time.
    <br />
    Supported formats: JPG, PNG, GIF.
  </h6>
        <input className="file-input"
          type="file"
          multiple
          onChange={handleChange}
        />

        {previews.length > 0 && (
          <>
            <h3>Preview Images</h3>

            <div className="image-grid">
              {previews.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Preview"
                  width="150"
                />
              ))}
            </div>

            <button onClick={handleUpload}>
              Upload Images
            </button>
          </>
        )}

        {uploadedImages.length > 0 && (
          <>
            <h3>Uploaded Images</h3>

            <div className="image-grid">
              {uploadedImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Uploaded"
                  width="150"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <footer className="footer">
        © 2026 Image Upload App | Built with React & Multer
    
      </footer>
    </>
  );
}

export default App;