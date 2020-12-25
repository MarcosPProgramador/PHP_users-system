const $ = (elm: string) => {
  const e = <HTMLElement>document.querySelector(elm);

  interface childElement {
    Element: string;
    Class: string;
    Index?: number;
    Content?: string;
    Parent?: string;
  }
  const querys = (elm: string, index: number) =>
    <HTMLElement>document.querySelectorAll(elm)[index];

  const child = (configElement: childElement) => {
    const children = document.createElement(configElement.Element);
    children.className = configElement.Class;

    if (configElement.Content) children.textContent = configElement.Content;
    
    if (!configElement.Parent) e.appendChild(children);
    else
      configElement.Index != undefined
        ? querys(configElement.Parent, configElement.Index).appendChild(
            children
          )
        : false;

    return { child };
  };

  return { child };
};
