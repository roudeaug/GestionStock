export class Product {
    
    /* Constructeur du model Product.
       Le "?" désigne des paramètres optionnels */
    constructor(public ref?: string,
                public quantity?: number,
                public unitPrice?: number) {

    }
}