import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },

  {
    title: true,
    name: 'Management'
  },

  {
    name: 'Employees',
    url: '/employees',
    iconComponent: { name: 'cil-user' }
  },

  {
    name: 'Attendance',
    url: '/attendance',
    iconComponent: { name: 'cil-calendar-check' }
  },

  {
    name: 'Departments',
    url: '/departments',
    iconComponent: { name: 'cil-building' }
  },

  {
    name: 'Payroll',
    url: '/payroll',
    iconComponent: { name: 'cil-wallet' }
  },

  {
    name: 'Reports',
    url: '/reports',
    iconComponent: { name: 'cil-chart' }
  },

  {
    name: 'Tasks',
    url: '/tasks',
    iconComponent: { name: 'cil-task' }
  },

  {
    title: true,
    name: 'System'
  },

  {
    name: 'Settings',
    url: '/settings',
    iconComponent: { name: 'cil-settings' }
  }
];