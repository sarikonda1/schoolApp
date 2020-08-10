/**Gets or Sets paypalViewModel */
export interface PaypalViewModel {
    /**Gets or sets intent */
    intent?: string;
    /**Gets or sets purchase_units */
    purchase_units?: any;
    /**Gets or sets payer */
    payer?: any;

    /**Gets or sets invoiceNumber*/
    invoiceNumber?: string;
}
