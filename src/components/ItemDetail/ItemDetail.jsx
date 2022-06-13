import React from 'react';
import './ItemDetail.css';
const ItemDetail = ({data}) => {
  return (
    <div className='container'>
    <div className='detail'>
        <img className = 'detail_image' src={data.image} alt='' />
        <div className='content'>
            <h1>{data.title}</h1>
            <h2>{data.categoria}</h2>
            <h3>{data.precio}</h3>
        </div>
    </div>
    </div>
  );
}

export default ItemDetail;