class Product {
    constructor(name,price,quantily,color,level){
        this.name = name;
        this.price = price;
        this.quantily=quantily;
        this.color= color;
        this.level=level;
    }
}

let products =[
    new Product("HunterBow",120,5,"brown",3),
    new Product("WizardScepter",500,5,"blue",15),
    new Product("FireSword",490,2,"red",12)
]

function showAllWeapont() {
    let content = "<table>" +
        "  <tr>" +
        "    <th>Weapon Name</th>\n" +
        "    <th>Price</th>" +
        "    <th>Quantily</th>" +
        "    <th>Color</th>" +
        "    <th>Level</th>" +
        "    <th></th>" +
        "    <th></th>" +
        "  </tr>";
    //duyet mang
    for (let i = 0; i < products.length; i++) {
        let temp = "<tr>" +
            "      <td>"+ products[i].name+"</td>" +
            "      <td>"+ products[i].price+"</td>" +
            "      <td>"+ products[i].quantily+"</td>" +
            "      <td>"+ products[i].color+"</td>" +
            "      <td>"+ products[i].level+"</td>" +
            "      <td><button onclick='editWeapon("+i+")'>Edit</button></td>" +
            "      <td><button onclick='deleteWeapon("+i+")'>Delete</button></td>" +
            "    </tr>";
        content+=temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content;
}
showAllWeapont();


function createNewWeapon() {
    let name = document.getElementById("newWeapon").value;
    let price= document.getElementById("newPrice").value;
    let quantily= document.getElementById("newQuantily").value;
    let color= document.getElementById("newColor").value;
    let level= document.getElementById("newLevel").value;
    let newWP= new Product(name,price,quantily,color,level);
    products.push(newWP);
    showAllWeapont();
}
function deleteWeapon(index){
    products.splice(index,1);
    showAllWeapont();
}
function editWeapon(index){
    let newName = prompt("Enter Weapon",products[index]["name"])
    let newPrice= prompt("Enter Price",products[index]["price"])
    let newQuantily = prompt("Enter Quantily",products[index]["quantily"])
    let newColor = prompt("Enter Color",products[index]["color"])
    let newLevel = prompt("Enter Level",products[index]["level"])
    products[index]["name"] = newName;
    products[index]["price"] = newPrice;
    products[index]["quantily"] = newQuantily;
    products[index]["color"] = newColor;
    products[index]["level"] = newLevel;
    showAllWeapont();
}