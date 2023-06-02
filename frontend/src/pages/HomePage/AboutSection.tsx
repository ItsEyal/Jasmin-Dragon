import React from 'react';
import { Container, Paper, Grid, Text, Image } from '@mantine/core';
import aboutImage from '/about-image.jpg';

const AboutSection: React.FC = () => {
  return (
    <section>
      <Container size="xl" p="lg">
        <Grid gutter="lg">
          <Grid.Col span={12} md={6}>
            <Image src={aboutImage} alt="About Image" fit="contain" width="100%" height={300} style={{ marginBottom: '1rem' }} />
          </Grid.Col>
          <Grid.Col span={12} md={6}>
            <Paper p="lg" shadow="xs">
              <Text size="xl" weight={500} style={{ marginBottom: '1rem' }}>
                About Jasmine Dragon
              </Text>
              <Text>
                The Jasmine Dragon is a renowned tea shop known for its exceptional tea selections and serene ambiance.
                Our passion for tea drives us to bring you the finest varieties from around the world. With a focus on
                quality and craftsmanship, we curate a collection that appeals to tea enthusiasts and newcomers alike.
              </Text>
              <Text>
                Step into our world of tea and embark on a journey of taste and tranquility. Explore our diverse range of
                teas, from delicate white teas to bold black teas, and discover new flavors that will captivate your senses.
                Join us at the Jasmine Dragon and experience tea like never before.
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutSection;
