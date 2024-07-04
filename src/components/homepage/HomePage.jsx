import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import './HomePage.css';

const ProductCards = () => {
    const { likedProducts, addToLiked, removeFromLiked } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const productsPerPage = 4;

    useEffect(() => {
        const fetchProducts = async (page) => {
            try {
                const response = await axios.get('https://dummyjson.com/products', {
                    params: { limit: productsPerPage, skip: (page - 1) * productsPerPage },
                });
                setProducts(response.data.products);
                setTotalPages(Math.ceil(response.data.total / productsPerPage));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const isProductLiked = (productId) => {
        return likedProducts.some(item => item.id === productId);
    };

    const handleLikeClick = (product) => {
        if (isProductLiked(product.id)) {
            removeFromLiked(product.id);
        } else {
            addToLiked(product);
        }
    };

    return (
        <div>
            <div className="product-cards">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img className="product-image" src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                        <button className="likeBtn" onClick={() => handleLikeClick(product)}>
                            <div className="like">
                                {isProductLiked(product.id) ? (
                                    <AiFillHeart size={24} color="purple" />
                                ) : (
                                    <AiOutlineHeart size={24} />
                                )}
                            </div>
                        </button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button className="pagination-button" onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <IoIosArrowBack size={21} />
                    Назад
                </button>
                <span>
                    {currentPage} of {totalPages}
                </span>
                <button className="pagination-button" onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Вперёд
                    <IoIosArrowForward size={21} />
                </button>
            </div>
        </div>
    );
};

export default ProductCards;
