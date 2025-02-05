import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Components/Homepage';
import ActiveJobs from './Components/ActiveJobs';
import DeactiveJobs from './Components/DeactiveJobs';

const App = () => {
    const [data, setData] = useState([]) || null;

    return (
        <>
            <div className="bg-gray-950 min-h-screen text-white">
                <nav className="flex justify-between p-4 bg-gray-800">
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/active" className="hover:text-gray-400">Active Jobs</Link>
                        </li>
                        <li>
                            <Link to="/deactivate" className="hover:text-gray-400">Deactivated Jobs</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Homepage data={data} setData={setData} />} />
                    <Route path="/active" element={<ActiveJobs data={data} />} />
                    <Route path="/deactivate" element={<DeactiveJobs data={data} setData={setData} />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
