function openNav() {
  replaceVal("nav", "d-flex", "d-block");
  iterateCollecion("nav", "li", "add");
  addVal("ContainerNav", "d-block", "NavBar");
  replaceVal("cerrar", "d-none", "d-flex");
  replaceVal("abrir", "d-block", "d-none");
}
function closeNav() {
  replaceVal("cerrar", "d-flex", "d-none");
  replaceVal("abrir", "d-none", "d-block");
  replaceVal("nav", "d-block", "d-flex");
  iterateCollecion("nav", "li", "remove");
  removeVal("ContainerNav", "d-block", "NavBar");
}

function iterateCollecion(element, childrenEle, action) {
  let item = document.getElementById(element);
  let group = item.getElementsByTagName(childrenEle);
  for (let val of group) {
    action === "remove"
      ? val.children[0].classList.remove("d-block")
      : val.children[0].classList.add("d-block");
  }
}
function replaceVal(element, from, to) {
  let item = document.getElementById(element);
  item.classList.replace(from, to);
}
function removeVal(element, from, to) {
  let item = document.getElementById(element);
  item.classList.remove(from, to);
}
function addVal(element, val1, val2) {
  let item = document.getElementById(element);
  item.classList.add(val1, val2);
}
