import { Container } from "../../components/ui/styled";
import ProductList from "../../components/common/ProductList/ProductList";
import React from "react";
import ProductGrid from "../../components/common/ProductGrid/ProductGrid";
import ProfileCard from "../../components/common/ProfileCard/ProfileCard";
import {Description} from "./styled";

function ProfilePage({products}) {
  return (
    <Container>
      <div className="row">
        <ProfileCard />
        <Description>
          <h6>About me</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             - Cum, enim. Suscipit, numquam error. <br /><br />
             - Quia quae reprehenderit quisquam blanditiis neque? Amet sapiente inventore perspiciatis sint labore vero corporis itaque. Praesentium, incidunt?
        Ullam quam repellendus, nisi velit assumenda non deleniti. <br />
        - Porro odio, neque impedit, maxime a quas ipsa esse odit, vitae recusandae doloribus error tenetur nostrum ipsum quasi architecto dignissimos est id!
        Dicta, animi quia, eveniet quasi neque, minus nulla laboriosam doloribus placeat ipsum quibusdam odio id aliquid consequuntur! Hic, maxime vel fugiat libero iusto aliquam modi sit, ipsa rerum quia minima!</p>
        </Description>
      </div>
      <ProductList
        title="My arts"
        cards={products}
        slider={{overflow: true}}
      />
      <ProductGrid
        title="Appraised arts"
        cards={products}
      />
    </Container>
  );
}

ProfilePage.getInitialProps = async () => {
  const [products = []] = await Promise.all([
    (async () => {
      const baseUrl = process.env.BASIC_HOST || "http://localhost:3000/";
      const data = await fetch(
        `${baseUrl}tmp/products.json`
      );
      return data.json();
    })(),
  ]);
  return {
    products,
  };
};

export default ProfilePage;
