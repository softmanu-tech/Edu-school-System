
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, GraduationCap, CalendarDays, BookOpen, Bell, TrendingUp, School } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell 
} from 'recharts';
import { RecentAnnouncements } from '@/components/dashboard/RecentAnnouncements';
import { UpcomingEvents } from '@/components/dashboard/UpcomingEvents';
import { Button } from '@/components/ui/button';

const statsData = [
  { title: 'Total Students', value: '1,245', icon: Users, change: '+4.6%' },
  { title: 'Total Teachers', value: '86', icon: GraduationCap, change: '+1.2%' },
  { title: 'Active Classes', value: '42', icon: BookOpen, change: '+2.3%' },
  { title: 'Events This Week', value: '12', icon: CalendarDays, change: '+5.1%' },
];

const attendanceData = [
  { name: 'Mon', attendance: 92 },
  { name: 'Tue', attendance: 94 },
  { name: 'Wed', attendance: 89 },
  { name: 'Thu', attendance: 95 },
  { name: 'Fri', attendance: 91 },
];

const gradeDistributionData = [
  { name: 'A', value: 22 },
  { name: 'B', value: 35 },
  { name: 'C', value: 28 },
  { name: 'D', value: 10 },
  { name: 'F', value: 5 },
];

const GRADE_COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#4C3575', '#1A1F2C'];

const Index = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your school management system.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Download Report</Button>
            <Button>
              <Bell className="mr-2 h-4 w-4" />
              New Announcement
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Weekly Attendance</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={attendanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[85, 100]} />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Attendance']}
                          contentStyle={{ background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ddd' }}
                        />
                        <Bar 
                          dataKey="attendance" 
                          fill="#9b87f5" 
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={gradeDistributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#9b87f5"
                          paddingAngle={2}
                          dataKey="value"
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {gradeDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={GRADE_COLORS[index % GRADE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} students`, 'Count']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Recent Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <RecentAnnouncements />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <UpcomingEvents />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Advanced analytics content would go here in a real application.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed reports would go here in a real application.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Index;
