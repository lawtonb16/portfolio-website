import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";

const Page = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(
        90deg,
        rgba(20, 49, 57, 1) 27%,
        rgba(8, 14, 54, 1) 73%
    );
`;

function App() {
    return (
        <Page>
            <Navbar />
            <Routes>
              <Route path ="/"element={<Skills />} />
              <Route path ="/projects" element={<Projects />} />
            </Routes>
        </Page>
    );
}

export default App;
