
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  MoreHorizontal, 
  Plus, 
  Search, 
  SlidersHorizontal, 
  UserPlus 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Student {
  id: number;
  name: string;
  rollNo: string;
  class: string;
  gender: string;
  admissionDate: string;
  parentName: string;
  contact: string;
  status: 'active' | 'inactive' | 'suspended';
}

const students: Student[] = [
  {
    id: 1,
    name: 'John Smith',
    rollNo: 'S1001',
    class: '10A',
    gender: 'Male',
    admissionDate: '2021-06-15',
    parentName: 'David Smith',
    contact: '(555) 123-4567',
    status: 'active',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    rollNo: 'S1002',
    class: '10A',
    gender: 'Female',
    admissionDate: '2021-06-20',
    parentName: 'Robert Johnson',
    contact: '(555) 234-5678',
    status: 'active',
  },
  {
    id: 3,
    name: 'Michael Brown',
    rollNo: 'S1003',
    class: '9B',
    gender: 'Male',
    admissionDate: '2022-05-10',
    parentName: 'James Brown',
    contact: '(555) 345-6789',
    status: 'active',
  },
  {
    id: 4,
    name: 'Jessica Davis',
    rollNo: 'S1004',
    class: '11C',
    gender: 'Female',
    admissionDate: '2020-07-05',
    parentName: 'Sarah Davis',
    contact: '(555) 456-7890',
    status: 'inactive',
  },
  {
    id: 5,
    name: 'William Wilson',
    rollNo: 'S1005',
    class: '9A',
    gender: 'Male',
    admissionDate: '2022-06-18',
    parentName: 'Thomas Wilson',
    contact: '(555) 567-8901',
    status: 'suspended',
  },
  {
    id: 6,
    name: 'Sophia Martinez',
    rollNo: 'S1006',
    class: '11A',
    gender: 'Female',
    admissionDate: '2020-06-25',
    parentName: 'Maria Martinez',
    contact: '(555) 678-9012',
    status: 'active',
  },
  {
    id: 7,
    name: 'Alexander Thompson',
    rollNo: 'S1007',
    class: '10B',
    gender: 'Male',
    admissionDate: '2021-07-12',
    parentName: 'Steven Thompson',
    contact: '(555) 789-0123',
    status: 'active',
  },
  {
    id: 8,
    name: 'Olivia Anderson',
    rollNo: 'S1008',
    class: '9C',
    gender: 'Female',
    admissionDate: '2022-06-30',
    parentName: 'Patricia Anderson',
    contact: '(555) 890-1234',
    status: 'active',
  },
];

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [classFilter, setClassFilter] = useState<string>('all');
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const { toast } = useToast();

  const filteredStudents = students.filter(student => {
    // Search filter
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        student.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    
    // Class filter
    const matchesClass = classFilter === 'all' || student.class === classFilter;
    
    return matchesSearch && matchesStatus && matchesClass;
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddStudentOpen(false);
    toast({
      title: "Student Added",
      description: "New student has been successfully added.",
    });
  };

  const getStatusBadge = (status: Student['status']) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'inactive':
        return <Badge variant="outline">Inactive</Badge>;
      case 'suspended':
        return <Badge variant="destructive">Suspended</Badge>;
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage all your students from one place.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Dialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Student
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogDescription>
                  Enter student details. Click save when done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddStudent}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="rollNo" className="text-right">Roll No</Label>
                    <Input id="rollNo" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="class" className="text-right">Class</Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9A">9A</SelectItem>
                        <SelectItem value="9B">9B</SelectItem>
                        <SelectItem value="9C">9C</SelectItem>
                        <SelectItem value="10A">10A</SelectItem>
                        <SelectItem value="10B">10B</SelectItem>
                        <SelectItem value="11A">11A</SelectItem>
                        <SelectItem value="11C">11C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="gender" className="text-right">Gender</Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="admissionDate" className="text-right">Admission Date</Label>
                    <Input type="date" id="admissionDate" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="parentName" className="text-right">Parent Name</Label>
                    <Input id="parentName" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="contact" className="text-right">Contact</Label>
                    <Input id="contact" className="col-span-3" required />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Student</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg border">
        <div className="p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={classFilter} onValueChange={setClassFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  <SelectItem value="9A">9A</SelectItem>
                  <SelectItem value="9B">9B</SelectItem>
                  <SelectItem value="9C">9C</SelectItem>
                  <SelectItem value="10A">10A</SelectItem>
                  <SelectItem value="10B">10B</SelectItem>
                  <SelectItem value="11A">11A</SelectItem>
                  <SelectItem value="11C">11C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Roll No</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Parent Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-10 text-muted-foreground">
                    No students found. Try adjusting your filters.
                  </TableCell>
                </TableRow>
              ) : (
                filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="font-medium">{student.name}</div>
                    </TableCell>
                    <TableCell>{student.rollNo}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.parentName}</TableCell>
                    <TableCell>{student.contact}</TableCell>
                    <TableCell>{getStatusBadge(student.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Grades</DropdownMenuItem>
                          <DropdownMenuItem>Attendance Record</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Delete Student</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="p-4 flex items-center justify-between border-t">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{filteredStudents.length}</span> of{" "}
            <span className="font-medium">{students.length}</span> students
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="min-w-8">
              1
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Students;
