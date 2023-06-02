import React, { useState } from 'react';
import { Container, Paper, Grid, TextInput, Button } from '@mantine/core';

const EmailSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform email subscription logic here
    console.log(`Subscribing email: ${email}`);
    setEmail('');
  };

  return (
    <section>
      <Container size="xl" p="lg">
        <Grid gutter="lg">
          <Grid.Col span={12} md={6}>
            <Paper p="lg" shadow="xs">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Subscribe to Our Newsletter</h2>
              <p>Stay updated with the latest tea offerings, promotions, and news from the Jasmine Dragon.</p>
              <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
                <Grid gutter="sm">
                  <Grid.Col span={12} md={8}>
                    <TextInput
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      style={{ width: '100%' }}
                    />
                  </Grid.Col>
                  <Grid.Col span={12} md={4}>
                    <Button type="submit" variant="outline" size="lg" fullWidth>
                      Subscribe
                    </Button>
                  </Grid.Col>
                </Grid>
              </form>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default EmailSection;
