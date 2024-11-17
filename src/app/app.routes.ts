import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'inicio', loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage) },
  { path: 'login', loadComponent: () => import('./login/login.page').then( m => m.LoginPage) },
  { path: 'profile', loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage) },
  { path: 'settings', loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage) },
  { path: 'create-survey', loadComponent: () => import('./create-survey/create-survey.page').then( m => m.CreateSurveyPage) },
  {
    path: 'surveys',
    loadComponent: () => import('./surveys/surveys.page').then( m => m.SurveysPage)
  },
  {
    path: 'surveys',
    loadComponent: () => import('./surveys/surveys.page').then( m => m.SurveysPage)
  },
  {
    path: 'create-profile',
    loadComponent: () => import('./create-profile/create-profile.page').then( m => m.CreateProfilePage)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
