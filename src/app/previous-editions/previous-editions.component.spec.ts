/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PreviousEditionsComponent } from './previous-editions.component';

describe('Component: PreviousEditions', () => {
  it('should create an instance', () => {
    let component = new PreviousEditionsComponent();
    expect(component).toBeTruthy();
  });
});
