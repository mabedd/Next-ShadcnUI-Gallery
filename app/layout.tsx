import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import './globals.css';
import type { Metadata } from 'next';
import { SideMenu } from '@/components/SideNav';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shadcn UI Album',
  description: 'Shadcn Album with Cloudinary',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            Mabedev Photos
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex">
          <SideMenu />
          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
