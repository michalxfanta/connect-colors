import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
  title: 'Connect Colors',
  description: 'State colors for Prusa Connect aplication',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
