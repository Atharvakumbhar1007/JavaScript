// Import
import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";

// Elements
const form = document.getElementById("regForm");
const submitBtn = document.getElementById("submitBtn");

const fields = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    country: document.getElementById("country"),
    city: document.getElementById("city"),
    countryCode: document.getElementById("countryCode"),
    phone: document.getElementById("phone"),
    dob: document.getElementById("dob"),
    ageYears: document.getElementById("ageYears"),
    ageMonths: document.getElementById("ageMonths"),
    appointment: document.getElementById("appointment"),
};

const icons = {
    firstName: document.getElementById("icon-firstName"),
    lastName: document.getElementById("icon-lastName"),
    email: document.getElementById("icon-email"),
    username: document.getElementById("icon-username"),
    password: document.getElementById("icon-password"),
    country: document.getElementById("icon-country"),
    city: document.getElementById("icon-city"),
    phone: document.getElementById("icon-phone"),
    dob: document.getElementById("icon-dob"),
    appointment: document.getElementById("icon-appointment"),
};

const errors = {
    firstName: document.getElementById("err-firstName"),
    lastName: document.getElementById("err-lastName"),
    email: document.getElementById("err-email"),
    username: document.getElementById("err-username"),
    password: document.getElementById("err-password"),
    country: document.getElementById("err-country"),
    city: document.getElementById("err-city"),
    phone: document.getElementById("err-phone"),
    dob: document.getElementById("err-dob"),
    appointment: document.getElementById("err-appointment"),
};

// Eye toggle
const togglePasswordBtn = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

// City data & country->code
const CITY_DATA = {
    India: ["Mumbai", "Delhi", "Bengaluru", "Pune", "Ahmedabad"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston", "Seattle"],
    UK: ["London", "Manchester", "Birmingham", "Leeds"],
    UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    China: ["Beijing", "Wuhan", "Shanghai", "Shenzhen"],
};
const COUNTRY_TO_CODE = {
    India: "+91",
    USA: "+1",
    UK: "+44",
    UAE: "+971",
    Australia: "+61",
    China: "+86",
};