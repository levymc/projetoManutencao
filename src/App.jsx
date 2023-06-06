import styled from "styled-components"
import axios from 'axios';
import React, { useState, createContext } from "react";
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';
import ResetStyle from "./style/ResetStyle";
import Swal from 'sweetalert2';
import UserContext from "./components/UserContext";
import AccessPage from "./pages/AccessPage/AccessPage";

export default function App() {

    const [dataUser, setDataUser] = useState({})

    return (
      <UserContext.Provider value={{ dataUser, setDataUser}}>
          <ResetStyle />
            <Container>
              <Router>
                  <Routes>
                      <Route path="/" element={
                          <AccessPage/>
                      }>
                      </Route>
                  </Routes>
              </Router>
            </Container>
      </UserContext.Provider>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #cccccc;
  border: 0;
`

