// import React from 'react'
import Card from "../Components/Card";
import fakedData from "../api/data.json";
import { useEffect, useState } from "react";
import { getShows } from "../api";
import Search from "../Components/Search";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    console.log(searchQuery);
    getShows(searchQuery ? searchQuery : "a").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <div>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        <div className="flex flex-wrap py-10 items-center justify-center gap-10">
          {loading && (
            <div className="text-4xl font-bold text-center">Loading...</div>
          )}
          {data.map((item) => (
            <Card key={item.show.id} data={item.show} />
          ))}
          {!loading && data.length === 0 && (
            <div className="text-4xl font-bold text-center">No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
