import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/SignIn';

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
);

export default AppRouter;
