import { NgModule } from '@angular/core';
import { ShastaTripPage } from "./shasta_page";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ShastaTripPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShastaPageRoutingModule { }

@NgModule({
    declarations: [
      ShastaTripPage,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        ShastaPageRoutingModule,
        MatCardModule,
    ],
    exports: [ShastaTripPage],
})
export class ShastaTripPageModule { }
