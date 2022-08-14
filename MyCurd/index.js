var BooksData =
    [{ BookName: "The Great Gatsby", Author: "Dalai Lama", Price: "2220 RS" },
    { BookName: "Go Set a Watchman", Author: "Harper Lee", Price: "1220 RS" },
    { BookName: "One Indian Girl", Author: "Chetan Bhagat", Price: "3220 RS" },
    { BookName: "Lone Fox Dancin", Author: "Lone Fox Dancing", Price: "220 RS" },
    { BookName: "Guns and Thighs", Author: "Ram Gopal Varma", Price: "2210 RS" },
    { BookName: "Moving On, Moving Forward", Author: "Venkaiah Naidu", Price: "1220 RS" },
    ]
function dataPrint(dataFound = BooksData) {
var output = ""
for (let i = 0; i < dataFound.length; i++) {
  output +=
            ` <tr>
            <td>${i + 1}</td>
            <td>${dataFound[i]["BookName"]}</td>
            <td>${dataFound[i]["Author"]}</td>
            <td>${dataFound[i]["Price"]}</td>
             <td>
             <button class="btncolor1"onclick="BookShow(${i})">View</button>

             <button class="btncolor2"onclick="EditData(${i})">Edit</button>

             <button class="btncolor3"onclick="deleteEmp(${i})">Delete</button>
            </td>
             </tr>`
    }
    document.getElementById("tableBody").innerHTML = output;
}
dataPrint()


function clearValue() {

    document.querySelector("#BookName").value = "";
    document.querySelector("#Author").value = "";
    document.querySelector("#Price").value = "";

    let icons = document.querySelectorAll(".book-icons");

    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "none";
    }
    hide();
}

// Add Data Code
function addEmp(form) {
    var addData = {
        BookName: form.BookName.value,
        Author: form.Author.value,
        Price: form.Price.value
    }
    // console.log(addData.BookName);
    if (addData.BookName === "" || addData.Author === "" || addData.Price === "") {
        alert('Fill all values');
    } else {
        BooksData.push(addData);
        dataPrint();
        clearValue();
    }
    return false;
}


function addBtn() {
    document.getElementById("addpopup").style.display = "block";
}
document.getElementById("Addd").onclick = addBtn




// bular code
function onblar(ele) {
    console.log(ele);
    if (ele.value == "") {
        document.querySelector("#" + ele.name).innerHTML = ele.name + " is required!";
        document.querySelector("." + ele.name).style.display = "none";
    }
    else if (ele.value !== "") {
        document.querySelector("#" + ele.name).innerHTML = "";
        document.querySelector("." + ele.name).style.display = "block";
    }
}






// View Data Show
function BookShow(Books) {
    document.getElementById("modal").style.display = "block"
    var book = BooksData[Books];
    document.querySelector("#bookTitle2").innerHTML = book.BookName;
    document.querySelector("#bookAuthor2").innerHTML = book.Author;
    document.querySelector("#bookPrice2").innerHTML = book.Price;
}
document.querySelector("#viewBtn").onclick = hide;


function hide() {
    document.querySelector("#addpopup").style.display = "none"
    document.querySelector("#modal").style.display = "none"
    document.querySelector("#UpdatePopup").style.display = "none"
   // document.querySelector("#modal").className = "hideModel"
}





// // Delete Data in Curd Start\\
function deleteEmp(EmpD) {
    if (confirm("Are you sure!")) {
        BooksData.splice(EmpD, 1);
    }

    if (BooksData.length === 0) {
        document.querySelector("#EmpMsg").innerHTML = "No Data Found"
    }
    dataPrint()
}


// Update and Edit Data Strat
function EditData(indexValue) {
    document.querySelector("#UpdatePopup").style.display = "block"

    document.querySelector("#updateBtn").dataset.BooksData = indexValue;



    document.querySelector("#book_name").value = BooksData[indexValue]['BookName']
    document.querySelector("#author2").value = BooksData[indexValue]['Author']
    document.querySelector("#Price2").value = BooksData[indexValue]['Price']
}



document.querySelector("#updateBtn").onclick = UpdateData

function displayNone() {
    document.querySelector('#UpdatePopup').style.display = "none";
}


function UpdateData() {
    var NewBook = BooksData[this.dataset.BooksData];

    NewBook.BookName = document.querySelector('#book_name').value;
    NewBook.Author = document.querySelector('#author2').value;
    NewBook.Price = document.querySelector('#Price2').value;

    dataPrint();
    displayNone()
    return false;
}




// Serch itmes Data
var Searchinput = document.querySelector("#serachinput")
Searchinput.onkeyup = searchName

function searchName() {
    var SearchVal = this.value;
    var dataFound = [];//empty array = search data
    var arrayLen = BooksData.length;
    for (i = 0; i < arrayLen; i++) {

        if ((BooksData[i]["BookName"].toLowerCase().indexOf(SearchVal.toLowerCase()) === 0)) {
            dataFound.push(BooksData[i]);//pushing in new array
        }
        // else not found
    }
    dataPrint(dataFound);
}



