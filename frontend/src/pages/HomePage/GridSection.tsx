import React from 'react';
import { Container, Grid } from '@mantine/core';
import ProductCard from '../../components/ProductCard';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface GridSectionProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

const GridSection: React.FC<GridSectionProps> = ({ products, onAddToCart }) => {
  return (
    <section>
      <Container size="xl" p="lg">
        <Grid gutter="lg">
          {products.map((product) => (
            <Grid.Col key={product.id} span={12} md={6} lg={4}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default GridSection;
