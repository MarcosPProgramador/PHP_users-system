const _ = (elm: string) => {
    const e = <HTMLElement>document.querySelector(elm)
    const es = document.querySelectorAll(elm)
    interface childElement {
        Element: string
        Class: string
        Index?: number
        Content?: string
        Parent?: string
    }
    const querys = (elm: string, index: number) =>
        <HTMLElement>document.querySelectorAll(elm)[index]

    const html = (elmHtml: string) => {
        es.forEach((elm) => {
            elm.innerHTML = elmHtml
        })
    }
    const text = (txt: string, i?: number) => {
        e.innerText = txt

        // es.forEach((elm) => {
        //   (<HTMLElement>elm).innerText = txt;
        // });
    }

    let _index: number = 0
    const child = (configElement: childElement) => {
        const children = document.createElement(configElement.Element)

        _index = configElement.Index != undefined ? configElement.Index : _index

        children.className = configElement.Class
        children.textContent = <string>configElement.Content

        if (!configElement.Parent) e.appendChild(children)
        else querys(configElement.Parent, _index).appendChild(children)

        return { child }
    }

    return { child, html, text }
}
