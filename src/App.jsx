import Defaultlayout from "./layouts/Defaultlayout";
import Homepage from "./pages/Homepage";
import SingleMovie from "./pages/SingleMovie";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route element={<Defaultlayout></Defaultlayout>}>
                  <Route path="/">
                      <Route path = "" element={<Homepage></Homepage>}></Route>
                      <Route path = ":id" element={<SingleMovie></SingleMovie>}></Route>
                  </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>

  )
}

export default App;
