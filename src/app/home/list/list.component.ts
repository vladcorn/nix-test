import {Component, Input} from '@angular/core';



@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent {

    @Input() listData: string[];
    @Input() searchString: string;

    match(item) {
        
        return !this.searchString || item.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1;

    }


   
}
