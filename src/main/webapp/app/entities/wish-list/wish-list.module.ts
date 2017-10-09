import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PruebaCompletaJHipsterSharedModule } from '../../shared';
import { PruebaCompletaJHipsterAdminModule } from '../../admin/admin.module';
import {
    WishListService,
    WishListPopupService,
    WishListComponent,
    WishListDetailComponent,
    WishListDialogComponent,
    WishListPopupComponent,
    WishListDeletePopupComponent,
    WishListDeleteDialogComponent,
    wishListRoute,
    wishListPopupRoute,
} from './';

const ENTITY_STATES = [
    ...wishListRoute,
    ...wishListPopupRoute,
];

@NgModule({
    imports: [
        PruebaCompletaJHipsterSharedModule,
        PruebaCompletaJHipsterAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        WishListComponent,
        WishListDetailComponent,
        WishListDialogComponent,
        WishListDeleteDialogComponent,
        WishListPopupComponent,
        WishListDeletePopupComponent,
    ],
    entryComponents: [
        WishListComponent,
        WishListDialogComponent,
        WishListPopupComponent,
        WishListDeleteDialogComponent,
        WishListDeletePopupComponent,
    ],
    providers: [
        WishListService,
        WishListPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaCompletaJHipsterWishListModule {}
