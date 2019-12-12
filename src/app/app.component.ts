import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
      selector: 'my-app',
      template: `
      <kendo-treeview
          [isDisabled]="isDisabled"

          kendoTreeViewExpandable

          [nodes]="data"
          textField="text"

          [children]="fetchChildren"
          [hasChildren]="hasChildren"
          >
      </kendo-treeview>
  `
  })
  export class AppComponent {

      public data: any[] = [{
              text: 'Furniture', items: [
                  { text: 'Tables & Chairs' },
                  { text: 'Sofas' },
                  { text: 'Occasional Furniture' }
              ]
          }, {
              text: 'Decor', items: [
                  { text: 'Bed Linen' },
                  { text: 'Curtains & Blinds' },
                  { text: 'Carpets' }
              ]
          }
      ];
      // A function that disables every item with a text field which equals to 'Decor'.
      public isDisabled = (dataItem: any) => {
          return dataItem.text === 'Decor';
      }

      public fetchChildren(node: any): Observable<any[]> {
          // Return the node collection of the parent node as children.
          return of(node.items);
      }

      public hasChildren(node: any): boolean {
          // Check if the parent node has children.
          return node.items && node.items.length > 0;
      }
  }
