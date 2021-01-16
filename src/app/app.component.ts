import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdfvnew';
  page = 1;
  totalPages=null;
  searchText=""
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
}
