import React, { useState } from 'react';
import './App.css';  
import SearchPage from './SearchPage';
import ConsignmentPage from './ConsignmentPage';
import FeedbackPage from './FeedbackPage';  
import CustomerProfilePage from './CustomerProfilePage'; 
import BuyFishPage from './BuyFishPage';
import ShoppingFish from './ShoppingFish';

const App = () => {
    const [page, setPage] = useState('search');

    return (
        <div>
            <nav>
                <button onClick={() => setPage('search')}>Trang Tìm Kiếm Cá Koi</button>
                <button onClick={() => setPage('buyFish')}>Trang Mua Cá</button> 
                <button onClick={() => setPage('consignment')}>Trang Ký Gửi Cá Koi</button>
                <button onClick={() => setPage('feedback')}>Trang Đánh Giá và Phản Hồi</button>
                <button onClick={() => setPage('profile')}>Trang Hồ Sơ Khách Hàng</button> 
            </nav>
            <div className="container">
                {page === 'search' && <SearchPage />}
                {page === 'consignment' && <ConsignmentPage />}
                {page === 'feedback' && <FeedbackPage />}
                {page === 'profile' && <CustomerProfilePage />} 
                {page === 'buyFish' && <BuyFishPage />} 
                {page === 'shoppingFish' && <ShoppingFish />} 
            </div>
            <div className="botset-container">
                <img src="https://onkoi.vn/wp-content/themes/themenamewoo/images/bg_botsec1.png" alt="Botset" />
            </div>
           <footer className="footer">
                <div className="footer-content">
                    <p>© 2024 Trang Trại Cá Koi. Tất cả quyền được bảo lưu.</p>
                    <p>
                        Liên hệ: <a href="mailto:2251120085@ut.edu.vn">GMAIL</a>
                    </p>
                    <p><a href="https://cakoi01.vercel.app/">Truy cập trang web</a></p>
                </div>
            </footer>
        </div>
    );
};

export default App;
