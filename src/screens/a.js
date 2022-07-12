import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./styles.css"
import { db } from '../../../Firebase/config';
import { collection, getDocs } from "firebase/firestore";
const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { id } = useParams(); //Siempre trae un string
    const navigate = useNavigate();

    console.log('el id es', id);


    /* const onAdd = (count) => {
        console.log(`Se agregaron ${count} productos al carrito`);
    } */

    useEffect(() => {
        //IIFE
        (async () => {
            try {
                // const response = await fetch('https://rickandmortyapi.com/api/character');
                // console.log(response);
                // const data = await response.json();
                // console.log(data);
                // const personajes = data.results;
                const querySnapshot = await getDocs(collection(db, "productos"));
                const personajes = []
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    personajes.push({ id: doc.id, ...doc.data() })
                    console.log('el personaje', personajes)
                });
                if (!id) {
                    setProducts(personajes);
                } else {
                    //Filtrar según el id
                    const personajesFiltrados = personajes.filter(personaje => personaje.species === id)
                    console.log('el personaje filtardo es', personajesFiltrados);
                    setProducts(personajesFiltrados);
                }
            } catch (error) {
                console.log(error);
            }
        })()

    }, [id]) //Colocamos el id como dependencia, para que cada vez que haya un nuevo id, se ejecute nuevamente.

    console.log(products);

    return (
        <div>
            <h2>{greeting}</h2>
            {/* NOTA: Llamar a ItemList para que haga el map */}
            {products.length !== 0 ?
                <div className='container-card'>
                    {products.map(product => {
                        return <>
                            <div key={product.name}
                                style={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => navigate(`/item/${product.id}`)} className='card' >
                                <div >
                                    {product.name}
                                </div> <div><img className="imagen-round " src={product.image} /></div>
                                <div className="specie" >{product.species} </div>
                            </div></>

                    })}
                </div>
                :
                <div className='loader'>
                    <div class="loadingio-spinner-rolling-uocte8vmc7i"><div class="ldio-3dhnbawiqub">
                        <div></div>
                    </div></div>

                </div>
            }
        </div>
    )
}

export default ItemListContainer