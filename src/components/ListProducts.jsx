import React from 'react'
import './ListProducts.css'
const ListProducts = ({data,aa}) => {
const clickHandler=()=>{
   aa(data.productID)
  
}
  return (
    <div>
        <a href="#" onClick={clickHandler}>
          <div  className='dvContainer'>
            <div className='dvimage'><img src={data.indexImageUrl} alt="" /></div>
            <div className='dvProductName'><p>{data.productName}</p></div>
          </div>
       </a>
    </div>
  )
}

export default ListProducts