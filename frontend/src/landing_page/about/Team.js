import React from "react";
function Team() {
  return (
    <div>
      <div className="container">
        <div className="row   ">
          <h1 className="text-center  ">People</h1>
        </div>
        <div className="row pt-6 ">
          <div className="col-5 p-3 text-center about-me  " >
            <img className=""
              src="media/images/2.jpg"
              alt="me"
              style={{ borderRadius: "100%", width: "60%" }}
            />
            <h4 className="mt-5">Priya Singh</h4>
            <h6>(Web Developer)</h6>
          </div>
          <div className="col-5 p-5 fs-6 mt-3 sec " >
            <p>
            <b>Priya Singh</b> is a B.Tech Computer Science student at ABES Engineering College, Ghaziabad. She is a passionate developer with expertise in DSA (Java), web development (HTML, CSS, JavaScript, Node.js, Express, EJS), and competitive programming, earning a silver badge on CodeChef and 4 stars on HackerRank as a Java problem solver. </p>
             <p> She is also a Technical Coordinator at GDG, actively contributing to the developer community.</p>
              <p>Connect with me on <a href="">Github</a> / <a href="">LinkedIn</a></p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
