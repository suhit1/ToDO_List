let todo_text = document.getElementById("todo_text");
let save_todo = document.getElementById("save_todo");
let list = document.getElementById("list");
let cached_data = [];

init_todo();

save_todo.addEventListener("click", addTodo); // if we will call addTodo() with this () then it will not w8 for the click event it will directly call the addTodo function

todo_text.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) addTodo();
});

function addTodo() {
  let value = todo_text.value;

  if (value === "") return; // if value is not entered and we click on save button then it will not do anything.

  let element = document.createElement("suhit");
  element.innerHTML = value;
  // element.style.display = "block";
  list.appendChild(element);

  element.addEventListener("click", function () {
    element.style.textDecoration = "line-through";
  });

  element.addEventListener("dblclick", function () {
    list.removeChild(element);
  });

  cached_data.push(value);
  save_data();

  todo_text.value = ""; // To empty the input tag after clicking on save button
}

function save_data() {
  // cached_data.push(value);
  // JSON :- kisi bhi data structure ko string me convert krne ke lie ye use hota hai and jb json se vapis ds me krna ho to
  let string_data = JSON.stringify(cached_data); // To convert data to string as localstorage only understand string
  localStorage.setItem("todo_data", string_data);
}

function init_todo() {
  let data = localStorage.getItem("todo_data");

  data = JSON.parse(data);
  if (data) cached_data = data;

  cached_data.forEach((value) => {
    let element = document.createElement("suhit");
    element.innerHTML = value;
    // element.style.display = "block";
    list.appendChild(element);

    element.addEventListener("click", function () {
      element.style.textDecoration = "line-through";
    });

    element.addEventListener("dblclick", function () {
      list.removeChild(element);
    });
  });
}
