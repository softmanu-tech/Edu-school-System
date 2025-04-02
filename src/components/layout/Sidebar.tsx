
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  Settings, 
  Bell,
  GraduationCap,
  BookOpenCheck,
  
  Wallet
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  to: string;
  isOpen: boolean;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, to, isOpen, active = false }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors",
        active && "bg-sidebar-accent"
      )}
    >
      <Icon className="h-5 w-5 min-w-5" />
      {isOpen && <span className="ml-3 whitespace-nowrap">{text}</span>}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div 
      className={cn(
        "bg-sidebar fixed left-0 top-0 h-full z-20 transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-center h-16 border-b border-sidebar-border">
        {isOpen ? (
          <h1 className="text-xl font-bold text-white school-logo">EduVista</h1>
        ) : (
          <h1 className="text-xl font-bold text-white school-logo">EV</h1>
        )}
      </div>

      <div className="py-4 flex flex-col h-[calc(100%-4rem)] overflow-y-auto">
        <div className="px-4 mb-6">
          {isOpen && <h2 className="text-xs uppercase tracking-wider text-sidebar-foreground/70 mb-2">Main Menu</h2>}
          <nav className="space-y-1">
            <SidebarItem icon={LayoutDashboard} text="Dashboard" to="/" isOpen={isOpen} active={true} />
            <SidebarItem icon={Users} text="Students" to="/students" isOpen={isOpen} />
            <SidebarItem icon={GraduationCap} text="Teachers" to="/teachers" isOpen={isOpen} />
            <SidebarItem icon={BookOpen} text="Classes" to="/classes" isOpen={isOpen} />
            <SidebarItem icon={BookOpenCheck} text="Grades" to="/grades" isOpen={isOpen} />
            <SidebarItem icon={Calendar} text="Calendar" to="/calendar" isOpen={isOpen} />
            <SidebarItem icon={Bell} text="Announcements" to="/announcements" isOpen={isOpen} />
          </nav>
        </div>

        {isOpen && (
          <div className="px-4 mb-6">
            <h2 className="text-xs uppercase tracking-wider text-sidebar-foreground/70 mb-2">Administration</h2>
            <nav className="space-y-1">
              <SidebarItem icon={GraduationCap} text="Programs" to="/programs" isOpen={isOpen} />
              <SidebarItem icon={Wallet} text="Finances" to="/finances" isOpen={isOpen} />
              <SidebarItem icon={FileText} text="Reports" to="/reports" isOpen={isOpen} />
              <SidebarItem icon={Settings} text="Settings" to="/settings" isOpen={isOpen} />
            </nav>
          </div>
        )}

        {!isOpen && (
          <div className="px-4 mb-6 mt-6">
            <nav className="space-y-1">
              <SidebarItem icon={GraduationCap} text="Programs" to="/programs" isOpen={isOpen} />
              <SidebarItem icon={Wallet} text="Finances" to="/finances" isOpen={isOpen} />
              <SidebarItem icon={FileText} text="Reports" to="/reports" isOpen={isOpen} />
              <SidebarItem icon={Settings} text="Settings" to="/settings" isOpen={isOpen} />
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
