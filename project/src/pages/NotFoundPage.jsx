import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import spinnerImage from "../../public/images/spinner.jpeg";

function ErrorPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="spinner-container" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%"
      }}>
        <div className="skeleton-container" style={{
          position: "relative",
          width: "500px",
          height: "500px",
          borderRadius: "8px",
          overflow: "hidden"
        }}>
          <div className="skeleton-overlay" style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            zIndex: imageLoaded ? 0 : 1
          }} />
          
          <img 
            src={spinnerImage} 
            alt="Loading..." 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              animation: "spin 5s linear infinite",
              opacity: imageLoaded ? 1 : 0.5,
              transition: "opacity 0.3s ease",
              borderRadius: "50%"
            }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <p style={{ 
          marginTop: "20px", 
          color: "#666", 
          fontFamily: "Verdana, Geneva, sans-serif",
          animation: "pulse 1.5s infinite",
          fontSize: "2rem"
        }}>
          Charging...It may take some time...
        </p>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops!</h3>
          <h1>
            <span>#</span>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Sorry, the page you requested was not found</h2>
        <Link to="/" className="notfound-button no-underline">GO BACK</Link>
      </div>
    </div>
  );
}

export default ErrorPage;