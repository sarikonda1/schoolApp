/**ValidationMessageView */
export interface ValidationMessageView {
    /**///  */
    // new(): ValidationMessageView;
    /**Gets or sets list of string mesaages */
    messages: { [key: string]: string };

    /**Gets or sets StatusCode */
    statusCode: number;
}
