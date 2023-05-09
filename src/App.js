import './Assets/CSS/styles.css'
import './UploadForm'
import UploadForm from './UploadForm'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import Modal from 'react-modal';

const img1 = require("./Assets/Images/1.jpg")
const img2 = require("./Assets/Images/2.jpg")
const img3 = require("./Assets/Images/3.jpg")
const img4 = require("./Assets/Images/4.jpg")
const img5 = require("./Assets/Images/5.jpg")
const img6 = require("./Assets/Images/6.jpg")
const img7 = require("./Assets/Images/7.jpg")
const img8 = require("./Assets/Images/8.JPG")
const img9 = require("./Assets/Images/9.JPG")
const img10 = require("./Assets/Images/10.JPG")
const img11 = require("./Assets/Images/11.JPG")
const img12 = require("./Assets/Images/12.JPG")

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function App() {
// Modal.setAppElement('App');

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(null)

  function openModal(img) {
    setCurrImg(img)
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const names = ["Edison Felan", "Tanner Bibb", "Mateo Rivas", "Colin Durham"]
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]



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

    <h1>Brief Description</h1>
      <p><strong>Planetary Orbital Defense</strong> is very straightforward and easy to play:</p>
      <p><strong>Asteroids</strong> approach in waves, your job is to <b>defend earth</b> by activating Earth's shields at the right time.</p>
      <p>Earth has <b>3 lives.</b></p>
      <p>Losing all lives in-turn <b>destroys the Earth</b>. Don't let this happen.</p>
    </div>
    
    

    <div className="timeline">
      <h1>Semester Progression</h1>
    <div className="photos-container">
        {imgs.map((img) => (
          <img src={img} onClick={() => openModal(img)} />
        ))}

    </div>
    <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={currImg} />
      </Modal>  
    </div>
    </div>
    </>
  );
}

export default App;
