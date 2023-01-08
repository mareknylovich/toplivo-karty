// import App from '../../App'
import { useState } from 'react'

import ReactModal from 'react-modal';
import ProductCard from '../ProductCard'
import product2kImage from '../../assets/images/2k.png'
import product5kImage from '../../assets/images/5k.png'
import product10kImage from '../../assets/images/10k.png'
import product15kImage from '../../assets/images/15k.png'
import product20kImage from '../../assets/images/20k.png'
import product50kImage from '../../assets/images/50k.png'
import product100kImage from '../../assets/images/100k.png'

const products = [
{
    image: product2kImage,
    price: '1 000',
    balance: '2 000',
    notAvailable: true
},{
    image: product5kImage,
    price: '2 500',
    balance: '5 000'
},{
    image: product10kImage,
    price: '5 000',
    balance: '10 000'
},{
    image: product15kImage,
    price: '7 500',
    balance: '15 000'
},{
    image: product20kImage,
    price: '9 900' ,
    balance: '20 000'
},{
    image: product50kImage,
    price: '24 900',
    balance: '50 000'
},{
    image: product100kImage,
    price: '49 900',
    balance: '100 000'
}]

ReactModal.setAppElement(document.getElementById('root'));

function ProductsSection() {

    const [currentProduct, setCurrentProduct] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function setProduct(product) {
        if (!product) return
        setCurrentProduct(product)
        openModal()
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setCurrentProduct(null)
        setIsOpen(false);
    }

    return (
        <section className="Products section" id="products">
            <div className="Products__inner container">
                <h1 className="Products__title title">
                    Выберите номинал топливной карты:
                </h1>
                <div className="Products__content">
                    {products.map(product => {
                        return (
                            <div
                                className="Products__item"
                                key={product?.price}
                            >
                                <ProductCard
                                    product={product}
                                    image={product.image}
                                    price={product.price}
                                    balance={product.balance}
                                    notAvailable={product.notAvailable}
                                    setProduct={setProduct}
                                />
                            </div>
                        )
                    })}

                </div>

                {currentProduct && <ReactModal
                    ariaHideApp={true}
                    closeTimeoutMS={200}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Products Modal"
                >
                    <div className="ProductsModalContent">
                        <button
                            className="ProductsModalContent__close"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <h2 className="ProductsModalContent__title">
                            Выбранная вами карта:
                        </h2>
                        <div className="ProductsModalContent__image">
                            <img src={currentProduct.image} alt="" />
                        </div>
                        <div className="ProductsModalContent__price">
                            Цена: {currentProduct.price} ₽
                        </div>
                        <div className="ProductsModalContent__balance">
                            Баланс карты: {currentProduct.balance} ₽
                        </div>
                        <form className="ProductsModalContent__form">
                            <div className="ProductsModalContent__form-item">
                                <input className="form-input" type="text" placeholder="Ваше имя"/>
                            </div>
                            <div className="ProductsModalContent__form-item">
                                <input className="form-input" type="text" placeholder="Номер телефона"/>
                            </div>
                            <button
                                type="submit"
                                className="ProductsModalContent__action button"
                            >
                                Купить
                            </button>
                        </form>
                        <div className="ProductsModalContent__description">
                            После оплаты наш оператор свяжется с Вами и расскажет как получить топливную карту
                        </div>
                    </div>
                </ReactModal>}
            </div>
        </section>
    );
}

export default ProductsSection;
