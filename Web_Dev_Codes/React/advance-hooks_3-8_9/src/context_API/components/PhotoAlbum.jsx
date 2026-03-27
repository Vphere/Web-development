import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiData from "./ApiData";
import "./PhotoAlbum.css";

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const getRandomGradient = () => {
    const gradients = [
      "linear-gradient(135deg, #667eea, #764ba2)",
      "linear-gradient(135deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #4facfe, #00f2fe)",
      "linear-gradient(135deg, #43e97b, #38f9d7)",
      "linear-gradient(135deg, #fa709a, #fee140)"
    ];

    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=4"
        );

        const photosWithColor = response.data.map((photo) => ({
          ...photo,
          bgColor: getRandomGradient()
        }));

        setPhotos(photosWithColor);
      } catch (err) {
        setError(err);
      } 
    };

    fetchPhotos();
  }, []);


  if (error) {
    return <h2 style={{ textAlign: "center" }}>Error fetching photos</h2>;
  }

  return (
    <div className="album-container">
      {photos.map((photo) => (
        <ApiData key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoAlbum;
