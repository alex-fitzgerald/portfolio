import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Choice from './components/Choice.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Button from './components/Button.jsx'

function App() {
  const [navigation, setNavigation] = useState(null)

  function chooseSkills(skills){
    console.log(skills)
    setNavigation(skills)
  }

  function footerName(){
    if (navigation === null) {
      return null
    } else {
      return (<h2>Alex Fitzgerald</h2>)
    }
  }

  function menuButton(){
    if (navigation === null || navigation === "Main menu" || navigation === "Back" ) {
      return null
    } else {
      return (<Button name="Back" color="white menuButton" onChoice={chooseSkills} />)
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
        }
    }

  return (
    <div className="background">
      <div className="mainpage">
      { menuButton() }
      { renderChoice() }
      <div className="footer">
      { footerName() }
      <br />
       <h3>Fullstack Web Developer and Graphic Designer</h3>
      </div>
     </div>
    </div>
  );
}

export default App;
