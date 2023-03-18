import React from "react";
import Card from "./card";

const CardList = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is card 1",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 2",
      description: "This is card 2",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 3",
      description: "This is card 3",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div style={styles.cardListContainer}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

const styles = {
  cardListContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default CardList;
