"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { Provider } from 'react-redux'
import store from "../../services/store";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Sea Treacker</title>
      <body className={inter.className}>
        <Provider store={store}>
            <Navbar />
            {children}
        </Provider>
      </body>
    </html>
  );
}
