import React, { useEffect, useState } from "react";
import styles from "./mainHome.module.css";

const MainHome = () => {
  const [youtube, setYoutube] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCVyEmd6wfy_6o24ahlwLem91lNz8-J-30`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setYoutube(data.items);
      });
  }, []);

  return (
    <div className={styles.youtubeContainer}>
      {youtube.map((video) => (
        <div key={video.id} className={styles.youtubeCard}>
          {/* Video */}
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Title */}
          <h3 className={styles.youtubeTitle}>{video.snippet.title}</h3>

          {/* Channel + Views */}
          <p className={styles.channelInfo}>
            
            {video.snippet.channelTitle} • {video.statistics.viewCount} views
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainHome;
