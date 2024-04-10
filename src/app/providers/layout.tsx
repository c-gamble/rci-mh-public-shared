import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Providers',
  description: 'RCI Mental Health Providers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
