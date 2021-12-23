import { Component, OnInit } from "@angular/core";
import { Constants } from "src/app/utils/constants";

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

    listPageIndex = Constants.listPageIndex
    graphPageIndex = Constants.dashboardPageIndex
    currentPageIndex: number
    loading: boolean

    ngOnInit(): void {
        this.loading = false
        this.currentPageIndex = this.listPageIndex
    }

}