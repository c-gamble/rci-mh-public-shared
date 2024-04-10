import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About',
  description: 'About RCI Mental Health',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
