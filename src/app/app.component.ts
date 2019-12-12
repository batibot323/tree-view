import { Component } from '@angular/core';

import { of } from 'rxjs';

@Component({
    selector: 'my-app',
    template: `
        <div class="example-config">
            Expanded keys: {{expandedKeys.join(",")}}
        </div>
        <kendo-treeview
            [nodes]="data"
            textField="text"
            [hasChildren]="hasChildren"
            [children]="fetchChildren"

            kendoTreeViewExpandable
            [(expandedKeys)]="expandedKeys"
        >
        </kendo-treeview>
  `
})
export class AppComponent {
    public expandedKeys: any[] = ['1'];

    public data: any[] = [
        {
            text: 'Furniture', items: [
                { text: 'Tables & Chairs' },
                { text: 'Sofas' },
                { text: 'Occasional Furniture' }
            ]
        },
        {
            text: 'Decor', items: [
                { text: 'Bed Linen' },
                { text: 'Curtains & Blinds' },
                { text: 'Carpets' }
            ]
        }
    ];

    public hasChildren = (item: any) => item.items && item.items.length > 0;
    public fetchChildren = (item: any) => of(item.items);
}

