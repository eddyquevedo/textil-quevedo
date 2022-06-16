import React from 'react';
import './ItemDetail.css';
const ItemDetail = ({data}) => {
  return (
    <div className='container'>
    <div className='detail'>
        <img className = 'detail_image' src={data.image} alt='' />
        <div className='content'>
            <h1>{data.title}</h1>
            <h2>Categoria: {data.categoria}</h2>
            <h4>Velocidad: {data.velocidad}</h4>
            <h3>Precio: {data.precio}</h3>
        </div>
    </div>
    </div>
  );
}

export default ItemDetail;