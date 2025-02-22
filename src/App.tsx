import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Table from "./components/Table/Table.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import React, {useEffect} from "react";
import tableStore from "./store/tableStore.tsx";
import {observer} from "mobx-react";

const App: React.FC = observer(() => {

    useEffect(() => {
        tableStore.getData()
    }, []);

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path={'/'} element={<Table />}/>
          <Route path={'*'} element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
})

export default App
