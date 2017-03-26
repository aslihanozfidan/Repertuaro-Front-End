import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules  } from '@angular/router';

// all route and high level routes with lazy loading
// + denotes lazy loading for those modules
export const routes: Routes = [
 { path: '', redirectTo: '/index', pathMatch: 'full' },
 { path: 'home', loadChildren: './+home/home.module#HomeModule' },
 { path: 'forget', loadChildren: './+forget/forget.module#ForgetModule' },
 { path: 'register', loadChildren: './+register/register.module#RegisterModule' },
 { path: 'uye', loadChildren: './+profile/profile.module#ProfileModule' },
 { path: 'sarkilar', loadChildren: './+song_list/song_list.module#SongListModule' },
  { path: 'repertuar', loadChildren: './+repertuar/repertuar.module#RepertuarModule' },
  { path: 'help', loadChildren: './+help/help.module#HelpModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
