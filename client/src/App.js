import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 25px 96px; 
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          {/* menu */}
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}></Menu>
          <Main>
            <Navbar darkmode={darkMode}></Navbar>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random"></Home>}></Route>
                  <Route path="trends" element={<Home type="trend"></Home>}></Route>
                  <Route path="subscriptions" element={<Home type="sub"></Home>}></Route>
                  <Route path="search" element={<Search />} />
                  <Route path="signIn" element={<SignIn></SignIn>}></Route>
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
