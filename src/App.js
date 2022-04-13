import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import { Container } from "@mui/material";
import APIController from "./APIController";

function App() {
    
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const code = urlParams.get('code')

  return (
    <div>
      <Container 
        maxWidth="sm"
        sx={{
          marginTop:"100px",
        }}
      >
        {!code ? <Login /> : <MainPage code={code}/>}
      </Container>
    </div>
  );
}

export default App;
