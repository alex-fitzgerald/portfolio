import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Choice from './components/Choice.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Button from './components/Button.jsx'
import Footer from './components/Footer.jsx'
import CV from './components/CV.jsx'

function App() {
  const [navigation, setNavigation] = useState("Back")

  React.useEffect(() => {
    fetch("/api", {
      headers : {
        "Content-Type": "applications/json",
        "Accept": "application/json"
      }
    })
      .then((res) => res.json())
  }, []);

  function chooseSkills(skills){
    console.log(skills)
    setNavigation(skills)
  }

  function onHover(buttonHovered){
}

  function menuButton(){
    if (navigation === null || navigation === "Main menu" || navigation === "Back" ) {
      return null
    } else {
      return (<Button name="Back" color="white menuButton" onChoice={chooseSkills} onHover={onHover}/>)
    }
  }

  function renderChoice(){
      if (navigation === null){
        return <Header onChoice={chooseSkills} />
        } if (navigation === "Main menu" || navigation === "Back"){
          return <Choice onChoice={chooseSkills} />
        } if (navigation === "Skills") {
          return <Skills />
        } if (navigation === "Portfolio") {
          return <Portfolio name="Back" color="white menuButton" onChoice={chooseSkills} />
        } if (navigation === "CV") {
          return <CV name="Back" color="white menuButton" onChoice={chooseSkills} />
        } 
    }

  return (
    <div className="background">
      <div className="mainpage">
      { menuButton() }
      { renderChoice() }
      <Footer />
     </div>
    </div>
  );
}

export default App;
