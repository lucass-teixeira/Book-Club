export interface Book{
    // itens: any
    volumeInfo: any
    previewLink: string
}

export interface BookStudy {
    id: number
    text: string
    words: [] | undefined
}

export interface WordInfo{
    id: number
    text: string
    isSelected: boolean
    isKnown: boolean
    definition: string | undefined
}


export interface BookClub{
    id: number,
    groupName: string,
    imgURL: string,
    membersAmount: number,
    unlocked: boolean
}