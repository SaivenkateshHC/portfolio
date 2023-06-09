import './globals.scss'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sai venkatesh H',
  description: 'FrontEnd Web developer - developing websites predominently using React js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="path/to/atropos.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
