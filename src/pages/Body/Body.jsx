import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { AboutView } from "../About/About";
import { Gallery } from '../Gallery/Gallery';
import { Artists } from '../Artists/Artists';
import { LoginArtist } from '../Workers/Workers';
import { Appointment } from '../Appointments/Appointments';
import { NewAppoint } from '../NewAppointment/NewAppointment';
import { MyAppointments } from '../MyAppointments/MyAppointments';
import { SuperAdmin } from '../SuperAdmin/SuperAdmin';


export const Body = () => {
     return (
         <>
            <Routes>
                <Route path={'*'} element={<Navigate to="/" />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/about" element={<AboutView />}/>
                <Route path="/gallery" element={<Gallery />}/>
                <Route path="/artists" element={<Artists />}/>
                <Route path="/workers" element={<LoginArtist />}/>
                <Route path="/newappointments" element={<NewAppoint />}/>
                <Route path="/appointments" element={<Appointment />}/>
                <Route path="/myappointments" element={<MyAppointments />}/>
                <Route path="/superadmin" element={<SuperAdmin />}/>
            </Routes>
         </>
     )
}