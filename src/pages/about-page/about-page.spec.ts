// Copyright (c) 2016 Tracktunes Inc

import {
    describe,
    expect,
    it
} from '@angular/core/testing';

import {
    InstanceFixture,
    beforeEachDI
} from '../../services/test-utils/test-utils';

import {
    AboutPage
} from './about-page';

let instanceFixture: InstanceFixture = null;

describe('pages/about-page:AboutPage', () => {
    instanceFixture = beforeEachDI(
        AboutPage,
        [],
        true,
        null
    );

    it('initializes', () => {
        expect(instanceFixture.instance).not.toBeNull();
        expect(instanceFixture.fixture).not.toBeNull();
    });
});
