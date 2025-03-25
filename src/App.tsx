import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import {IndexPage} from "./pages/indexPage.tsx";
import {NotFoundPage} from "./pages/notFoundPage.tsx";

const App: React.FC = () => {
    return (
        <BrowserRouter basename="/Expense_Tracker_React">
            <Routes>
                <Route index element={<IndexPage/>}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

