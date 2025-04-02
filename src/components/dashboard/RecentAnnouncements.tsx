
import React from 'react';
import { Bell, Eye, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: 'New School Year Welcome',
    content: 'Welcome back for another exciting school year! We have many events planned...',
    date: '2023-09-01',
    category: 'General',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Sports Day Registration Now Open',
    content: 'Registration for the annual Sports Day is now open. Please register by...',
    date: '2023-09-10',
    category: 'Events',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting Schedule',
    content: 'Please check the updated schedule for the upcoming parent-teacher meetings...',
    date: '2023-09-15',
    category: 'Meeting',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Library System Upgrade',
    content: 'The library management system will be upgraded this weekend. Access may be limited...',
    date: '2023-09-23',
    category: 'Facilities',
    priority: 'low',
  },
];

export const RecentAnnouncements = () => {
  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div 
          key={announcement.id} 
          className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-full 
                ${announcement.priority === 'high' ? 'bg-destructive/20 text-destructive' : 
                  announcement.priority === 'medium' ? 'bg-orange-500/20 text-orange-500' : 
                  'bg-green-500/20 text-green-500'}`}
              >
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">{announcement.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{announcement.content}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <Badge variant="outline">{announcement.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(announcement.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-1" />
              <span>Read more</span>
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button variant="outline">View All Announcements</Button>
      </div>
    </div>
  );
};
