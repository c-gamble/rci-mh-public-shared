import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Resources',
  description: 'RCI Mental Health Resources',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
