import CaKoi1 from './assets/CaKoi/koi1.jpg'
import './BuyShopFish.css'

function BuyShopFish() {
    return <main class="container">
        <div class="header">
            <div class="contact-info">
                <span>
                    024.32.666.777 - 024.39.555.888
                </span>
            </div>
            <div class="social-icons">
                <a href="#"><i class="fas fa-book"></i>Điều khoản chính sách</a>
                <a href="#"><i class="fas fa-user"></i>Đăng nhập | Đăng ký</a>
                <a href="#"><i class="fas fa-shopping-cart"></i>Giỏ hàng</a>
                <a href="#"><i class="fab fa-facebook-f"></i> </a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
        <h2>Giỏ hàng</h2>
        <table class="cart-table">
            <thead>
                <tr>
                    <th>
                    </th>
                    <th>
                        Sản phẩm
                    </th>
                    <th>
                        Giá
                    </th>
                    <th>
                        Số lượng
                    </th>
                    <th>
                        Tạm tính
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <i class="fas fa-trash-alt">
                        </i>
                    </td>
                    <td>
                        <img alt="Image of Onkoi Karashi 4 năm tuổi 85 cm" src="{CaKoi1}" />
                        <div>
                            Onkoi Karashi 4 năm tuổi 85 cm
                            <br />
                            Vendor: OnKoi - Quang Minh
                        </div>
                    </td>
                    <td>
                        0 ₫
                    </td>
                    <td>
                        <input min="1" style={{ width: "50px" }} type="number" value="1" />
                    </td>
                    <td>
                        0 ₫
                    </td>
                </tr>
                <tr>
                    <td>
                        <i class="fas fa-trash-alt">
                        </i>
                    </td>
                    <td>
                        <img alt="Image of Onkoi showa 97 cm 5 tuổi" src="https://placehold.co/50x50" />
                        <div>
                            Onkoi showa 97 cm 5 tuổi
                            <br />
                            Vendor: OnKoi - Quang Minh
                        </div>
                    </td>
                    <td>
                        0 ₫
                    </td>
                    <td>
                        <input min="1" style={{width: "50px"}} type="number" value="1" />
                    </td>
                    <td>
                        0 ₫
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="cart-summary">
            <table>
                <tr>
                    <th>
                        Tạm tính
                    </th>
                    <td>
                        0 ₫
                    </td>
                </tr>
                <tr>
                    <th>
                        Tổng
                    </th>
                    <td>
                        0 ₫
                    </td>
                </tr>
            </table>
        </div>
        <a class="checkout-btn" href="#">
            Tiến hành thanh toán
        </a>
    </main>
}
export default BuyShopFish;