import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard, AuthModule, authRoutes } from '@dc/auth';
import { LayoutModule } from '@dc/layout';
import { AppComponent } from './app.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dishes' },
  { path: 'auth', children: authRoutes },
  {
    path: 'dishes',
    loadChildren: () =>
      import('@dc/dishes').then((module) => module.DishesModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    AuthModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
