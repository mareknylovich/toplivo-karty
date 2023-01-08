function ProductCard({product, image, price, balance, notAvailable, setProduct}) {
    return (
        <div className="ProductCard">
            <div className="ProductCard__image">
                <img src={image} alt=""/>
            </div>
            <div className="ProductCard__body">
                <div className="ProductCard__price">
                    Цена: <span>{price} ₽</span>
                </div>
                <div className="ProductCard__balance">
                    Баланс карты: {balance} ₽
                </div>

                {
                    !notAvailable
                        ? <button className="ProductCard__more button" onClick={setProduct.bind(null, product)}>Купить</button>
                        : <div className="ProductCard__not-available">Закончились</div>
                }

            </div>
        </div>
    );
}

export default ProductCard;