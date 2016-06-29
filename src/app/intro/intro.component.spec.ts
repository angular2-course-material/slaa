/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IntroComponent } from './intro.component';

describe('Component: Intro', () => {
  it('should create an instance', () => {
    let component = new IntroComponent();
    expect(component).toBeTruthy();
  });
});
