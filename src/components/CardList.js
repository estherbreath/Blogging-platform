import React from 'react';
import Card from './Card';

const App = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    // Add more cards as needed
  ];

  return (
    <div className="App">
      <h1>My React App with Tailwind CSS</h1>
      <div className="flex justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
