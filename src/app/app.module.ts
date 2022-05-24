import { InjectionToken, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './@theme/container/header/header.component';
import { NbIconModule, NbStatusService } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './@theme/container/footer/footer.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RecruitmentComponent } from './pages/home-page/home-page/components/recruitment/recruitment.component';
import { PartnerComponent } from './pages/home-page/home-page/components/partner/partner.component';
import { IntroducePageComponent } from './pages/introduce-page/introduce-page/introduce-page.component';
import { ContentComponent } from './@theme/container/content/content/content.component';
import { OrientationComponent } from './pages/introduce-page/introduce-page/components/orientation/orientation/orientation.component';
import { LeaderComponent } from './pages/introduce-page/introduce-page/components/leader/leader.component';
import { TimeLineComponent } from './pages/introduce-page/introduce-page/components/time-line/time-line.component';
import { ProductPageComponent } from './pages/product-page/product-page/product-page.component';
import { ActivityPageComponent } from './pages/activity/activity-page/activity-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { RecruitPageComponent } from './pages/recruit-page/recruit-page/recruit-page.component';
import { NbAuthService } from '@nebular/auth';
import { LibraryPageComponent } from './pages/library-page/library-page/library-page.component';
import { MaterialExampleModule } from 'src/material.module';
import { PostRecruitPageComponent, DialogRecruitPage } from './pages/recruit-page/components/post-recruit-page/post-recruit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

//Khai báo một constant chứa các route của app
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full',  component: HomePageComponent },
  { path: 'gioi-thieu', component: IntroducePageComponent },
  { path: 'san-pham', component: ProductPageComponent },
  { path: 'hoat-dong', component: ActivityPageComponent },
  { path: 'thu-vien', component: LibraryPageComponent },
  { path: 'tuyen-dung', component: RecruitPageComponent },
  { path: 'tuyen-dung/:id', component: PostRecruitPageComponent },
  { path: 'lien-he', component: ContactPageComponent },
];
//Import RouterModule vào import của app.module
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    RecruitmentComponent,
    PartnerComponent,
    IntroducePageComponent,
    ContentComponent,
    OrientationComponent,
    LeaderComponent,
    TimeLineComponent,
    ProductPageComponent,
    ActivityPageComponent,
    RecruitPageComponent,
    LibraryPageComponent,
    PostRecruitPageComponent,
    DialogRecruitPage,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    NbEvaIconsModule,
    NbIconModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    HttpClientModule,
    MaterialExampleModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NbStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
