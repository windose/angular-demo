export interface Book {
    title: string
    subtitle: string,
    isbn: string,
    abstract: string,
    author: string,
    numPages: number,
    publisher: {
        name: string,
        url: string
    },
    cover: string
}
