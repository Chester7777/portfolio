import React from "react"
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import Telework from "./Telework/Telework";
import Сontacts from "./Сontacts/Сontacts";
import Footer from "./Footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skills />
            <MyWorks />
            <Telework />
            <Сontacts />
            <Footer />
        </div>
    );
}

export default App;
