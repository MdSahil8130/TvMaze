import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  function convertToHumanReadableDate(dateString) {
    const dateObject = new Date(dateString);
    const options = { year: "numeric", month: "short" };
    const humanReadableDate = dateObject.toLocaleDateString("en-US", options);

    return humanReadableDate;
  }

  return (
    <>
      <div className="py-2 pb-4 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-56 h-72 rounded-sm"
          src={
            data.image?.medium
              ? data.image?.medium
              : "https://via.placeholder.com/210x295?text=No+Image"
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-2">
          <div className="font-medium text-black text-xl mb-2">{data.name}</div>
          <p className="text-gray-700 text-base">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.genres.slice(0, 2).join(", ")}
            </span>
          </p>
          <p className="text-gray-700 text-base">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.language}
            </span>
          </p>
          <p className="text-gray-700 text-base">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Premiered :{" "}
              {data.premiered
                ? convertToHumanReadableDate(data.premiered)
                : "No Date"}
            </span>
          </p>
          <p className="text-gray-700 text-base">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Rating :{" "}
              {data.rating.average ? `${data.rating.average}⭐` : "No Rating"}
            </span>
          </p>
        </div>
        <Link
          to={`/${data.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium text-base   px-2 py-1 rounded"
        >
          Read More
        </Link>
      </div>
    </>
  );
}

export default Card;
