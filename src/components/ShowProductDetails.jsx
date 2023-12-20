import React from 'react'
import './ShowProductDetails.css'
const ShowProductDetails = ({data}) => {
  
  return (
    <div>
        <div className='dvContainerDetails'>
          <div className='dvimageDetails'><img src={data.indexImageUrl} alt="" /></div>
          <div className='dvProductNameDetails'>
            <p>{data.productName}</p>
            <span>توضیحات:</span>
            <p>{data.decription}</p>
            <span className='spnPriceWithDiscount'>{data.priceWithDiscount}</span>
            <span>تومان</span>  
            <span className='spnPrice'>{data.price}</span>
            <span>تومان</span>        
         </div>
      </div>
    </div>
  )
}

export default ShowProductDetails
