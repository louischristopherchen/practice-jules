export const metadata = {
  title: 'Louis Chen - Fullstack Developer',
  description: 'Portfolio of Louis Chen, a Fullstack Developer specializing in modern web technologies.',
};

import './globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
