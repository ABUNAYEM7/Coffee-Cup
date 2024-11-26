import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center">
      <h1 className="text-6xl font-bold text-error">404</h1>
      <p className="text-xl font-medium text-gray-700 my-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-md text-gray-500 mb-6">
        It might have been removed or the URL might be incorrect.
      </p>
      <div className="flex gap-4">
        <Link to="/">
          <button className="btn btn-primary">Go Home</button>
        </Link>
        <Link to="/">
          <button className="btn btn-outline btn-secondary">Try Again</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
