import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FormElementComponent } from './form-element/form-element.component';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { CalenderComponent } from './calender/calender.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SettingsComponent } from './settings/settings.component';
import { MapsComponent } from './maps/maps.component';
import { ProfileComponent } from './profile/profile.component';
import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrUsersComponent } from './HRMS/hr-users/hr-users.component';
import { HrDepartmentsComponent } from './hrms/hr-departments/hr-departments.component';
import { HrEmployeeComponent } from './hrms/hr-employee/hr-employee.component';
import { HrActivitiesComponent } from './hrms/hr-activities/hr-activities.component';
import { HrHolidaysComponent } from './hrms/hr-holidays/hr-holidays.component';
import { HrEventsComponent } from './hrms/hr-events/hr-events.component';
import { HrPayrollComponent } from './hrms/hr-payroll/hr-payroll.component';
import { HrAccountsComponent } from './hrms/hr-accounts/hr-accounts.component';
import { HrReportComponent } from './hrms/hr-report/hr-report.component';
import { HRMSComponent } from './hrms/hrms.component';
import { SearchComponent } from './search/search.component';
import { PrDashboardComponent } from './project/pr-dashboard/pr-dashboard.component';
import { PrProjectlistComponent } from './project/pr-projectlist/pr-projectlist.component';
import { PrTaskboardComponent } from './project/pr-taskboard/pr-taskboard.component';
import { PrTicketlistComponent } from './project/pr-ticketlist/pr-ticketlist.component';
import { PrTicketdetailsComponent } from './project/pr-ticketdetails/pr-ticketdetails.component';
import { PrClientsComponent } from './project/pr-clients/pr-clients.component';
import { PrTodolistComponent } from './project/pr-todolist/pr-todolist.component';
import { ProjectComponent } from './project/project.component';
import { JobPortalComponent } from './job-portal/job-portal.component';
import { JobportalDashboardComponent } from './job-portal/jobportal-dashboard/jobportal-dashboard.component';
import { JobportalPositionsComponent } from './job-portal/jobportal-positions/jobportal-positions.component';
import { JobportalApplicantsComponent } from './job-portal/jobportal-applicants/jobportal-applicants.component';
import { JobportalResumesComponent } from './job-portal/jobportal-resumes/jobportal-resumes.component';
import { JobportalSettingsComponent } from './job-portal/jobportal-settings/jobportal-settings.component';
import { IconFontawesomeComponent } from './UI-ELEMENTS/icons/icon-fontawesome/icon-fontawesome.component';
import { IconFeatherComponent } from './UI-ELEMENTS/icons/icon-feather/icon-feather.component';
import { IconLinesComponent } from './UI-ELEMENTS/icons/icon-lines/icon-lines.component';
import { IconFlagsComponent } from './UI-ELEMENTS/icons/icon-flags/icon-flags.component';
import { IconPaymentsComponent } from './UI-ELEMENTS/icons/icon-payments/icon-payments.component';
import { GalleryComponent } from './ui-elements/gallery/gallery.component';
import { WCardComponent } from './widgets/w-card/w-card.component';
import { WStaticsComponent } from './widgets/w-statics/w-statics.component';
import { WDataComponent } from './widgets/w-data/w-data.component';
import { WSocialComponent } from './widgets/w-social/w-social.component';
import { WOtherComponent } from './widgets/w-other/w-other.component';


