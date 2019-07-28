import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import styled from "styled-components";
import ThemeContextProvider from "./contexts/ThContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  const StyledApp = styled.div`
    max-width: 400px;
    margin: 30px auto;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  `;

  return (
    <StyledApp className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </StyledApp>
  );
}

export default App;
