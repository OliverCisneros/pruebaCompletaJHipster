import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PruebaCompletaJHipsterSharedModule } from '../../shared';
import {
    WishService,
    WishPopupService,
    WishComponent,
    WishDetailComponent,
    WishDialogComponent,
    WishPopupComponent,
    WishDeletePopupComponent,
    WishDeleteDialogComponent,
    wishRoute,
    wishPopupRoute,
    WishResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...wishRoute,
    ...wishPopupRoute,
];

@NgModule({
    imports: [
        PruebaCompletaJHipsterSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        WishComponent,
        WishDetailComponent,
        WishDialogComponent,
        WishDeleteDialogComponent,
        WishPopupComponent,
        WishDeletePopupComponent,
    ],
    entryComponents: [
        WishComponent,
        WishDialogComponent,
        WishPopupComponent,
        WishDeleteDialogComponent,
        WishDeletePopupComponent,
    ],
    providers: [
        WishService,
        WishPopupService,
        WishResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaCompletaJHipsterWishModule {}
