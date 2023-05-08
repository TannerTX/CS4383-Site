import './Assets/CSS/styles.css'
import './UploadForm'
import UploadForm from './UploadForm'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const img1 = require("./Assets/Images/1.jpg")
const img2 = require("./Assets/Images/2.jpg")
const img3 = require("./Assets/Images/3.jpg")
const img4 = require("./Assets/Images/4.jpg")
const img5 = require("./Assets/Images/5.jpg")
const img6 = require("./Assets/Images/6.jpg")
const img7 = require("./Assets/Images/7.jpg")



function App() {

  const names = ["Edison Felan", "Tanner Bibb", "Mateo Rivas", "Colin Durham"]
  const imgs = [img1, img2, img3, img4, img5, img6, img7]

  return (
    <>
    <Navbar />
    <div className="one">
    <h1>Planet Orbital Defense</h1>
    <h2><span id="CS">CS4383</span> Group 10</h2>

    <div className="group_members">
    <h1>Group Members</h1>

    {names.map((name, index) => (
      <h4 key={index}>{name}</h4>
    ))}
    </div>


    <div className="timeline">
      <h1>Semester Progression</h1>
    <div className="photos-container">
        {imgs.map((img) => (
          <img src={img} />
        ))}

    </div>

    </div>
    </div>
    </>
  );
}

export default App;
