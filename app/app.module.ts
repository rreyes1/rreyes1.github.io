import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XHRBackend } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent }   from './app.component';
import { PageComponent } from './page/page.component';
import { PostService } from './_services/post.service';

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule],
    declarations: [AppComponent, PageComponent],
    providers: [AuthGuard, PostService],
    bootstrap: [AppComponent]
})
export class AppModule { }