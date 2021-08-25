import { Container } from "../../components/ui/styled";
import ProductList from "../../components/common/ProductList/ProductList";
import React from "react";
import ProductGrid from "../../components/common/ProductGrid/ProductGrid";

function ProfilePage({products}) {
  return (
    <Container>
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

ProfilePage.getInitialProps = async ({ query }) => {
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
