const $ = (elm: string) => {
  const e = <HTMLElement>document.querySelector(elm);

  interface childElement {
    Element: string;
    Class: string;
    Index: number;
    Content?: string;
    Parent?: string;
  }
  const querys = (elm: string, index: number) =>
    <HTMLElement>document.querySelectorAll(elm)[index];

  const child = (configElement: childElement) => {
    const children = document.createElement(configElement.Element);
    children.className = configElement.Class;
    children.textContent = configElement.Content ? configElement.Content : "";

    if (!configElement.Parent) e.appendChild(children);
    else
      querys(configElement.Parent, configElement.Index).appendChild(children);

    return { child };
  };

  return { child };
};