const routes: Routes = [
  {
    path: 'hr',
    component: HRMSComponent,
    data: { title: ':: Epic :: Home' }
  },
  {
    path: 'hr-dashboard',
    component: HrDashboardComponent,
    data: { title: ':: Epic :: Home' }
  },
  {
    path: 'hr-users',
    component: HrUsersComponent,
    data: { title: ':: Epic :: HR Users' }
  },
  {
    path: 'hr-departments',
    component: HrDepartmentsComponent,
    data: { title: ':: Epic :: HR Departments' }
  },
  {
    path: 'hr-employee',
    component: HrEmployeeComponent,
    data: { title: ':: Epic :: HR Employee' }
  },
  {
    path: 'hr-activities',
    component: HrActivitiesComponent,
    data: { title: ':: Epic :: HR Activities' }
  },
  {
    path: 'hr-holidays',
    component: HrHolidaysComponent,
    data: { title: ':: Epic :: HR Holidays' }
  },
  {
    path: 'hr-events',
    component: HrEventsComponent,
    data: { title: ':: Epic :: HR Events' }
  },
  {
    path: 'hr-payroll',
    component: HrPayrollComponent,
    data: { title: ':: Epic :: HR Payroll' }
  },
  {
    path: 'hr-accounts',
    component: HrAccountsComponent,
    data: { title: ':: Epic :: HR Accounts' }
  },
  {
    path: 'hr-reports',
    component: HrReportComponent,
    data: { title: ':: Epic :: HR Report' }
  },
  {
    path: 'search',
    component: SearchComponent,
    data: { title: ':: Epic :: Search' }
  },
  {
    path: 'calender',
    component: CalenderComponent,
    data: { title: ':: Epic :: Calender' }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: ':: Epic :: Contacts' }
  },
  {
    path: 'chat',
    component: ChatComponent,
    data: { title: ':: Epic ::  Chat' }
  },
  {
    path: 'filemanager',
    component: FilemanagerComponent,
    data: { title: ':: Epic ::  Filemanager' }
  },
  {
    path: 'project',
    component: ProjectComponent,
    data: { title: ':: Epic :: Project' }
  },
  {
    path: 'project-deashboard',
    component: PrDashboardComponent,
    data: { title: ':: Epic :: Project Dashboard' }
  },
  {
    path: 'project-list',
    component: PrProjectlistComponent,
    data: { title: ':: Epic :: Project List' }
  },
  {
    path: 'project-taskboard',
    component: PrTaskboardComponent,
    data: { title: ':: Epic :: Project Taskboard' }
  },
  {
    path: 'project-ticketlist',
    component: PrTicketlistComponent,
    data: { title: ':: Epic :: Project Ticketlist' }
  },
  {
    path: 'project-ticketdetails',
    component: PrTicketdetailsComponent,
    data: { title: ':: Epic :: Project Ticketdetails' }
  },
  {
    path: 'project-clients',
    component: PrClientsComponent,
    data: { title: ':: Epic :: Project Clients' }
  },
  {
    path: 'project-todo-list',
    component: PrTodolistComponent,
    data: { title: ':: Epic :: Project Todolist' }
  },
  {
    path: 'jobportal',
    component: JobPortalComponent,
    data: { title: ':: Epic :: JobPortal' }
  },
  {
    path: 'jobportal-job-dashboard',
    component: JobportalDashboardComponent,
    data: { title: ':: Epic :: JobPortal Dashboard' }
  },
  {
    path: 'jobportal-positions',
    component: JobportalPositionsComponent,
    data: { title: ':: Epic :: JobPortal Positions' }
  },
  {
    path: 'jobportal-applicants',
    component: JobportalApplicantsComponent,
    data: { title: ':: Epic :: JobPortal Applicants' }
  },
  {
    path: 'jobportal-resumes',
    component: JobportalResumesComponent,
    data: { title: ':: Epic :: JobPortal Resumes' }
  },
  {
    path: 'jobportal-settings',
    component: JobportalSettingsComponent,
    data: { title: ':: Epic :: JobPortal Settings' }
  },
  {
    path: 'icon-fontawesome',
    component: IconFontawesomeComponent,
    data: { title: ':: Epic :: Icon Fontawesome' }
  },
  {
    path: 'icon-feather',
    component: IconFeatherComponent,
    data: { title: ':: Epic :: Icon Feather' }
  },
  {
    path: 'icon-lines',
    component: IconLinesComponent,
    data: { title: ':: Epic :: Icon Lines' }
  },
  {
    path: 'icon-flags',
    component: IconFlagsComponent,
    data: { title: ':: Epic :: Icon Flags' }
  },
  {
    path: 'icon-payments',
    component: IconPaymentsComponent,
    data: { title: ':: Epic :: Icon Payments' }
  },
  {
    path: 'table',
    component: TablesComponent,
    data: { title: ':: Epic :: Tables' }
  },
  {
    path: 'map',
    component: MapsComponent,
    data: { title: ':: Epic :: Maps' }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: ':: Epic :: Gallery' }
  },
  {
    path: 'charts',
    component: ChartsComponent,
    data: { title: ':: Epic :: Charts' }
  },
  {
    path: 'formelement',
    component: FormElementComponent,
    data: { title: ':: Epic :: Forms' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: ':: Epic :: Settings' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: ':: Epic :: Profile' }
  },
  {
    path: 'widgets',
    component: WidgetsComponent,
    data: { title: ':: Epic :: Widgets' }
  },
  {
    path: 'widgets-card',
    component: WCardComponent,
    data: { title: ':: Epic :: Widgets' }
  },
  {
    path: 'widgets-statistics',
    component: WStaticsComponent,
    data: { title: ':: Epic :: Widgets' }
  },
  {
    path: 'widgets-data',
    component: WDataComponent,
    data: { title: ':: Epic :: Widgets' }
  },
  {
    path: 'widgets-social',
    component: WSocialComponent,
    data: { title: ':: Epic :: Widgets' }
  },
  {
    path: 'widgets-other',
    component: WOtherComponent,
    data: { title: ':: Epic :: Widgets' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
  static components = [
  ];

}