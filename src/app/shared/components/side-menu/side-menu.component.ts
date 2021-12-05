import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
@Component({
    selector: 'app-side-menu',
    templateUrl: 'side-menu.component.html'
})

export class SideMenuComponent implements OnInit { 
    public items: any[] = [
        { text: "item1", items: [{ text: "item1.1" }, { text: "item1.2" }] },
      ];
      @ViewChild('list', {static: true})
      public listTemplate: TemplateRef<any> | undefined;
      constructor() {}
      public ngOnInit(): void {
       // this.listtemplate = this.listTemplate;
        const template =this.listTemplate;
        console.log(this.listTemplate);
        this.items[0].contentTemplate = template;
      }
}
