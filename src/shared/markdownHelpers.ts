
const adjustLongText = (longText: string | null): string | null =>
    longText ? longText.replace(/\n/g, "  \n"): longText;

export{
    adjustLongText
}
