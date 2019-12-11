import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    <kendo-treeview
        [nodes]="data"
        textField="text"
        kendoTreeViewExpandable
        kendoTreeViewSelectable
        kendoTreeViewHierarchyBinding
        childrenField="items"
    >
    </kendo-treeview>
  `
})
export class AppComponent {
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
}

