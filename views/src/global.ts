type ApiRest<N> = {
    status: string
    datas: [N]
}
type Fn<T> = (datas: [T]) => void

async function getContext<T>(api: string, callbackFn: Fn<T>) {
    try {
        const response = await fetch(api),
            ApiRestDatas = <ApiRest<T>>await response.json()
        
        if (ApiRestDatas.status == 'error') throw ApiRestDatas.datas
        else callbackFn(ApiRestDatas.datas)
    } catch (error) {
        console.error(error)
    }
}
function _(elm: string) {
    interface childElement {
        Element: string
        Class: string | string[]
        Index?: number
        Content?: string
        Parent?: string
    }
    const querys = (elm: string, index: number) =>
        <HTMLElement>document.querySelectorAll(elm)[index]
    const query = (elm: string) => <HTMLElement>document.querySelector(elm)

    function _Class(Class: string | string[], elm: HTMLElement) {
        if (Array.isArray(Class)) {
            for (const cls of Class) {
                const lowerCls = cls.toLowerCase()
                const findElmIndex = lowerCls.search(/[.]/)
                const countLetters = lowerCls.length

                const cutPhrase = lowerCls.slice(findElmIndex + 1, countLetters)

                elm.classList.add(cutPhrase)
            }
        } else {
            const lowerCls = Class.toLowerCase()
            const findElmIndex = lowerCls.search(/[.]/)
            const countLetters = lowerCls.length

            const cutPhrase = lowerCls.slice(findElmIndex + 1, countLetters)

            elm.className = cutPhrase
        }
    }
    function _Create(Element: string) {
        return <HTMLElement>document.createElement(Element)
    }
    function _Parent(Parent: string) {
        const lowerParent = Parent.toLowerCase()

        if (lowerParent.search(/[.]/) < 0) return `.${lowerParent}`
        return lowerParent
    }
    let _Index: number = 0
    const Child = ({
        Class,
        Element,
        Index,
        Content,
        Parent,
    }: childElement) => {
        const nChild = _Create(Element)
        _Class(Class, nChild)
        _Index = Index != undefined ? Index : _Index

        if (Content) nChild.textContent = Content
        if (Parent) {
            const nParent = _Parent(Parent)

            querys(nParent, _Index).appendChild(nChild)
        } else query(elm).appendChild(nChild)

        return { Child }
    }

    return { Child }
}
