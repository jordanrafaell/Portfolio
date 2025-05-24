import type { Metadata } from 'next';
import './styles/global.css';
import Header from '@/components/shared/header';

export const metadata: Metadata = {
  title: 'Dev Jordan',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <div className="h-[80px]"></div>
        {children}
      </body>
    </html>
  );
}
