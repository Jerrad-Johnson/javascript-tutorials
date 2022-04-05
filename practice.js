let cc = console.log;

var cd = (val) => {
    let elem = document.querySelector("#jshere");
    elem.innerHTML = val;
}

function pbr(){
    let x = 5;
    let y = x;
    y = 2;
    cd(x);
}
//pbr();


function sum(a, b){
    let result = +a + +b;
    cd(result);
}

function sumReturn(a, b){
    return +a + +b;
}


/*function testingCB(path, callback) {
    let script = document.createElement('script');
    script.src = path;
    document.head.append(script);

    cc(callback);
    script.onload = () => callback();
    script.onerror = () => { let x = new Error("Script loading failed."); cc(x); }

    //testingCB(path, () => {} );
}
testingCB("./js/script.js", () => { cd(sum(5, 5)) });*/
//TODO Doesn't work without cd in the function call. Ask Blue.


/*let sumPromise = new Promise((resolve, reject) => {
    sum(5, 5);
    //resolve("Done");
    reject(new Error("Bad Programmer!"));
});*/

/*sumPromise.then(cc("Post hoc, ergo propter hoc."));
sumPromise.then(result => cc(result));
sumPromise.catch(x => cc(x));*/

/*let sumPromise2 = new Promise((resolve, reject) => {
  if ((sumReturn(3, 5) == 8) {
      resolve("Success! Value 8.");
  } else {
      reject(new Error("Baddest Programmer."));
  }
}).then(result => cc(result), error => cc(error)).finally(cc("Good try, either way."));*/

// TODO Return to this

// Chained then statements after single async promise.
/*
new Promise((resolve, reject) => {
   resolve(1);
}).then((result) => {
    return (result * 2);
}).then((result) => {
    return result * 2;
}).then((result) => {
    cc(result * 2);
});*/

// Chained async promises
/*new Promise((resolve, reject) => {
    resolve(1);
}).then((result) => {
    new Promise((resolve, reject) => {
        resolve(result * 2);
    }).then((result) => {
        cc(result);
    })
});*/


/*new Promise((resolve, reject) => {
   resolve(5);
})  .then(sum => sum + 5)
    .then(sum => sum + 5)
    .then(sum => cc(sum + 5));*/


/*new Promise((resolve, reject) => {
    if (true) {
        throw new Error("Stuff");
    }
}).catch(error => cc(error.message));*/

/*
Promise.all([
    new Promise(resolve => CBHere),
    new Promise(resolve => ),
    new Promise(resolve => ),
]).then(cc(resolve));*/


/*
async function f() {
    let delayTest = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Duh"), 1000);
    });

    let result = await delayTest; // wait until the promise resolves (*)
    alert(result); // "done!"
}

f();*/
