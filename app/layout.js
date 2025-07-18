import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import GeometricBackground from "./Components/Background/GeometricBackground";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio website",
  icons: {
    icon: "/Cklogo.ico",
    shortcut: "/Cklogo.ico",
    apple: "/Cklogo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
