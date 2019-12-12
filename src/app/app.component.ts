import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
    selector: 'my-app',
    template: `
     <kendo-treeview
         [nodes]="data"
         [children]="children"
         [hasChildren]="hasChildren"
         textField="text"

         [isExpanded]="isExpanded"
         (collapse)="handleCollapse($event)"
         (expand)="handleExpand($event)"
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

    /**
     * The field that holds the keys of the expanded nodes.
     */
    public keys: string[] = [];

    /**
     * A function that checks whether a given node index exists in the expanded keys collection.
     * If the index can be found, the node is marked as expanded.
     */
    public isExpanded = (dataItem: any, index: string) => {
        return this.keys.indexOf(index) > -1;
    }

    /**
     * A `collapse` event handler that will remove the node hierarchical index
     * from the collection, collapsing its children.
     */
    public handleCollapse(node) {
        this.keys = this.keys.filter(k => k !== node.index);
    }

    /**
     * An `expand` event handler that will add the node hierarchical index
     * to the collection, expanding the its children.
     */
    public handleExpand(node) {
        this.keys = this.keys.concat(node.index);
    }

    public children = (dataitem: any): Observable<any[]> => of(dataitem.items);
    public hasChildren = (dataitem: any): boolean => !!dataitem.items;
}
