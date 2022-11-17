import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, AbstractControl } from '@angular/forms';
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

  /*** Advanced example *****/
  advancedExampleValues = [
    { 'firstName': 'Johanna', 'surname': 'Andersson', 'age': 25, 'gender': 'w' },
    { 'firstName': 'Anders', 'surname': 'Johansson', 'age': 51, 'gender': 'm' },
    { 'firstName': 'Elsa', 'surname': 'Andreasson', 'age': 15, 'gender': 'w' },
    { 'firstName': 'Kurt', 'surname': 'Olsson', 'age': 75, 'gender': 'm' },
    { 'firstName': 'John', 'surname': 'Stark', 'age': 30, 'gender': 'm' },
    { 'firstName': 'Lisa', 'surname': 'Lindgren', 'age': 19, 'gender': 'w' }
  ];
  advancedFilteredValues = this.advancedExampleValues.slice();
  advancedFilterTags: FilterTag[] = [];
  advancedSearchForm: UntypedFormGroup;

  /*****/

  ngOnInit() {
    this.advancedSearchForm = new UntypedFormGroup({
      name: new UntypedFormControl(),
      minimumAge: new UntypedFormControl(),
      women: new UntypedFormControl(),
      men: new UntypedFormControl()
    }, { updateOn: 'blur' });
  }

  addFilter(filterName: string) {
    const name = filterName;
    if (name) {
      const tag = {
        id: Guid.newGuid(),
        text: `${name}`,
        remove: () => this.removeFilter(tag)
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

  /********** Advanced example withe reactive forms  **********/

  advancedFilter() {
    this.advancedFilterTags = [];
    const name = this.advancedSearchForm.get('name');
    if (name.value) {
      const tag = {
        id: Guid.newGuid(),
        text: `${name.value}`,
        remove: () => this.removeAdvancedFilter(name)
      } as FilterTag;
      this.advancedFilterTags.push(tag);
    }
    const minimumAge = this.advancedSearchForm.get('minimumAge');
    if (minimumAge.value) {
      const tag = {
        id: Guid.newGuid(),
        text: `Ålder > ${minimumAge.value}`,
        remove: () => this.removeAdvancedFilter(minimumAge)
      } as FilterTag;
      this.advancedFilterTags.push(tag);
    }
    const women = this.advancedSearchForm.get('women');
    if (women.value) {
      if (women.value) {
        const tag = {
          id: Guid.newGuid(),
          text: 'Kvinnor',
          remove: () => this.removeAdvancedFilter(women)
        } as FilterTag;
        this.advancedFilterTags.push(tag);
      }
    }
    const men = this.advancedSearchForm.get('men');
    if (men.value) {
      if (men.value) {
        const tag = {
          id: Guid.newGuid(),
          text: 'Män',
          remove: () => this.removeAdvancedFilter(men)
        } as FilterTag;
        this.advancedFilterTags.push(tag);
      }
    }

    if (this.advancedFilterTags.length) {
      this.advancedFilteredValues = this.advancedExampleValues.filter(x =>
        (minimumAge.value ? x.age >= minimumAge.value : true) &&
        (name.value ? x.firstName.toLowerCase().includes(name.value.toLowerCase())
          || x.surname.toLowerCase().includes(name.value.toLowerCase()) : true) &&
        (women.value && !men.value ? x.gender === 'w' : true) &&
        (men.value && !women.value ? x.gender === 'm' : true)
      );
    } else {
      this.advancedFilteredValues = this.advancedExampleValues.slice();
    }
  }

  removeAdvancedFilter(control: AbstractControl) {
    control.reset();
    this.advancedFilter();
  }

  removeAllAdvancedFilters() {
    this.advancedSearchForm.reset();
    this.advancedFilter();
  }
}
