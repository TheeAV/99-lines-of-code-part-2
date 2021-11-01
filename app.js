button.addEventListener("click", sing)
let friends = ["Alex", "Tanner", "Laura", "Ricky", "Royce"];

function sing() {
    for (let i = 0; i < friends.length; i++) {
        let div = document.createElement("div");
        div.className = ("friend");
        document.body.appendChild(div);
        let fh3 = document.createElement("h3");
        fh3.textContent = friends[i];
        document.body.appendChild(fh3);
        lyrics(friends[i], fh3);
    }
}

function lyrics(friends, div) {
    for (let j = 99; j > 0; j--) {
        let p = document.createElement("p");
        div.appendChild(p);
        let s = "s";
        let lines = j-1 + " lines";
        if (j === 1) {
            s = '';
            lines = "no more lines";
        } else if (j === 2) {
            lines = " 1 more line";
        }
        let text = j + " line" + s + " of code in the file, " + j + " line" + s + " of code, " + friends + " strikes one out, clears it all out, " + lines + " of code in the file";
        p.textContent = text;
    } 
    
}