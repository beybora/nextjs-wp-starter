import Footer from '@/components/sections/Footer/Footer';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-300">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}