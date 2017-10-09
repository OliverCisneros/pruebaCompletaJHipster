import { BaseEntity, User } from './../../shared';

export class WishList implements BaseEntity {
    constructor(
        public id?: number,
        public nombre?: string,
        public fechaCreacion?: any,
        public escondido?: boolean,
        public user?: User,
    ) {
        this.escondido = false;
    }
}
