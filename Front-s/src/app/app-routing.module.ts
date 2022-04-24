import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { OfferComponent } from './offer/offer.component';
import { TutorsComponent } from './tutors/tutors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authorize', component: LogRegComponent },
  { path: 'authorize/offer', component: OfferComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:title', component: CourseDetailComponent },
  { path: 'tutors', component: TutorsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
