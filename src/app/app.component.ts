import { Component } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { of, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    styles: [`.right { margin-right: 5px }`],
    template: `
        <fieldset>
            <legend>Check Settings</legend>
            <div class="k-form-field" style="margin-bottom: 1em;">
                <span class="right"><strong>Mode:</strong></span>
                <input type="radio" name="checkMode" id="singleCheck" value="single" class="k-radio right"
                    [(ngModel)]="checkMode" />
                <label class="k-radio-label right" for="singleCheck">Single</label>
                <input type="radio" name="checkMode" id="multipleCheck" value="multiple" class="k-radio"
                    [(ngModel)]="checkMode" />
                <label class="k-radio-label" for="multipleCheck">Multiple</label>
            </div>
            <div  *ngIf="checkMode == 'multiple'">
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="enableCheck"
                        class="k-checkbox"
                        [(ngModel)]="enableCheck"
                    />
                    <label class="k-checkbox-label" for="enableCheck">Enable</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="checkChildren"
                        class="k-checkbox"
                        [(ngModel)]="checkChildren"
                    />
                    <label class="k-checkbox-label" for="checkChildren">Check all children</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="checkParents"
                        class="k-checkbox"
                        [(ngModel)]="checkParents"
                    />
                    <label class="k-checkbox-label" for="checkParents">Check all parents when children are checked</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="checkOnClick"
                        class="k-checkbox"
                        [(ngModel)]="checkOnClick"
                    />
                    <label class="k-checkbox-label" for="checkOnClick">Check the node on click</label>
                </label>
            </div>
        </fieldset>
        <br />
        <kendo-treeview
            [nodes]="data"
            [children]="children"
            [hasChildren]="hasChildren"
            textField="text"

            [kendoTreeViewCheckable]="checkableSettings"
            [(checkedKeys)]="checkedKeys"
        >
        </kendo-treeview>
        <div style="margin: 10px 0">
            <i>Press SPACE to check/uncheck the active node</i>
            <div class="example-config">
                Checked keys: {{checkedKeys.join(",")}}
            </div>
        </div>
  `
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
