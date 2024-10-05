import React, { useState } from 'react';
import './CustomerProfilePage.css';  

const CustomerProfilePage = () => {
    const [name, setName] = useState('Nhập tên');
    const [email, setEmail] = useState('Nhập địa chỉ email');
    const [phone, setPhone] = useState('Nhập số điện thoại');
    const [address, setAddress] = useState('Nhập địa chỉ');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thông tin đã được cập nhật: ${name}, ${email}, ${phone}, ${address}`);
    };

    return (
        <div className="profile-container">
            <h1>Trang Hồ Sơ Khách Hàng</h1>
            <form className="profile-form" onSubmit={handleSubmit}>
                <label>
                    Tên:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Số điện thoại:
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Địa chỉ:
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Cập nhật thông tin</button>
            </form>
        </div>
    );
};

export default CustomerProfilePage;