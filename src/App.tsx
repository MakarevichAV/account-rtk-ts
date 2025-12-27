import './App.css'
import Profile from "./components/Profile";
import {Route, Routes} from "react-router";
import Guest from "./components/Guest";

function App() {
  // TODO: Implement token retrieval from global state logic
  const token = '';
  return (
      <Routes>
        <Route path="/" element={<Guest/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>

  )
}

export default App
