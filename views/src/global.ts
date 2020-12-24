const $ = (elm: string) => {
  const e = <HTMLElement>document.querySelector(elm);
  const es = document.querySelectorAll(elm);

  interface childElement {
    Element: string;
    Class: string;
    Content?: string;
    Parent?: string;
  }
  const query = (elm: string) => <HTMLElement>document.querySelector(elm);
  
  const child = (childObj: childElement) => {
    const children = document.createElement(childObj.Element);
    children.className = childObj.Class;
    children.textContent = childObj.Content ? childObj.Content : "";

    if (!childObj.Parent) e.appendChild(children);
    else query(childObj.Parent).appendChild(children);

    return { child };
  };

  return { child };
};
