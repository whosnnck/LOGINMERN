import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

import styles from './App.module.scss'

const App = () => {
  return <BrowserRouter>
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/welcome/:id" element={<Welcome />}/>
      </Routes>
    </div>
    </BrowserRouter>
}

export default App;
