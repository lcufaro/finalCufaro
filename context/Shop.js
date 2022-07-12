import React, { createContext, useEffect, useState } from 'react';
import { db, auth } from '../app/firebase';
import { getDocs, query, collection, addDoc } from 'firebase/firestore';

export const Shop = createContext();

const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    const isInCart = (product) => {
        return cart.filter(productInCart => productInCart === product).length !== 0 ? true : false;
    }

    const addToCart = (product) => {
        console.log("AddToCart ID: ", product.id);
        if (isInCart(product)) return
        else setCart([...cart, product]);
        console.log("AddToCart: ", cart.length);
    }

    const generateOrder = async (buyer) => {
        const total = cart.reduce((acumulador, elem) => acumulador + elem.price, 0);

        const user = auth.currentUser;
        const order = {
            items: [...cart],
            buyer: user.email,
            total: total,
            date: new Date().toLocaleString()
        }

        console.log(order);
        try {
            const docRef = await addDoc(collection(db, "order"), order);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e.message);
        }
    }

    const removeToCart = (ItemId) => {
        const cartFilter = cart.filter(item => item.id !== ItemId);
        setCart(cartFilter);
    }

    const totalOrder = () => {
        return cart ? cart.reduce((acc, item) => acc += item.price, 0) : 0;
    }

    /*
        useEffect(() => {
            (async () => {
                const queryCollection = query(collection(db, 'products'));
                const querySnapshot = await getDocs(queryCollection);
                const productos = [];
                querySnapshot.forEach((doc) => {
                    const producto = { id: doc.id, ...doc.data() };
                    productos.push(producto);
                })
                setProducts([...productos]);
            })()
        }, [])
    */

    useEffect(() => {
        (async () => {
            const queryCollection = query(collection(db, 'order'));
            const querySnapshot = await getDocs(queryCollection);
            const ordenes = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                const orden = { id: doc.id, ...doc.data() };
                ordenes.push(orden);
            })
            console.log('Ordenes:', ordenes.length);
            setOrders([...ordenes]);
            console.log('Ordenes:', orders.length);
        })()
    }, [])

    const totalOrders = () => {
        return orders ? orders.reduce((acc, item) => acc += item.total, 0) : 0;
    }

    return (
        <Shop.Provider value={{ cart, products, addToCart, removeToCart, generateOrder, totalOrder, orders, totalOrders }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;