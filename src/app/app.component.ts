import { Component, OnInit } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { of, Observable } from 'rxjs';
import { Data } from './data/data';
import { DataService } from './data/data.service';

@Component({
    selector: 'app-root',
    styles: [`.right { margin-right: 5px }`],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    public checkedKeys: any[] = ['1'];

    public enableCheck = true;
    public checkChildren = true;
    public checkParents = true;
    public checkOnClick = false;
    public checkMode: any = 'multiple';
    public selectionMode: any = 'single';

    errorMessage: string;
    data: Data[];

    constructor(private dataService: DataService) {}

    public get checkableSettings(): CheckableSettings {
        return {
            checkChildren: this.checkChildren,
            checkParents: this.checkParents,
            enabled: this.enableCheck,
            mode: this.checkMode,
            checkOnClick: this.checkOnClick
        };
    }

    ngOnInit(): void {
      this.dataService.getData().subscribe({
        next: data => this.data = data,
        error: err => this.errorMessage = err
      });
    }

    public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
    public hasChildren = (dataItem: any): boolean => !!dataItem.items;
}
