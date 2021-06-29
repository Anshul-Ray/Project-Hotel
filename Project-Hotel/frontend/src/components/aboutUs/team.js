import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import avtr from '../images/avatar.jpeg';
import './team.css';
function Team() {
  
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card m-4 grdt" style={{width: "20rem"}}>
          <img src={avtr} class="card-img-top mt-3 rounded-circle mx-auto d-block" style={{ height: "40%", width: "40%", backgroundColor: "#7aaadb" }} />
          <div className="card-body">
            <h2 className="card-title text-center p-2">Hardik Pachory</h2>
            <p className="card-text text-center">Fullstack Developer</p>
            <p><i>Hey, I am Hardik Pachory and I am an engineering student. What makes me special is my art of playing with
              words, to be precise - <b>poetry</b>. So a epistemophile, sophophile and an artist, is what defines me the best. I am a quick learner who is always indulged in learning something and
              believe that <b>"Learning is the process that begins from birth and continues till we breath."</b></i></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card m-4 grdt" style={{ width: "20rem"}}>
          <img src={avtr} class="card-img-top mt-3 rounded-circle mx-auto d-block" style={{ height: "40%", width: "40%", backgroundColor: "#7aaadb" }} />
          <div className="card-body">
            <h2 className="card-title text-center p-2">Anshul Ray</h2>
            <p className="card-text text-center">Fullstack Developer</p>
            <p><i>Hey! I am Anshul Ray. I am an engineering student.
              I am passionate about coding and learning logical concepts.
              My passion for <b>learning and exploring</b> makes me a special student and a coder.
              And this defines me the best. I have a good hand in gaming, painting and writing.
              I believe that <b>"Creativity and logic goes hand in hand."</b>
            </i></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card m-4 grdt" style={{ width: "20rem" }}>
          <img src={avtr} class="card-img-top mt-3 rounded-circle mx-auto d-block" style={{ height: "40%", width: "40%", backgroundColor: "#7aaadb" }} />
          <div className="card-body hardik">
            <h2 className="card-title text-center p-2">Deepak Karnani</h2>
            <p className="card-text text-center">Fullstack Developer</p>
            <p style={{height:"15rem"}}><i>Hello, My name is Deepak. I am an engineering student.
              I am passionate about dancing, and cricket.
              My fondness for dancing and playing is what defines me.
              I <b>love challenges</b> and I believe <b>“If you hit a wall, climb over it, crawl under it, or dance on top of it.”</b></i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
