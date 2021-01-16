import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PddviewComponent } from './pddview/pddview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import * as PDFJS from 'pdfjs-dist';
import { FormsModule } from '@angular/forms';
// var pdfjsLib = require("pdfjs-dist");
// PdfViewerModule // <- Add PdfViewerModule to imports
console.log(PDFJS)
@NgModule({
  declarations: [
    AppComponent,
    PddviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    setTimeout(()=>{

      PDFJS.GlobalWorkerOptions.workerSrc = "./assets/pdf/pdf.worker.min.js";
    })
    // pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.4.456/build/pdf.worker.js";
  }
}
