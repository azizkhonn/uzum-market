import { useContext, useState } from 'react';
import { BiMap, BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Stack from './svg/stack.svg';
import Condition from './svg/chillya.png';
import Pool from './svg/pool.png';
import Skidka from './svg/skidka.png';
import siteLogo from './svg/uzumLogo.svg';
import Rus from './svg/rus.svg';
import './Navbar.css';

function Navbar() {
    const { likedProducts, removeFromLiked } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleRemoveFromLiked = (productId) => {
        removeFromLiked(productId);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <>
            <div className='navbarCall'>
                <div className="language-switcherRow">
                    <BiMap /> Город: <a className="ItemsWrapTopBtnLink" target='_blank' href="https://maps.app.goo.gl/3xtmbQncU2uXXfCB6">Ташкент</a>
                    <a href="https://uzum.uz/ru/about/delivery-points" target="_blank" className="ItemsWrapTopBtnLink2"> Пункты выдачи </a>
                </div>
                <div className="language-switcher">
                    <a className="ItemsWrapTopBtnShop" target='_blank' href="https://seller.uzum.uz/"> Продавайте на Uzum </a>
                    <a href='https://uzum.uz/ru/faq' className="ItemsWrapTopBtn"> Вопрос-ответ </a>
                    <a href='https://uzum.uz/ru/user/orders' target="_blank" className="ItemsWrapTopBtn"> Мои заказы </a>
                    <button className="ItemsWrapTopBtnRus" onClick={() => changeLanguage('ru')}> <img width={18} height={18} className='logo' src={Rus} alt='Logo' /> Русский </button>
                </div>
            </div>
            <div className='container navWrapper'>
                <div className='NavContainer'>
                    <div className='logoItems'>
                        <a href="/">
                            <img width={220} height={32} className='logo' src={siteLogo} alt='Logo' />
                        </a>
                        <div className='logoContainer'>
                            <div className='catalogItems'>
                                <button className='catalogBtn'>
                                    <img width={25} height={25} className='logo' src={Stack} alt='Logo' />Каталог
                                </button>
                            </div>
                            <input 
                                className='searchBar' 
                                type="text" 
                                placeholder="Искать товары и категории" 
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className='searchBtn' onClick={handleSearch}><GrSearch size={20} /></button>
                            <div className="navbarBtns">
                                <div className='catalogItems'>
                                    <button className='catalogBtnTop'>
                                        <AiOutlineUser size={24} />Войти
                                    </button>
                                </div>
                                <div className='catalogItems'>
                                    <button className='catalogBtnTop'>
                                        <AiOutlineHeart size={24} />{('Избранное')}
                                    </button>
                                </div>
                                <div className='catalogItems'>
                                    <button className='catalogBtnTop' onClick={openModal}>
                                        <BiShoppingBag size={24} />Корзина ({likedProducts.length})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className='navbar'>
                        <div className='logo'></div>
                        <ul className='navItem'>
                            <div>
                                <Link className='navLinkItem' to="/"> <img width={24} height={24} src={Skidka} alt='Logo' />Распродажа</Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLinkItem' to="/prokhlada-v-dome"><img width={24} height={24} src={Condition} alt='Logo' />Прохлада в доме</Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLinkItem' to="/bassejny-i-aksessuary"><img width={24} height={24} src={Pool} alt='Logo' /> Бассейны</Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLink' to="/elektronika"> Электроника </Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLink' to="/bytovaya-tekhnika"> Бытовая техника </Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLink' to="/odezhda"> Одежда </Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLink' to="/obuv"> Обувь </Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLink' to="/aksessuary"> Аксессуары </Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLink' to="/krasota-i-ukhod"> Красота и уход </Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div>
                                <Link className='navLink' to="/zdorove">Здоровье</Link>
                                <div className='hoverLink'></div>
                            </div>
                            <div className="dropdown">
                                <Link className='navLink' to="/yeysho"> Ещё </Link>
                                <button className="dropBtn"><MdKeyboardArrowDown size={20} /></button>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>Корзина</h2>
                        <div className="liked-products">
                            {likedProducts.length > 0 ? (
                                likedProducts.map(product => (
                                    <div key={product.id} className="product-card">
                                        <img className="product-image" src={product.thumbnail} alt={product.title} />
                                        <h2>{product.title}</h2>
                                        <p>{product.description}</p>
                                        <p>${product.price}</p>
                                        <button className="likeBtn" onClick={() => handleRemoveFromLiked(product.id)}>
                                            <AiFillHeart size={24} color="purple" />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>Ваша корзина пуста</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
