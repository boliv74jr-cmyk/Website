let usernames = JSON.parse(localStorage.getItem("usernames")) || ["boliv74"];
let passwords = JSON.parse(localStorage.getItem("passwords")) || ["Turtle33"];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addButtons = document.querySelectorAll(".addtocart");
const usernameinput = document.getElementById("usernamedata");
const passwordinput = document.getElementById("passworddata");
const loginbutton = document.getElementById("enter");
const Cusername = document.getElementById("usernamecreate");
const Cpassword = document.getElementById("passwordcreate");
const createbutton = document.getElementById("createa");
const rt = document.getElementById("returnhome");
const message = document.getElementById("message");
const logbait = document.getElementById("logbait");
const crepe = document.getElementById("crepe");
const logout = document.getElementById("logout");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const numcartd = document.getElementById("cartcount")
const cartbtn = document.getElementById("cart");
const Lumber = document.getElementById("Lumber")
const Dolphininfo = document.getElementById("Dolphininfo")
const Belugainfo = document.getElementById("Belugainfo")

function login() {
  let user = usernameinput.value;
  let pass = passwordinput.value;
  if (usernames.includes(user)) {
    const index = usernames.indexOf(user);
    if (passwords[index] === pass) {
      window.location.href = "welcome.html";
    } else {
      message.textContent = "Wrong password";
    }
  } else {
    message.textContent = "This username doesn't exist";
  }
}

function createaccount() {
  const newuser = Cusername.value.trim();
  const newpass = Cpassword.value.trim();
  if (!newuser || !newpass) {
    message.textContent = "Please enter both username and password";
    return;
  }
  if (usernames.includes(newuser)) {
    message.textContent = "This username already exists";
    return;
  }
  usernames.push(newuser);
  passwords.push(newpass);
  localStorage.setItem("usernames", JSON.stringify(usernames));
  localStorage.setItem("passwords", JSON.stringify(passwords));
  message.textContent = "Account created";
  setTimeout(() => {
    window.location.href = "Login.html";
  }, 1000);
}

function returnhome() {
  window.location.href = "home.html";
}

function gocreate(){
  window.location.href = "Create.html";
}

function gologin(){
   window.location.href = "Login.html";
}

function logou(){
   localStorage.removeItem("cart");
   window.location.href = "home.html";
}

function menuu(){
   window.location.href = "menu.html";
}

function aboot(){
   window.location.href = "welcome.html";
}

function cartpage (){
   window.location.href = "cart.html";
}

function Luumber(){
   window.location.href = "home.html";
}

function di(){
   window.location.href = "dolphin.html";
}

function bi()
   window.location.href = "Beluga.html";
}

function updateCartCount() {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cartcount").textContent = count;
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price: Number(price), quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    addToCart(name, price);
  });
});

if (Dolphininfo) Dolphininfo.addEventListener("click", di);
if (Lumber) Lumber.addEventListener("click", Luumber);
if (cartbtn) cartbtn.addEventListener("click", cartpage);   
if (about) about.addEventListener("click", aboot);
if (menu) menu.addEventListener("click", menuu);
if (loginbutton) loginbutton.addEventListener("click", login);
if (createbutton) createbutton.addEventListener("click", createaccount);
if (rt) rt.addEventListener("click", returnhome);
if (crepe) crepe.addEventListener("click", gocreate);
if (logbait) logbait.addEventListener("click", gologin);
if (logout) logout.addEventListener("click", logou);
if (Belugainfo) Belugainfo.addEventListener("click", bi);







