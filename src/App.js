import React, { useState } from 'react';
import './App.css';  
import SearchPage from './SearchPage';
import ConsignmentPage from './ConsignmentPage';

const App = () => {
    const [page, setPage] = useState('search');

    return (
        <div>
            <nav>
                <button onClick={() => setPage('search')}>Trang Tìm Kiếm Cá Koi</button>
                <button onClick={() => setPage('consignment')}>Trang Ký Gửi Cá Koi</button>
            </nav>
            <div className="container">
                {page === 'search' && <SearchPage />}
                {page === 'consignment' && <ConsignmentPage />}
            </div>
            <div className="botset-container">
                <img src="https://onkoi.vn/wp-content/themes/themenamewoo/images/bg_botsec1.png" alt="Botset" />
            </div>
           
        </div>
    );
};

export default App;
