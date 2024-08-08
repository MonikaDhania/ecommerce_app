import React from 'react';
import NavBar from './NavBar';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="custom-carousel"
      >
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="carousel-image" />
          <div className="carousel-caption">
            <p className="text-lg">Beauty</p>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="carousel-image" />
          <div className="carousel-caption">
            <p className="text-lg">Grocery</p>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 2" className="carousel-image" />
          <div className="carousel-caption">
            <p className="text-lg">Fragrances</p>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="carousel-image" />
          <div className="carousel-caption">
            <p className="text-lg">Furniture</p>
           
          </div>
        </div>
      </Carousel>


      <footer className="bg-gray-800 text-white py-8 mt-[100px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" className="hover:underline">Twitter</a>
              <a href="https://instagram.com" className="hover:underline">Instagram</a>
              <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
