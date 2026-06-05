import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AvatarComponent, BadgeComponent, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, TableDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { EmployeeService } from '../../services/employee.service';

interface EmployeeRow {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: string;
  statusColor: string;
  avatar: string;
}

@Component({
  standalone: true,
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  imports: [CommonModule, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, BadgeComponent, ButtonDirective, IconDirective, AvatarComponent]
})
export class EmployeesComponent implements OnInit {
  employees$!: Observable<EmployeeRow[]>;
  loading = true;

  private readonly departments = [
    'Engineering',
    'HR',
    'Finance',
    'Operations',
    'Customer Success',
    'Compliance'
  ];

  private readonly roles = [
    'Business Analyst',
    'HR Specialist',
    'Operations Manager',
    'Payroll Coordinator',
    'Task Lead',
    'Workforce Planner'
  ];

  private readonly statuses = ['Active', 'On Leave', 'Remote', 'Provisioned'];
  private readonly statusColorMap: Record<string, string> = {
    Active: 'success',
    'On Leave': 'warning',
    Remote: 'info',
    Provisioned: 'secondary'
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees().pipe(
      map((result: any) =>
        result.users.map((user: any, index: number) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          department: this.departments[index % this.departments.length],
          role: this.roles[index % this.roles.length],
          status: this.statuses[index % this.statuses.length],
          statusColor: this.statusColorMap[this.statuses[index % this.statuses.length]],
          avatar: user.image
        }))
      ),
      tap(() => (this.loading = false))
    );
  }
}
