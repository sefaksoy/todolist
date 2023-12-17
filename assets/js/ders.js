// /**
//  * Single Element Select
//  * Tekli Element Seçme
//  */

// let btnAddTaskList = document.getElementById("btnAddTaskList");
// console.log(btnAddTaskList);
// console.log(btnAddTaskList.classList);
// console.log(btnAddTaskList.className);
// console.log(btnAddTaskList.innerText);
// console.log(btnAddTaskList.innerHTML);
// console.log(btnAddTaskList.textContent);


// // btnAddTaskList.innerText = "Buton Değişti";
// // btnAddTaskList.innerText = "<b>Buton Değişti</b>"
// // btnAddTaskList.innerHTML = "<b>Buton Değişti</b>"

// // btnAddTaskList.hidden = false;
// // btnAddTaskList.style.fontWeight = "bold";
// // btnAddTaskList.style.color = "red";

// btnAddTaskList.className += " Test";
// btnAddTaskList.classList.add("text-danger", "test2")

// let classNames = btnAddTaskList.className;
// // classNames = classNames.replace("test2", "");
// // btnAddTaskList.className = classNames;

// btnAddTaskList.classList.remove("test2");

// console.log(classNames);

// let btnAddTaskList = document.querySelector("#btnAddTaskList")
// let btnAddTaskList = document.getElementById("btnAddTaskList");

// console.log(btnAddTaskList);


/**
 * Multiple Select
 */

// let Multiple = document.getElementsByClassName("w-100");
// let Multiple = document.getElementsByTagName("h2");
// let Multiple = document.getElementsByTagName("span");
// let Multiple = document.querySelectorAll(".btn");

// console.log(Multiple);
// console.log(Multiple[0].innerText);
// console.log(Multiple[0].innerHTML);
// console.log(Multiple[0].textContent);

// let Multiple2 = document.querySelectorAll("a.btn-success");
// console.log(Multiple2);

/**
 * Element Oluşturma İşlemi
 */

// let spanElement = document.createElement("span");
// console.log(spanElement);
// spanElement.classList.add("btn", "btn-danger", "w-50");
// spanElement.innerText = " Kaydet ";
// spanElement.setAttribute("data-id", "20");
// console.log(spanElement.innerText);

// let createTaskRow = document.querySelector("#createTaskRow");
// createTaskRow.appendChild(spanElement);
// let txtTaskName = document.querySelector("#txtTaskName")


// console.log(createTaskRow.children);
// // createTaskRow.children[0].remove();
// // createTaskRow.removeChild(spanElement);

// createTaskRow.children[0].remove();


/**
 * Event Listener
 * Etkinliği Dinle
 */

// let btnAddTaskList = document.querySelector("#btnAddTaskList");
// btnAddTaskList.addEventListener("click", function(Event)
// {
//     event.preventDefault();
//     console.log("tıklandı");
//     console.log(Event);
// });

// btnAddTaskList.addEventListener("click", btnClick);


// function btnClick(event)
// {
//     event.preventDefault();
//     // console.log("tıklandı");

//     //Tıklama nerden geldi?
//     console.log(event.target);
//     let clickElementID = event.target.getAttribute("id");
//     if(clickElementID == "btnAddTaskList"){
//         // alert("btnAddTaskList tıklandı");
//     }
//     else if (clickElementID=="btnCompleted")
//     {
//         // alert(clickElementID == "btnCompleted")
//     }

// }

// btnAddTaskList.addEventListener("mouseup", function(Event)
// {
//     console.log("Buton tıklaması kaldırıldığı an.")
// });

// btnCompleted.addEventListener("mouseenter", function(Event)
// {
//     console.log("Enter.")
// });


// addEventListener("DOMContentLoaded", function(Event){
//     //Tüm sayfa yüklendiğinde çalışmaya başlıyor.


// });