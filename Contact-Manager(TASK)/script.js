class Contact {
    constructor(name, email, phone, city) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
}

let contacts = [];
let editIndex = -1;

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const cityInput = document.querySelector("#city");
const searchInput = document.querySelector("#searchInput");

const addbtn = document.querySelector("#addbtn");
const updatebtn = document.querySelector("#updatebtn");
const cancelbtn = document.querySelector("#cancelbtn");

const contactList = document.querySelector("#contactList");
const count = document.querySelector("#count");
const formTitle = document.querySelector("#formTitle");


function validateForm() {
    let valid = true;

    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    phoneInput.classList.remove("error");

    if (nameInput.value.trim() === "") {
        nameInput.classList.add("error");
        valid = false;
    }
    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        emailInput.classList.add("error");
        valid = false;
    }
    if (phoneInput.value.trim() === "") {
        phoneInput.classList.add("error");
        valid = false;
    }

    return valid;
}
function addContact() {
    if (!validateForm()) return;

    let newContact = new Contact(
        nameInput.value,
        emailInput.value,
        phoneInput.value,
        cityInput.value
    );

    contacts.push(newContact);
    displayContacts();
    clearForm();
}
function displayContacts(list = contacts) {
    contactList.innerHTML = "";

    if (list.length === 0) {
        contactList.innerHTML = "<p>No contacts yet</p>";
        count.innerText = 0;
        return;
    }

    list.forEach((c, index) => {
        let box = document.createElement("div");
        box.className = "contact-box";
        box.innerHTML = `
            <strong>${c.name}</strong><br>
            Email: ${c.email}<br>
            Phone: ${c.phone}<br>
            City: ${c.city}<br><br>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;

        if (index === editIndex) {
            box.classList.add("edit-highlight");
        }

        contactList.appendChild(box);
    });

    count.innerText = list.length;
}
function editContact(index) {
    editIndex = index;
    let c = contacts[index];

    nameInput.value = c.name;
    emailInput.value = c.email;
    phoneInput.value = c.phone;
    cityInput.value = c.city;

    formTitle.innerText = "Edit Contact";
    addbtn.style.display = "none";
    updatebtn.style.display = "inline-block";
    cancelbtn.style.display = "inline-block";

    displayContacts();
}
function updateContact() {
    if (!validateForm()) return;

    contacts[editIndex].name = nameInput.value;
    contacts[editIndex].email = emailInput.value;
    contacts[editIndex].phone = phoneInput.value;
    contacts[editIndex].city = cityInput.value;

    clearForm();
    displayContacts();
}
function deleteContact(index) {
    if (confirm("Are you sure you want to delete this contact?")) {
        contacts.splice(index, 1);
        displayContacts();
    }
}
function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cityInput.value = "";

    editIndex = -1;
    formTitle.innerText = "Add Contact";
    addbtn.style.display = "inline-block";
    updatebtn.style.display = "none";
    cancelbtn.style.display = "none";
}
function searchContacts() {
    let text = searchInput.value.toLowerCase();

    let filtered = contacts.filter(c =>
        c.name.toLowerCase().includes(text) ||
        c.email.toLowerCase().includes(text) ||
        c.phone.toLowerCase().includes(text)
    );

    displayContacts(filtered);
}
addbtn.addEventListener("click", addContact);
updatebtn.addEventListener("click", updateContact);
cancelbtn.addEventListener("click", clearForm);
searchInput.addEventListener("keyup", searchContacts);