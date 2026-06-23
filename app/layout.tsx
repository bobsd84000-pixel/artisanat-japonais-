import { ReactNode } from 'react';

export const metadata = {
  title: '灯 Lumik — Artisanat japonais',
  description: 'Couteaux Seki, céramique Arita, washi direct.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#161410] text-[#EFE9DC]">{children}</body>
    </html>
  );
}
