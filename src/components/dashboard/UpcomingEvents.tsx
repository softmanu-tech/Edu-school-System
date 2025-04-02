
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  type: 'academic' | 'sports' | 'cultural' | 'meeting';
}

const events: Event[] = [
  {
    id: 1,
    title: 'Science Exhibition',
    date: '2023-09-25',
    time: '10:00 AM',
    location: 'Main Hall',
    attendees: 120,
    type: 'academic',
  },
  {
    id: 2,
    title: 'Basketball Tournament',
    date: '2023-09-27',
    time: '2:00 PM',
    location: 'Sports Complex',
    attendees: 85,
    type: 'sports',
  },
  {
    id: 3,
    title: 'Teachers Meeting',
    date: '2023-09-30',
    time: '9:00 AM',
    location: 'Conference Room',
    attendees: 35,
    type: 'meeting',
  },
  {
    id: 4,
    title: 'Annual Day Rehearsal',
    date: '2023-10-05',
    time: '3:30 PM',
    location: 'Auditorium',
    attendees: 150,
    type: 'cultural',
  },
];

const getEventTypeStyles = (type: Event['type']) => {
  switch (type) {
    case 'academic':
      return 'bg-blue-500/20 text-blue-500 border-blue-500/50';
    case 'sports':
      return 'bg-green-500/20 text-green-500 border-green-500/50';
    case 'cultural':
      return 'bg-purple-500/20 text-purple-500 border-purple-500/50';
    case 'meeting':
      return 'bg-orange-500/20 text-orange-500 border-orange-500/50';
    default:
      return 'bg-gray-500/20 text-gray-500 border-gray-500/50';
  }
};

export const UpcomingEvents = () => {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div 
          key={event.id} 
          className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className={cn(
              "h-12 w-12 rounded-md border flex flex-col items-center justify-center text-center", 
              getEventTypeStyles(event.type)
            )}>
              <span className="text-xs">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
              <span className="text-lg font-bold">{new Date(event.date).getDate()}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold">{event.title}</h3>
              <div className="flex flex-wrap text-xs text-muted-foreground gap-x-3 gap-y-1 mt-1">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {event.attendees} attendees
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 flex justify-center">
        <Button variant="outline">View Calendar</Button>
      </div>
    </div>
  );
};
