import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserContactComponent } from './components/search/user-contact/user-contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'privacy-policy',
   component:PrivacyPolicyComponent
  },
  {
    path:'cookies-policy',
   component:CookiesPolicyComponent
  },
  {
    path:'legal-notice',
   component:LegalNoticeComponent
  },
  {
    path: 'form-profile',
    component: FormProfileComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'contact',
    component: UserContactComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: "ignore",
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
