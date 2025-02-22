import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Table from "./components/Table/Table.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import React, {useEffect} from "react";
import tableStore from "./store/tableStore.tsx";
import {observer} from "mobx-react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const App: React.FC = observer(() => {

    useEffect(() => {
        tableStore.getData()
    }, []);

    const customTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#90caf9',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#f48fb1',
            },
            background: {
                default: '#373e45',
                paper: '#373e45',
            },
            text: {
                primary: '#ffffff',
                secondary: '#b0bec5',
            }
        },
        typography: {
            fontFamily: 'Arial, sans-serif',
            h2: {
                fontSize: '2rem',
                fontWeight: 700
            },
            body1: {
                fontSize: '1rem',
            }
        },
    });


    return (
    <>
        <ThemeProvider theme={customTheme}>
            <CssBaseline>
                <BrowserRouter basename={import.meta.env.BASE_URL}>
                    <Routes>
                        <Route path={'/'} element={<Table />}/>
                        <Route path={'*'} element={<NotFound />}/>
                    </Routes>
                </BrowserRouter>
            </CssBaseline>
        </ThemeProvider>
    </>
  )
})

export default App
