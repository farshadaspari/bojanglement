import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component'
import { AboutComponent } from './../components/about/about.component'
import { ContactComponent } from './../components/contact/contact.component'
import { PseudolocalizationComponent } from '../components/pseudolocalization/pseudolocalization.component';
import { GUIDGeneratorComponent } from '../components/guid-generator/guid-generator.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pseudolocalization', component: PseudolocalizationComponent },
    { path: 'guid-generator', component: GUIDGeneratorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
