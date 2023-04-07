import './Assets/CSS/styles.css'
import './UploadForm'
import UploadForm from './UploadForm'
import Navbar from './Navbar'

function App() {

  const names = ["Tanner Bibb", "Edison Felan", "Mateo Rivas"]

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
    </div>
    </>
  );
}

export default App;
