import React from 'react';
import Sidebar from './Sidebar';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="main">
                <h2>Conteúdo Principal</h2>
                <p>Coloque seu conteúdo aqui. Você pode adicionar mais elementos HTML conforme necessário.</p>
            </div>
        </div>
    );
};

export default App;