import { ExampleUnit } from './unit.model';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'unitfilter',
    pure: false
})

export class UnitFilterPipe implements PipeTransform {
    transform(items: ExampleUnit[], searchword: string): any {

        if (!items || !searchword) {
            return items;
        }
        return items.filter(item => (item.enhet.toLowerCase().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.hsaid.toLowerCase().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.agare.toLowerCase().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.enhetskod.toString().indexOf(searchword.toLowerCase()) !== -1) ||
            (item.namnd.toLowerCase().indexOf(searchword.toLowerCase()) !== -1));

    }
}
