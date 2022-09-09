import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IntroComponent } from './components/home/intro/intro.component';
import { ServicesComponent } from './components/home/services/services.component';
import { BenefitsComponent } from './components/home/benefits/benefits.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { UserContactComponent } from './components/search/user-contact/user-contact.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { WorkingComponent } from './components/working/working/working.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { HistoryComponent } from './components/user/history/history.component';
import { ModalPostComponent } from './components/user/modal-post/modal-post.component';
import { RequestsComponent } from './components/user/requests/requests.component';
import { ModalMessageComponent } from './components/user/modal-message/modal-message.component';
import { ModalFeedbackComponent } from './components/user/modal-feedback/modal-feedback.component';
import { NoUserMessageComponent } from './components/search/no-user-message/no-user-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    ProfileComponent,
    IntroComponent,
    ServicesComponent,
    BenefitsComponent,
    NavComponent,
    FooterComponent,
    UserContactComponent,
    FormProfileComponent,
    NotFoundComponent,
    UserComponent,
    UserProfileComponent,
    WorkingComponent,
    PrivacyPolicyComponent,
    ForgetPasswordComponent,
    CookiesPolicyComponent,
    LegalNoticeComponent,
    HistoryComponent,
    ModalPostComponent,
    RequestsComponent,
    ModalMessageComponent,
    ModalFeedbackComponent,
    NoUserMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
