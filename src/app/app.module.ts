import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { StageComponent } from './stage/stage.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { OverComponent } from './over/over.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ReportComponent } from './report/report.component';
import { ReportslistComponent } from './reportslist/reportslist.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MarkdownModule.forRoot(),
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'stage', component: StageComponent },
            { path: 'stage/:id', component: ReportComponent },
            { path: 'over', component: OverComponent },
            { path: 'cv', component: CvComponent },
            { path: 'portfolio', component: PortfolioComponent },
            { path: 'blog', component: BlogComponent },
            { path: '**', redirectTo: 'home' },
        ])
        
    ],
    declarations: [
        AppComponent,
        StageComponent,
        NavComponent,
        HomeComponent,
        OverComponent,
        CvComponent,
        PortfolioComponent,
        BlogComponent,
        ReportComponent,
        ReportslistComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
