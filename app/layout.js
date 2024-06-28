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
      <body className="">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}
