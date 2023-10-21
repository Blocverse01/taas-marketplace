import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-poppins relative  gradient-bg">
        <div className="inset-0 absolute -z-10 h-[100%] w-full  backdrop-blur-lg "></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
