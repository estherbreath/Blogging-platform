import React, { useState } from 'react';

const PostModal = ({ isOpen, onClose, onCreatePost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Check if content is not empty
    if (content.trim() === '') {
      return;
    }

    // Handle post creation logic
    onCreatePost(content);

    // Reset the content field and close the modal
    setContent('');
    onClose();
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? 'flex items-center justify-center' : 'hidden'}`}>
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-10">
        <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
        <textarea
          className="w-full h-32 border rounded-lg p-2"
          placeholder="Write your post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
            onClick={handleSubmit}
          >
            Create
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;