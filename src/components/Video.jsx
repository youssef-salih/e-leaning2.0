import React, { useEffect, useState } from "react";
import Card from "./Card";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Video = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "videos"));
        const videoData = [];
        querySnapshot.forEach((doc) => {
          // Assuming each document has 'url', 'name', and 'thumb' fields
          const video = {
            id: doc.id,
            ...doc.data(),
          };
          videoData.push(video);
        });
        setData(videoData);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="h-full flex  p-5 justify-center">
        <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
          {data.map((video) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-3"
              key={video.id}
            >
              <Card src={video.url} name={video.name} thumb={video.thumb} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
