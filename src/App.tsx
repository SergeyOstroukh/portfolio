import './App.css';
import styled from 'styled-components';

import React from 'react';
import {Header} from "./components/layout/header/header";
import {Main} from "./components/layout/main/main";
import {Skills} from "./components/layout/skills/skills";


const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
};

export default App;