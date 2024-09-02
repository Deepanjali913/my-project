import React, { useState } from 'react';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-xl shadow-lg max-w-md mx-auto my-10">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white text-sm font-bold mb-2">Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-bold mb-2">Review</label>
          <textarea
            value={review}
            onChange={handleReviewChange}
            rows="4"
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-bold mb-2">Upload Picture</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 text-white border border-white rounded-lg cursor-pointer bg-transparent hover:bg-white hover:text-black focus:outline-none"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
