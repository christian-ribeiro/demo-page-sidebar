import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import SwaggerDoc from './SwaggerDoc';

const App: React.FC = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="main">
                <SwaggerDoc url="http://localhost:5168/swagger/v1/swagger.json" />
            </div>
        </div>
    );
};

export default App;