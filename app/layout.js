import NavBar from "./_Navbar/NavBar";
import Footer from "./_footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Online shop by Archil",
  description: "online shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-full w-full">
        <header>
          <NavBar />
        </header>
        <main className="w-full h-full">{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
