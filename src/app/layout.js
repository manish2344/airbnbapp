// src/app/layout.js
export const metadata = {
  title: 'My App Title',
  description: 'My App Description',
};
import Footer from '@/components/Footer';
import './globals.css'; 
import Header from '../components/Header';
export default function Layout({ children }) {
  return (
      <html lang="en">
          <body>
          <Header />
              <main>{children}</main>
             <Footer/>
          </body>
      </html>
  );
}
