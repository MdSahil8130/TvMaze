// import React from 'react'
import { useState } from "react";
import fakeData from "../api/data.json";
import { useParams } from "react-router-dom";
import { getShow } from "../api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getShow(id).then((res) => {
      setShow(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-4xl font-bold text-center">Loading...</div>;
  }
  if (!show) {
    return <div className="text-4xl font-bold text-center">No Data Found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Link
        to={`/`}
        className="bg-blue-500 hover:bg-blue-700 text-white w-32font-medium text-base  mb-8 px-2 py-1 rounded"
      >
        Back To Home
      </Link>
      <div className="py-2 w-full rounded flex items-center justify-center gap-24">
        <img
          className="w-72 h-96 sp rounded-sm"
          src={
            show.image?.medium
              ? show.image?.medium
              : "https://via.placeholder.com/210x295?text=No+Image"
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-2 flex flex-col  items-start">
          <div className="font-medium text-black text-3xl mb-5">
            <span>{show.name}</span>
          </div>
          <p className="text-gray-700 text-base">
            {show.genres.map((genre, index) => {
              return (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {genre}
                </span>
              );
            })}
          </p>
          <p className="text-gray-700 text-base">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {show.language}
            </span>
          </p>
          <p className="text-gray-700 text-base">
            <a
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 hover:text-purple-600 mr-2 mb-2"
              href={show.officialSite}
            >
              {show.officialSite ? "Official Site" : "No Official Site"}
            </a>
          </p>

          {/* <p className="text-gray-700 text-base">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Premiered :{" "}
            {show.premiered
              ? convertToHumanReadableDate(show.premiered)
              : "No Date"}
          </span>
        </p> */}
          <p className="text-gray-700 text-base">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Rating :{" "}
              {show.rating.average ? `${show.rating.average}⭐` : "No Rating"}
            </span>
          </p>
          <p className="inline-block  text-left rounded-full w-[500px]  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {/* Summary :{" "} */}
            {show.summary
              ? show.summary.replace(/<[^>]*>?/gm, "")
              : "No Summary"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
