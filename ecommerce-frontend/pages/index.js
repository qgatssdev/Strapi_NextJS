import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fromImageToUrl } from '../utils/urls';

export default function Home() {
  useEffect(() => {
    axios
      .get('products.json')
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //

  const [product, setProduct] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {product.map((product) => (
        <div key={product.attributes.name}>
          <div className={styles.product__Row}>
            <div className={styles.product__ColImg}>
              <img src={fromImageToUrl(product.attributes.image)} />
            </div>
            <div className={styles.product__Col}>
              {product.attributes.name} - {product.attributes.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
