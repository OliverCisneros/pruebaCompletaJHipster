import { BaseEntity } from './../../shared';

export class Wish implements BaseEntity {
    constructor(
        public id?: number,
        public productId?: number,
        public precio?: number,
        public wishList?: BaseEntity,
    ) {
    }
}
