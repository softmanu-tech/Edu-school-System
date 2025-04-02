
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Toaster } from '@/components/ui/toaster';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="container mx-auto px-4 py-8 transition-all duration-300 page-transition">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
