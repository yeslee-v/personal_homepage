import "../styles/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | yeslee world",
    default: "Home",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
