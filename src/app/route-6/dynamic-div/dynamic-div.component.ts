import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit, AfterViewInit {

  divsArr: any[] = [];
  initDivCount: number = 20;
  batchDivCount: number = 5;

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<this.initDivCount; i+=1) {
      this.divsArr.push(i+1);
    }
  }

  ngAfterViewInit(): void {
    window.onscroll = ()=> {
      this.scrollFunction();
    }
  }

  scrollFunction() {
    if ((document.body.scrollHeight - document.body.scrollTop == document.body.clientHeight) || (document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight)) {
      for(let i=0; i<this.batchDivCount; i+=1) {
        this.divsArr.push(this.divsArr.length + 1);
      }
      document.body.scrollTop = document.body.scrollHeight - document.body.clientHeight - 20;
      document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight - 20;
    }
  }

  divBtnClick(indClicked: any) {
    alert(`Button in ${indClicked + 1} DIV clicked.`)
  }

}
