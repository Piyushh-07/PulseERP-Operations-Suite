import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
    data: {
      title: 'PulseERP Operations Suite'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'employees',
        loadComponent: () => import('./views/employees/employees.component').then((m) => m.EmployeesComponent),
        data: {
          title: 'Employees'
        }
      },
      {
        path: 'attendance',
        loadComponent: () => import('./views/placeholder/placeholder.component').then((m) => m.PagePlaceholderComponent),
        data: {
          title: 'Attendance',
          subtitle: 'Track daily attendance, shift coverage, and team availability across the organization.'
        }
      },
      {
        path: 'departments',
        loadComponent: () => import('./views/placeholder/placeholder.component').then((m) => m.PagePlaceholderComponent),
        data: {
          title: 'Departments',
          subtitle: 'Manage department goals, capacity planning, and operational health in one view.'
        }
      },
      {
        path: 'payroll',
        loadComponent: () => import('./views/placeholder/placeholder.component').then((m) => m.PagePlaceholderComponent),
        data: {
          title: 'Payroll',
          subtitle: 'Configure payroll cycles, compensation approvals, and benefits administration.'
        }
      },
      {
        path: 'reports',
        loadComponent: () => import('./views/placeholder/placeholder.component').then((m) => m.PagePlaceholderComponent),
        data: {
          title: 'Reports',
          subtitle: 'Generate executive summaries, workforce analytics, and compliance dashboards.'
        }
      },
      {
        path: 'tasks',
        loadComponent: () => import('./views/placeholder/placeholder.component').then((m) => m.PagePlaceholderComponent),
        data: {
          title: 'Tasks',
          subtitle: 'Monitor active tasks, work items, and team velocity across operations.'
        }
      },
      {
        path: 'settings',
        loadComponent: () => import('./views/placeholder/placeholder.component').then((m) => m.PagePlaceholderComponent),
        data: {
          title: 'Settings',
          subtitle: 'Configure user permissions, global preferences, and application workflows.'
        }
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
