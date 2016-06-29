/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SubmissionsComponent } from './submissions.component';

describe('Component: Submissions', () => {
  it('should create an instance', () => {
    let component = new SubmissionsComponent();
    expect(component).toBeTruthy();
  });
});
