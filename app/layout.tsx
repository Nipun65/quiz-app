'use client';

import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <html lang="en">
      <body>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            position: 'fixed',
            top: 16,
            right: 16,
            padding: '8px 12px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            background: 'var(--primary)',
            color: '#fff',
          }}
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>

        {children}
      </body>
    </html>
  );
}
