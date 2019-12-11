import { Component } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { of, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    styles: [`.right { margin-right: 5px }`],
    templateUrl: './app.component.html'
})
export class AppComponent {
    public checkedKeys: any[] = ['1'];

    public enableCheck = true;
    public checkChildren = true;
    public checkParents = true;
    public checkOnClick = false;
    public checkMode: any = 'multiple';
    public selectionMode: any = 'single';

    public get checkableSettings(): CheckableSettings {
        return {
            checkChildren: this.checkChildren,
            checkParents: this.checkParents,
            enabled: this.enableCheck,
            mode: this.checkMode,
            checkOnClick: this.checkOnClick
        };
    }

    public data: any[] = [
        {
          text: 'Furniture', items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Hani', extra: 'Extra' },
            {
              text: 'Occasional Furniture', items: [{
                text: 'Decor', items: [
                  { text: 'Bed Linen' },
                  { text: 'Curtains & Blinds' }
                ]
              }]
            }
          ]
        },
        { text: 'Decor' },
        { text: 'Outdoors' }
    ];

    public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
    public hasChildren = (dataItem: any): boolean => !!dataItem.items;
}
