import "../styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    template: "%s | yeslee world",
    default: "Home",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};

export default RootLayout;
