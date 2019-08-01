import {Component, ViewChild, Input} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

const names = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle'
];

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {


    @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

    @Input() listData: string[] = names;

    constructor() {
    }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            this.listData = this.listData.slice(0,3).map(item => 'New Mess'+ ' ' + item).concat(...this.listData);
            event.target.complete();
        }, 1500);
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            this.listData = this.listData.concat(...this.listData);
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.listData.length >= names.length * 3) {
                event.target.disabled = true;
            }
        }, 500);
    }
}


