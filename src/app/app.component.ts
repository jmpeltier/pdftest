import { Component } from '@angular/core';
import { PDFProgressData, PDFDocumentProxy, PDFSource }  from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdftestapp';
  pdfSrc: string = 'assets/pdftest.pdf';
  pdf:any;
  isLoaded:boolean=false;
  numPages:number = 0;
  showAllPages:boolean = false;
  currentPage:number = 1;
  outline: any[];

  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.numPages = pdf.numPages;
    this.isLoaded = true;

    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }
  incrementPage(){
    this.currentPage +=1;
  }

  decrementPage(){
    this.currentPage -=1;
  }
}
