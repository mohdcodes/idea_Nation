import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}
