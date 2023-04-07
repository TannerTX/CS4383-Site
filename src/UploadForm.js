import React, { useState } from "react";
import './App.css';

const UploadForm = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };

    return (
      <div>
        <h4>Upload a Photo</h4>
        <form>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
    
        {selectedFile && (
          <div>
            <h2>Preview:</h2>
            <img src={URL.createObjectURL(selectedFile)} alt="Preview" style={{ maxWidth: "30%" }} />
          </div>
        )}
      </div>
    );
}


export default UploadForm