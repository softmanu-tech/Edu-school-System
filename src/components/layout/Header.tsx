
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Menu, 
  ChevronLeft,
  Search,
  User
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm h-16 flex items-center px-6 sticky top-0 z-10">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleSidebar} 
        className="mr-4"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {sidebarOpen ? <ChevronLeft /> : <Menu />}
      </Button>

      <div className="flex-1 relative max-w-md hidden md:flex">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input 
          placeholder="Search..." 
          className="pl-10" 
        />
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
