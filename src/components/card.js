import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div style={styles.cardContainer}>
      <img src={image} alt="card" style={styles.cardImage} />
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    height: "400px",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    objectFit: "cover",
  },
  cardTitle: {
    margin: "20px",
    fontWeight: "bold",
  },
  cardDescription: {
    margin: "20px",
    textAlign: "center",
  },
};

export default Card;
