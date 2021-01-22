import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { FirstCuPipe } from './first-cu.pipe';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCoursComponent,
    FirstCuPipe,
    PostsComponent,
    NavbarComponent,
    ListEmployerComponent,
    AddEmployerComponent,
    UpdateEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
