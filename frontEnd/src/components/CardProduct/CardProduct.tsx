import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TCardProduct } from './CardProducts.types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import Context from '@/Context/Context';
import styles from '../../styles/CardProduct.module.css';
import useProducts from '../../hooks/useProducts';


export default function CardProduct({ id, name, url_image, value} : TCardProduct) {
    const router = useRouter();
const { total, cart, setTotal, item, setItem } = useContext(Context);
const [favorite, setFavorite] = useState(false);
const [unity, setUnity] = useState(0);
const {newItem, quantityInCart } = useProducts();

const redirectToDetails = (id: string) => {
    router.push(`/details/${id}`);
  };

const favoriteProduct = () => {
    if (!favorite) {
        setFavorite(true);
    } else {
        setFavorite(false);
    };
};

useEffect(() => {
    if (item.id) {
        newItem(item);
    }
}, [item]);

useEffect(() => {
    if (cart) {
        const totalValue = cart
            .reduce((acc, crr) => (acc + crr.subTotal), 0);
        setTotal(totalValue);
    };
}, [cart, total, setTotal]);

const addInCart = () => {
    setUnity(unity + 1);
    setItem({
        id: id,
        name: name,
        url_image: url_image,
        value: value,
        quantity: unity + 1,
        subTotal: value * (unity + 1)
    });
};

const removeOfCart = () =>{
    if(unity > 0){
        setUnity(unity - 1);
    setItem({
        id: id,
        name: name,
        url_image: url_image,
        value: value,
        quantity: unity -1,
        subTotal: value * (unity -1)
    });
    } else {
        return;
    }
}

return (
    <>
    <div className={styles.CardProduct}>
        <div className={styles.heartIcon}>
            {favorite ?
                <i
                    className={"FillHeart"}
                    onClick={() => favoriteProduct()}>
                    {< AiFillHeart />}
                </i>
                :
                <i
                    className={"OutlineHeart"}
                    onClick={() => favoriteProduct()}>
                    {<AiOutlineHeart />}
                </i>
            }
        </div>
        <div onClick={() => redirectToDetails(id)}>
        <div className={styles.descriptionImg}>
            <img style={{height:'12rem', width:'10rem'}} src={url_image} alt={name} />
        </div>
        <div className={styles.descriptionTxt}>
            <p className={styles.name}>{name}</p>
        </div>
        </div>
        <div className={styles.productShop}>
            <HiCurrencyDollar className='cardIcon' />
            <p>{value}</p>
            < BsFillCartPlusFill className='addProduct' onClick={() => addInCart()} />
            <p>{quantityInCart(id)}</p>
            <BsFillCartDashFill className='removeProduct' onClick={() => removeOfCart()}/>
        </div>
        </div>
    </>
);
};