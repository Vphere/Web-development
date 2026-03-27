import React from "react";
import "./ApiData.css";

const ApiData = ({ photo }) => {
  
  if (!photo) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="card">
      
      {/* Image Section with Dynamic Background */}
      <div
        className="card-image-box"
        style={{ background: photo.bgColor }}
      >
        <img src={photo.url} alt={photo.title} />
      </div>

      {/* Content Section */}
      <div className="card-content">
        <h3 className="card-title">{photo.title}</h3>
        <p><strong>Album ID:</strong> {photo.albumId}</p>
        <p><strong>ID:</strong> {photo.id}</p>
      </div>

    </div>
  );
};

export default ApiData;
