function _(elm: string) {
    interface childElement {
        Element: string
        Class: string
        Index?: number
        Content?: string
        Parent?: string
    }
    const querys = (elm: string, index: number) =>
        <HTMLElement>document.querySelectorAll(elm)[index]
    const query = (elm: string) => <HTMLElement>document.querySelector(elm)

    function _Class(Class: string) {
        const a = Class.search(/[.]/) + 1
        const b = Class.length

        return Class.slice(a, b)
    }
    function _Parent(Parent: string) {
        const a = Parent.search(/[.]/)

        if (a < 0) return `.${Parent}`
        else return Parent
    }

    const Child = ({
        Class,
        Element,
        Index,
        Content,
        Parent,
    }: childElement) => {
        _Class(Class)
        if (Parent) {
            _Parent(Parent)
        }

        return { Child }
    }
    return { Child }
}
