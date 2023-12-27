import React from 'react'
import styles from './ShowProductDetails.module.css'
const ShowProductDetails = ({data}) => {
  
  return (
    <div>
        <div className={`${styles.dvContainerDetails}`}>
          <div className={`${styles.dvimageDetails}`}><img src={data.indexImageUrl} alt="" /></div>
          <div className={`${styles.dvProductNameDetails}`}>
            <p className={`${styles.Name}`}>{data.productName}</p>
            <span>توضیحات:</span>
            <p className={`${styles.Description}`}>{data.description}</p>
            <span className={`${styles.spnPriceWithDiscount}`}>{data.priceWithDiscount}</span>
            <span>تومان</span>  
            <span className={`${styles.spnPrice}`}>{data.price}</span>
            <span>تومان</span>        
         </div>
      </div>
    </div>
  )
}

export default ShowProductDetails
