export const razorpayConfig = {
    key: '',
    amount: 100 * 1,
    name: 'Academy Front',
    order_id : '',
    receipt: '',
    prefill: {
        name: '',
        email: '',
        contact: '',
        method: ''
    },
    notes: {
        merchant_order_id: '',
        handling_charges: 0,
        final_tax_amount: 0
    },
    modal: {},
    theme: {
        color: '#0096C5'
    },
    currency: 'INR'
};
/**Gets or Sets RazorpayViewModel */
export interface RazorpayViewModel {
    /**Gets or sets amount */
    amount?: number;
    /**Gets or sets email */
    email?: string;
    /**Gets or sets invoiceNumber */
    invoiceNumber?: string;
    /**Gets or sets receipt */
    receipt?:  string;
    /**Gets or sets mobilenumber */
    mobilenumber?: number;
    /**Gets or sets currency */
    currency?: string;

}
