import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Item = ({info}) => {
  return (
    <div className="card" style={{width: '30rem', padding:'20px'}}>
  <img src={info.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{info.title}</h3>
    <h5 className="card-text"> {info.Text} Disponible</h5>
    <h2 className="btn btn-primary"> COMPRAR </h2>
  </div>
</div>
  );
}

export default Item;