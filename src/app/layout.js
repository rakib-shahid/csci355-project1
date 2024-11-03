import "./globals.css";
import "../styles/styles.css";

export const metadata = {
  title: "CSCI355 Project 1",
  description:
    "Osvaldo Talavera, Rakib Shahid, Sameer Ahmad Muzafar, Luis Rodriguez, Kunsang Tsering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
