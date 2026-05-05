let phonebook = document.getElementById("phonebook");


//JavaScript continues executing other code while fetch() is asynchronous working in background. It returns a Promise.
//.then() handles the result when Promise is resolved (success)
//.catch() handles the error when Promise is rejected (failure)
// Fetch API call

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data); 
    for (let i = 0; i < 5; i++) {
        phonebook.innerHTML += `
            <tr>
                <td>${data[i].name}</td>
                <td>${data[i].phone}</td>
            </tr>
        `;
    }
})
.catch(function(error) {
    console.log("Error:", error);
});

//Callback Function

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Goodbye!");
}

greet("User", bye);


//Callback Hell

setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);

//Promise

let promise = new Promise((resolve, reject) => {
    resolve("Step 1 done");
});
promise
.then((msg) => {
    console.log(msg);
    return "Step 2 done";
})
.then((msg) => {
    console.log(msg);
    return "Step 3 done";
})
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});