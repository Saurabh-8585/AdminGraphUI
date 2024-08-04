import React from "react";
import { AiFillStar } from "react-icons/ai";

const reviews = [
  {
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    stars: 5,
    review: "Great product! I am very satisfied with the quality and delivery.",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    stars: 4,
    review: "Good service, but the product did not meet my expectations.",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Johnson",
    stars: 3,
    review: "Average experience. The shipping was delayed.",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    stars: 2,
    review: "Not happy with the purchase. The item arrived damaged.",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Robert Brown",
    stars: 5,
    review: "Excellent! Exceeded my expectations in every way.",
  },
];

const FeedBack = () => {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full h-full">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Customer's Feedback
        </h2>
      </header>
      <div className="p-2">
        <div className="space-y-4 h-64 overflow-y-scroll">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex items-start p-3 border-b border-gray-200 dark:border-gray-700"
            >
              <img
                src={review.profilePic}
                alt={`${review.name}'s profile`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    {review.name}
                  </div>
                  <div className="ml-2 text-yellow-500 flex ">
                    {Array.from({ length: review.stars }).map(
                      (_, starIndex) => (
                        <React.Fragment key={starIndex}>
                          <AiFillStar />
                        </React.Fragment>
                      )
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
