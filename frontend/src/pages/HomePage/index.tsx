import React from 'react';
import EmailSection from './Banner';
import { HeaderResponsive } from './Header';
import { FooterLinks } from './Footer';
import AboutSection from './AboutSection';
import GridSection from './GridSection';

interface FeaturedProduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const HomePage: React.FC = () => {
  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      name: 'Green Tea',
      description: 'Delicious and refreshing green tea.',
      imageUrl: 'path/to/green-tea-image.jpg',
    },
    {
      id: 2,
      name: 'Black Tea',
      description: 'Rich and bold black tea.',
      imageUrl: 'path/to/black-tea-image.jpg',
    },
    // Add more featured products as needed
  ];

  return (
    <div>
      <header>
        <HeaderResponsive links={[{label: "page", link: ""}, {label: "page", link: ""}, {label: "page", link: ""}]} />
      </header>
      
      <main>
        <section>
          
        </section>
        
        <section>
          <h2>Featured Products</h2>
         <GridSection products={[]} onAddToCart={function (productId: string): void {
                      throw new Error('Function not implemented.');
                  } } />
        </section>
        
        <section>
          {/* Tea Categories */}
          {/* Insert your tea categories section here */}
        </section>
        
        <section>
          {/* Customer Testimonials */}
          {/* Insert your customer testimonials section here */}
        </section>
        
        <section>
         <AboutSection />
        </section>
        
        <section>
            <EmailSection />
        </section>
      </main>
      
      <footer>
        <FooterLinks data={[{links: [{label: 'a', link: "a"}], title: "a"}]}  />
      </footer>
    </div>
  );
};

export default HomePage;
