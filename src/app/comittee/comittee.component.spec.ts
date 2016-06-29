/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ComitteeComponent } from './comittee.component';

describe('Component: Comittee', () => {
  it('should create an instance', () => {
    let component = new ComitteeComponent();
    expect(component).toBeTruthy();
  });
});
