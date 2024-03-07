const chickens = [Brahma, leghorn, Rhode-Island-Red];

let text = ""
for (let x of chickens) {
    text += x;
}

document.getElementById("id1").innerHTML = text;
