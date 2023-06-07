export interface IDialogData {
    title: string,
    message: string,
    buttons: Array<{ 'title': string, 'result': string, 'class': string }>
}