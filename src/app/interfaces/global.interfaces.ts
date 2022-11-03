export interface IFormStyle {
    formLabel: string,
    textColor: string,
    bgColor: string,
    borderType: string,
    borderColor: string
}

export interface IElements {
    element: string,
    id: number
}


export interface IElementCredential {
    id: number,
    name: string
}

export interface IFieldStyle {
    label: string,
    placeholder: string,
    width: string,
    height: string,
    fz: string,
    fw: string,
    color: string,
    borderStyle: string,
    id?: number,
    option?: string[]

}