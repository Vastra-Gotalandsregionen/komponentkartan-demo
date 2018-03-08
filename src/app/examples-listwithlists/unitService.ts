import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ExampleUnit } from './unit.model';

@Injectable()

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

        const exampleNames: string[] = ['Närhälsan Mellerud', 'Närhälsan Lunden', 'Närhälsan Kungälv',
            'Närhälsan psykologenheten för mödravård', 'BB-mottagningen Östra', 'Kalle Karlssons fotvårdsenhet',
            'Närhälsan rehabmottagning', 'Närhälsan Kristinedal', 'Janne Karlssons hudvårdsspecialist',
            'Hälsoakuten Mölndal', 'Hälsoakuten Göteborg', 'Hälsoakuten Alingsås',
            'Rehabmottagningen Hemma'];
        const examplehsaid = 'SE2321000131-E000000011';
        const examplehenhetskod: number[] = [802200, 663300, 663200, 623300, 627600, 432300, 435600, 806600, 834500, 678500, 458700, 648900, 804500];
        let item: ExampleUnit;

        for (let i = 1; i <= 200; i++) {
            const indexForNames = this.getRandomInt(0, 12);
            const indexForAgare = this.getRandomInt(0, 4);
            const indexForEnhetskod = this.getRandomInt(0, 12);
            const indexForNamnd = this.getRandomInt(0, 4);
            const isActive = Math.random() >= 0.5;
            const amout = this.getRandomInt(1, 99) * 100;

            item = {
                vald: false,
                id: i,
                enhet: exampleNames[indexForNames] + ' ' + i.toString(),
                hsaid: examplehsaid + (200 + i).toString(),
                belopp: amout,
                isActive: isActive
            } as ExampleUnit;

            this.items.push(item);
        }

    }

    getUnits(): Observable<ExampleUnit[]> {
        // setTimeout(() => {
        return Observable.of(this.items);
        //}, 1500);

    }
}
