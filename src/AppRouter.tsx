import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
);

export default AppRouter;
