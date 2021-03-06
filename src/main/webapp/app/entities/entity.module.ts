import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PruebaCompletaJHipsterWishListModule } from './wish-list/wish-list.module';
import { PruebaCompletaJHipsterWishModule } from './wish/wish.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PruebaCompletaJHipsterWishListModule,
        PruebaCompletaJHipsterWishModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaCompletaJHipsterEntityModule {}
