import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Guid } from 'vgr-komponentkartan';

interface FilterTag {
  id: string;
  text: string;
  remove: () => void;
  disabled: boolean;
}
@Component({
  selector: 'app-filter-tag',
  templateUrl: './filter-tag.component.html',
  styleUrls: ['./filter-tag.component.scss']
})
export class FilterTagComponent implements OnInit {
  values = [
    { 'firstName': 'Johanna', 'surname': 'Andersson' },
    { 'firstName': 'Anders', 'surname': 'Johansson' },
    { 'firstName': 'Elsa', 'surname': 'Andreasson' },
    { 'firstName': 'Kurt', 'surname': 'Olsson' },
    { 'firstName': 'John', 'surname': 'Stark' },
    { 'firstName': 'Lisa', 'surname': 'Lindgren' }
  ];

  filteredValues = this.values.slice();
  filters: FilterTag[] = [];
  disabled = false;

  extendedValues = [
    { 'firstName': 'Johanna', 'surname': 'Andersson', 'age': 25, 'gender': 'w' },
    { 'firstName': 'Anders', 'surname': 'Johansson', 'age': 51, 'gender': 'm' },
    { 'firstName': 'Elsa', 'surname': 'Andreasson', 'age': 15, 'gender': 'w' },
    { 'firstName': 'Kurt', 'surname': 'Olsson', 'age': 75, 'gender': 'm' },
    { 'firstName': 'John', 'surname': 'Stark', 'age': 30, 'gender': 'm' },
    { 'firstName': 'Lisa', 'surname': 'Lindgren', 'age': 19, 'gender': 'w' }
  ];
  extendedFilteredValues = this.extendedValues.slice();
  extendedFilters: FilterTag[] = [];
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl(),
      minimumAge: new FormControl(),
      women: new FormControl(),
      men: new FormControl()
    }, { updateOn: 'blur' });
  }

  addFilter(filterName: string) {
    const name = filterName;
    if (name) {
      const tag = {
        id: Guid.newGuid(),
        text: `${name}`
      } as FilterTag;
      this.filters.push(tag);
    }

    this.filterValues();
  }

  removeFilter(filter: FilterTag) {
    this.filters.splice(this.filters.indexOf(filter), 1);
    this.filterValues();
  }

  removeAllFilters() {
    this.filters = [];
    this.filteredValues = this.values.slice();
  }

  private filterValues() {
    if (this.filters.length) {
      this.filteredValues = this.values.filter(x =>
        this.filters.some(y => x.firstName.toLowerCase().includes(y.text.toLocaleLowerCase()))
        || this.filters.some(y => x.surname.toLowerCase().includes(y.text.toLocaleLowerCase()))
      );
    } else {
      this.filteredValues = this.values.slice();
    }
  }

  disableFilters() {
    this.disabled = !this.disabled;
    this.filters.forEach(x => x.disabled = this.disabled);
  }

  extendedFilter() {
    this.extendedFilters = [];
    const name = this.searchForm.get('name');
    if (name.value) {
      const tag = {
        id: Guid.newGuid(),
        text: `${name.value}`,
        remove: () => this.removeExtendedFilter(name)
      } as FilterTag;
      this.extendedFilters.push(tag);
    }
    const minimumAge = this.searchForm.get('minimumAge');
    if (minimumAge.value) {
      const tag = {
        id: Guid.newGuid(),
        text: `Ålder > ${minimumAge.value}`,
        remove: () => this.removeExtendedFilter(minimumAge)
      } as FilterTag;
      this.extendedFilters.push(tag);
    }
    const women = this.searchForm.get('women');
    if (women.value) {
      if (women.value) {
        const tag = {
          id: Guid.newGuid(),
          text: 'Kvinnor',
          remove: () => this.removeExtendedFilter(women)
        } as FilterTag;
        this.extendedFilters.push(tag);
      }
    }
    const men = this.searchForm.get('men');
    if (men.value) {
      if (men.value) {
        const tag = {
          id: Guid.newGuid(),
          text: 'Män',
          remove: () => this.removeExtendedFilter(men)
        } as FilterTag;
        this.extendedFilters.push(tag);
      }
    }

    if (this.extendedFilters.length) {
      this.extendedFilteredValues = this.extendedValues.filter(x =>
        (minimumAge.value ? x.age >= minimumAge.value : true) &&
        (name.value ? x.firstName.toLowerCase().includes(name.value.toLowerCase())
          || x.surname.toLowerCase().includes(name.value.toLowerCase()) : true) &&
        (women.value && !men.value ? x.gender === 'w' : true) &&
        (men.value && !women.value ? x.gender === 'm' : true)
      );
    } else {
      this.extendedFilteredValues = this.extendedValues.slice();
    }
  }

  removeExtendedFilter(control: AbstractControl) {
    control.reset();
    this.extendedFilter();
  }

  removeAllExtendedFilters() {
    this.searchForm.reset();
    this.extendedFilter();
  }
}
