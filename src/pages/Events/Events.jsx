import { Route, Routes } from 'react-router-dom'
import EventCategory from './pages/EventCategory'


export default function Events(){
    return(
        <>
            <Routes >
                <Route path="/" element={<EventCategory/>} />
            </Routes>
        </>
    )
}