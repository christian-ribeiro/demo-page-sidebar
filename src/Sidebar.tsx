import React, { useState } from 'react';
import './Sidebar.css'; // Certifique-se de que o caminho para o CSS esteja correto
import logoCollapsed from './Content/logo.png'; // Importa a imagem
import logoExpanded from './Content/logo_header.png'; // Importa a imagem

const Sidebar: React.FC = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleFix = () => {
        setIsFixed(!isFixed);
    };

    return (
        <div className={`sidebar ${isExpanded || isFixed ? 'expanded' : ''}`}
            onMouseEnter={() => !isFixed && setIsExpanded(true)}
            onMouseLeave={() => !isFixed && setIsExpanded(false)}>
            <img src={!isExpanded && !isFixed ? logoCollapsed : logoExpanded} alt="Logo" className="sidebar-logo" />
            {isExpanded && (
                <button className="toggle-btn" onClick={toggleFix}>
                    <i>{isFixed ? '🔓' : '📌'}</i>
                </button>
            )}
            <a href="#"><i>🏠</i><span>Home</span></a>
            <a href="#"><i>📖</i><span>Sobre</span></a>
            <a href="#"><i>💼</i><span>Serviços</span></a>
            <a href="#"><i>📞</i><span>Contato</span></a>
        </div>
    );
};

export default Sidebar;