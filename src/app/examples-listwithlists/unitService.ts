
import { of as observableOf ,  Observable } from 'rxjs';

import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ExampleUnit } from './unit.model';

@Injectable()
export class UnitService {
    private items: ExampleUnit[] = [];
    constructor() {
        this.createExampleData();
    }

    private getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createExampleData() {

        const exampleNames: string[] = ['Offentlig verksamhet Mellerud', 'Offentlig verksamhet Lunden', 'Offentlig verksamhet Kungälv',
            'Offentlig verksamhet för mödravård', 'Mottagningen Östra', 'Kalle Karlssons Enhet',
            'Offentlig verksamhet mottagning', 'Offentlig verksamhet Kristinedal', 'Janne Karlssons Specialist',
            'Privat verksamhet Mölndal', 'Privat verksamhet Göteborg', 'Privat verksamhet Alingsås',
            'Mottagningen Hemma'];
        const examplehsaid = 'SE2329999131-E000000011';
        let item: ExampleUnit;

        for (let i = 1; i <= 104; i++) {
            const indexForNames = this.getRandomInt(0, 12);
            const isActive = Math.random() >= 0.5;
            const amout = this.getRandomInt(1, 99) * 100;

            item = {
                vald: false,
                id: i,
                enhet: exampleNames[indexForNames] + ' ' + i.toString(),
                hsaid: examplehsaid + (200 + i + 1).toString(),
                belopp: amout,
                isActive: isActive,
            } as ExampleUnit;

            this.items.push(item);
        }
    }

    getUnits(searchString: string): Observable<ExampleUnit[]> {
        searchString = searchString.toLowerCase();
        return observableOf(
            this.items.filter(item => {
                return (
                    (item.enhet.toLowerCase().indexOf(searchString) !== -1 ||
                        item.hsaid.toLowerCase().indexOf(searchString) !== -1 ||
                        item.belopp.toString().indexOf(searchString) !== -1)
                );
            })
        ).pipe(delay(0));
    }
}
