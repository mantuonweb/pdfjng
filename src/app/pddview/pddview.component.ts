import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
declare const $;
@Component({
  selector: 'app-pdfview',
  templateUrl: './pddview.component.html',
  styleUrls: ['./pddview.component.scss']
})
export class PddviewComponent implements OnInit {
  url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
  @ViewChild(PdfViewerComponent, { static: false }) private pdfViewer: PdfViewerComponent;
  stringToSearch = 'combinations';
  curpage = 1;
  @Input() page = 1;
  @Input() searchInCurrent;
  @Input() searchText = '';
  @Output() loaded = new EventEmitter();
  @Output() pageChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  search() {
    this.pdfViewer.pdfFindController.executeCommand('find', {
      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: this.stringToSearch
    });
  }
  afterLoadComplete(event) {
    this.loaded.emit(event);
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.searchText,changes);
    if (changes.searchText && this.pdfViewer && this.pdfViewer.pdfFindController) {
      this.stringToSearch = this.searchText;
      if(this.searchInCurrent){
        this.findInCurrentPage();
      }else{
        this.search();
      }
    }
    if (changes.hasOwnProperty("page")) {
      this.curpage = this.page;
    }
  }
  onPageChange() {
    console.log(this.curpage);
    this.pageChange.emit(this.curpage);
  }
  findNext() {
    if(!this.searchInCurrent){
      this.pdfViewer.pdfFindController._nextMatch();
    }
  }
  findInCurrentPage() {
    $(`[data-page-number='${this.page}'] .textLayer span.highlight.selected`).each((i,item)=>{
      // $(item).html($(item).parent('span').data("old_html"));
      let newhtml = $(item).parent('span').html().replace(`<span class="highlight selected">`,"").replace("</span>","");
      $(item).parent('span').html(newhtml);
    });
    this.searchText && $(`[data-page-number='${this.page}'] .textLayer span`).filter((i, item) => {
      if ($(item).text().includes(this.searchText)) {
        // let old = $(item).html();
        // $(item).data("old_html",old);
        $(item).html($(item).text().replace(this.searchText, `<span class='highlight selected'>${this.searchText}</span>`));
      }
      // console.log($(item).text().includes('NSF'));
    });
  }
}
