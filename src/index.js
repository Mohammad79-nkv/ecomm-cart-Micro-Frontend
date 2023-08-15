const mount = (el) => {
  el.innerHTML = "this is your Carttttttttttttttttttttttttt";
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#div-cart");
  mount(el);
}

export { mount };
