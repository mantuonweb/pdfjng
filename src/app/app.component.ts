import { Component, ViewChild } from '@angular/core';
import { PddviewComponent } from './pddview/pddview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(PddviewComponent, { static: false }) private pdfViewer: PddviewComponent;
  title = 'pdfvnew';
  page = 1;
  totalPages=null;
  searchText="";
  currentSearchType;
  loaded(doc){
    this.totalPages = doc._pdfInfo.numPages
  }
  next(){
    if(this.page<this.totalPages){
      this.page++;
    }
  }
  prev(){
    if(this.page>1){
      this.page--;
    }
  }
  onPageChange(page){
    this.page = page;
  }
  searchNext(){
    if(this.searchText){
      this.pdfViewer.findNext();
    }
  }
}
