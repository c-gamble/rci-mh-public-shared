import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact RCI Mental Health',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
