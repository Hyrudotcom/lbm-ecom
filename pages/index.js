import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => (
  <div>
    {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
    <div className="products-heading">
      <h2>Workout Programs</h2>
      <br></br>
      <p>
        The info you will get are products of years of intense work and endless
        refinement. I will watch and examine the videos regularly sent by you, I
        will give the essential tips and will be on your side with frequent
        communication.
      </p>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
