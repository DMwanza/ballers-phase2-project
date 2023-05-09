import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <img
        src="https://www.hoophall.com/files/5616/4546/8097/Building_-_Blanchard_2020_0221.jpg"
        // src="https://site-images.similarcdn.com/image?url=rnbastreams.com&t=1&s=1&h=0b0a37525ce596b0f9e38226af2d7c7bcd74476c5807eecbdb069eb9978cd4d3"
        alt="the gamers"
        id="img"
      />
      <div className="imgtxt">
        <p>
          <h3> Ballers App</h3>
          {/* <strong>
            Add a little fun to your Game. our team charity, works to address
            community needs and give back to the city we are all lucky to call
            home.
          </strong> */}
        </p>
      </div>
    </div>
  );
}
export default Home;
