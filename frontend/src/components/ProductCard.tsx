import React from 'react';
import { Card, Image, Text, Badge, Button } from '@mantine/core';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { id, name, image, description, price } = product;

  const handleAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <Card shadow="sm" padding="md" radius="md">
      <Image src={image} alt={name} height={180} fit="cover" />
      <div style={{ marginTop: '1rem' }}>
        <Text size="lg" weight={500}>
          {name}
        </Text>
        <Text>{description}</Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <Text size="lg" weight={700}>
            ${price.toFixed(2)}
          </Text>
          <Button onClick={handleAddToCart} variant="outline" size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
