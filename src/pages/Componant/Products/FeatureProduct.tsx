import React, { useContext } from 'react'
import Product from './Product'
import styles from '../../../styles/Products/product.module.css'
import { GetStaticProps } from 'next';


function FeatureProduct(data :any) {
  console.log("mydata ",data)
  
return (
<>
  <div className={styles.headingProduct}>
      {/* <h2>{title? title: 'Trending Product'}</h2> */}
  </div>
  <div className={styles.featureProduct}>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </div>
</>
)
}



interface Props {
  data: any;
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  // const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  
  
  return {
    props: {
      data:'ssss'
    }
  };
};
export default FeatureProduct;