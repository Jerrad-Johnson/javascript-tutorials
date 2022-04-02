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


function testingPromise(path, callback){
    let script = document.createElement('script');
    script.src = path;
    document.head.append(script);

    script.onload = () => callback();
}

//testingPromise("./js/script.js", () => {cd(sum(5, 5))});
