// import React, { useState } from 'react';
// import Button from './component/Button';
// import  CardList from './component/CardList'
// import TextContent from './component/TextContent';
// import PostModal from './component/PostModal';

// const App = () => {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };
//   const cards = [
//     {
//       title: 'Card 1',
//       description: 'This is the first card.',
//       imageSrc: 'https://via.placeholder.com/300',
//     },
//     {
//       title: 'Card 2',
//       description: 'This is the second card.',
//       imageSrc: 'https://via.placeholder.com/300',
//     },
//     // Add more cards as needed
//   ];
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [posts, setPosts] = useState([]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleCreatePost = (content) => {
//     // Handle post creation logic, e.g., store it in state
//     const newPost = {
//       id: Date.now(), // Replace with a proper ID generation method
//       content,
//     };
//     setPosts([...posts, newPost]);
//   };

//   return (
//     <div className="App">
//       <h1>My React App with Tailwind CSS</h1>
//       <Button text="Click Me" onClick={handleClick} className="mt-4" />
//       <CardList cards={cards}/>
//       <div className="App">
//       <h1>Welcome to TextContent Component</h1>
//       <TextContent text="This is some sample text." />
//     </div>
//     <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         onClick={openModal}
//       >
//         Create Post
//       </button>
//       <PostModal isOpen={isModalOpen} onClose={closeModal} onCreatePost={handleCreatePost} />
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold mb-2">Existing Posts</h2>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id} className="mb-2">{post.content}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
