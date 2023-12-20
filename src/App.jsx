import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListProducts from './components/ListProducts'
import ShowProductDetails from './components/ShowProductDetails'

function App() {
 const products=[
  {"productID":1,"productName":"کافی میکس کلاسیک 3در1 نسکافه - 20 ساشه 20 گرمی","decription":"...","stock":100,"price":125000,"priceWithDiscount":106900,"incredibleOffer":true,"dailySuggest":true,"indexImageUrl":"https://dkstatics-public.digikala.com/digikala-products/4bf79f92259dd523bac89bac6ac191118f4bc99c_1632658465.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","Images":[{"id":10,"original":"https://dkstatics-public.digikala.com/digikala-products/120713897.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""},{"id":11,"original":"https://dkstatics-public.digikala.com/digikala-products/12c25e625398d4217900ae379ed31b6ae6189625_1632658468.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""},]},
  {"productID":2,"productName":"سس گوجه فرنگی بیژن - 550 گرم","decription":"","stock":200,"price":39900,"priceWithDiscount":29500,"incredibleOffer":true,"dailySuggest":true,"indexImageUrl":"https://dkstatics-public.digikala.com/digikala-products/110428654.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","Images":[{"id":20,"original":"https://dkstatics-public.digikala.com/digikala-products/110428703.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""},{"id":21,"original":"https://dkstatics-public.digikala.com/digikala-products/20e379116109cf497f85013b4400a4fbff4f3b55_1633254609.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""},]},
  {"productID":3,"productName":"نودل با طعم مرغ آماده لذیذ - 75 گرم بسته 5 عددی","decription":"نوع ویتامین و مواد معدنی:سدیم","stock":300,"price":75000,"priceWithDiscount":42500,"incredibleOffer":true,"dailySuggest":true,"indexImageUrl":"https://dkstatics-public.digikala.com/digikala-products/99a10c716d092f7320236d02b25a90d09aa96c93_1677074704.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","Images":[{"id":30,"original":"https://dkstatics-public.digikala.com/digikala-products/119617988.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""},{"id":31,"original":"https://dkstatics-public.digikala.com/digikala-products/acc1b5c350249cd287a40db210a5fa517f07b176_1677074700.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""},]},


]
const [product, setProduct] = useState({"productID":1,"productName":"کافی میکس کلاسیک 3در1 نسکافه - 20 ساشه 20 گرمی","decription":"...","stock":100,"price":125000,"priceWithDiscount":106900,"incredibleOffer":true,"dailySuggest":true,"indexImageUrl":"https://dkstatics-public.digikala.com/digikala-products/4bf79f92259dd523bac89bac6ac191118f4bc99c_1632658465.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","Images":[{"id":10,"original":"https://dkstatics-public.digikala.com/digikala-products/120713897.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""},{"id":11,"original":"https://dkstatics-public.digikala.com/digikala-products/12c25e625398d4217900ae379ed31b6ae6189625_1632658468.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90","thumbnail":""}]})
 const showByIDHandler=(id)=>{
    products.filter((item)=>{
        if(item.productID==id){
          setProduct(item)
        }
   }) 
  }
  

  return (
     <div>
      <div className='container'>
        <div className='dvProductList'>
         {
           products.map((item)=>{
             return <ListProducts key={item.productID}  data={item} aa={showByIDHandler}/>
          })
         }
       </div>
       <div className='dvDetailes'>
         <ShowProductDetails data={product}/>
       </div>
      </div>
     </div>
    )
     }

export default App
