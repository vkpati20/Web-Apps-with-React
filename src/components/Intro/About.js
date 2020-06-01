import React from 'react'
import reactLogo from './images/react.png'
import './About.css';


function About() {
    return (
        <React.Fragment>
            <div className="imgContainer">
                <img className="reactImg" src={reactLogo} alt=" React Logo" />;
            </div>
            <div className = "aboutBody">
                <div className = "aboutSection">
                    <h1>Pure React built with CSS touch</h1>
                    <p>
                        This website was built using ReactJS. It contains three pages: About, Todo List, and Weather.
                        I've built this page with primary focus on React to showcase my Todo List and Weather apps. 
                        In order to make the website look more appealing, I've added some CSS. You can navigate through
                        the pages using the links above.
                        <br></br>  <br></br> 
                        The Todo app contains three sample todo lists. You can mark items in todo list, or delete them. 
                        The Weather app allows you to enter any city name and uses openweathermap.org API to fetch weather results. 
                        <br></br>
                        <br></br>
                        To inspect this React App, download React Developer Tools extension from your web browser. Then go to inspect, Components.
                        <br></br>
                        To inspect the source code, go to inspect, Inspector. Here you can see all of the HTML and CSS code that went into this website.
                    </p>


                </div> 
            </div>

        </React.Fragment>
    )
}
export default  About;