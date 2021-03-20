type ApiRest<N> = {
    status: string
    datas: [N]
}
type Fn<T> = (datas: [T]) => void

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
type IMethods =
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'get'
    | 'post'
    | 'delete'
    | 'put'
type ICallback = (response: any) => void

function request(
    method: IMethods,
    url: string,
    callback: ICallback,
    data?: any
) {
    const xhr = new XMLHttpRequest()

    xhr.responseType = 'json'

    xhr.open(method, url, true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) callback(xhr.response)
    }
    if (data) {
        let dataStr = ''
        for (const key in data) {
            dataStr += `${key}=${data[key]}&`
        }

        xhr.send(dataStr.slice(0, -1))
    } else xhr.send()
}

const app = {
    baseUrl: location.href.slice(0, -1),
    get: (resourse: string, callback: ICallback) => {
        const url = `${app.baseUrl}${resourse}`
        request('GET', url, callback)
    },
    post: (resourse: string, callback: ICallback, data?: any) => {
        const url = `${app.baseUrl}${resourse}`
        request('POST', url, callback, data)
    },
    put: (resourse: string, callback: ICallback, data?: any) => {
        const url = `${app.baseUrl}${resourse}`
        request('PUT', url, callback, data)
    },
    delete: (resourse: string, callback: ICallback) => {
        const url = `${app.baseUrl}${resourse}`
        request('DELETE', url, callback)
    },
}
app.get('/auth', (res) => {
    console.log(res)
})
