import Defaultlayout from "./layouts/Defaultlayout";
import Homepage from "./pages/Homepage";
import SingleBook from "./pages/SingleBook";
import NotFoundPage from "./pages/NotFoundPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route element={<Defaultlayout></Defaultlayout>}>
                  <Route path="/">
                      <Route path = "" element={<Homepage></Homepage>}></Route>
                      <Route path = ":id" element={<SingleBook></SingleBook>}></Route>
                      <Route path = "*" element={<NotFoundPage></NotFoundPage>}></Route>
                  </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>

  )
}

export default App;
