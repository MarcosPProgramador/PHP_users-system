const _ = (elm: string) => {
  const e = <HTMLElement>document.querySelector(elm);
  const es = document.querySelectorAll(elm);
  interface childElement {
    Element: string;
    Class: string;
    Index?: number;
    Content?: string;
    Parent?: string;
  }
  const querys = (elm: string, index: number) =>
    <HTMLElement>document.querySelectorAll(elm)[index];

  const html = (elmHtml: string) => {
    es.forEach((elm) => {
      elm.innerHTML = elmHtml;
    });
  };
  const text = (txt: string, i?: number) => {
    e.innerText = txt;
    
    // es.forEach((elm) => {
    //   (<HTMLElement>elm).innerText = txt;
    // });
  };
  const child = (configElement: childElement) => {
    const children = document.createElement(configElement.Element);

    children.className = configElement.Class;
    children.textContent = <string>configElement.Content;

    if (!configElement.Parent) e.appendChild(children);
    else
      configElement.Index != undefined
        ? querys(configElement.Parent, configElement.Index).appendChild(
            children
          )
        : false;

    return { child };
  };

  return { child, html, text };
};
