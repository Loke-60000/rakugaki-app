import Home from './Home';
import MainApp from './MainApp';
import Accountpage from './Accountpage';
import Rakugakidraw from './rakugakidraw';
import Secondaccountpage from './Secondaccountpage';
import Testphp from './phptest';
import Dashboard from './debug/Dashboard';
import { Routes, Route } from "react-router-dom";
import NavBanner from '../Components/NavBanner';

const App = () => {
    return(
        <>  
            <NavBanner/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MainApp" element={<MainApp />} />
                <Route path="/Accountpage" element={<Accountpage/>} />
                <Route path="/Secondaccountpage" element={<Secondaccountpage />} />
                <Route path="/Rakugakidraw" element={<Rakugakidraw />} />
                <Route path="/Testphp" element={<Testphp />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
        </>
    
    )
};

export default App;