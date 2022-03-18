import TopBar from "./components/topBar";
import Home from "./page/home/Home";
import Setting from "./page/setting/Setting";
import Single from "./page/single/Single"
import Write from "./page/write/Write";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/setting" element={<Setting/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/post/:postId" element={<Single />} >
        </Route>
    </Routes>


      <Footer />
    </Router>
  
  );
}

export default App;
