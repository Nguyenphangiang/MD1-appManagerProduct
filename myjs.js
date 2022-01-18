let products = ["Iphone 11", "Iphone 11 pro max", "Iphone 12 pro max", "Samsung Galaxy S"];

function showAllProduct() {
    let content = "<table>" +
        "  <tr>" +
        "    <th>Product Name</th>\n" +
        "    <th></th>" +
        "    <th></th>" +
        "  </tr>";
    //duyet mang
    for (let i = 0; i < products.length; i++) {
        let temp = "<tr>" +
            "      <td>"+ products[i]+"</td>" +
            "      <td><button onclick='editProduct("+i+")'>Edit</button></td>" +
            "      <td><button onclick='deleteProduct("+i+")'>Delete</button></td>" +
            "    </tr>";
        content+=temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content;
}
showAllProduct();


function createNewProduct() {
    let name = document.getElementById("newProduct").value;
    products.push(name);
    showAllProduct();
}
function deleteProduct(index){
    products.splice(index,1);
    showAllProduct();
}
function editProduct(index){
    let newName = prompt("Enter Product",products[index])
    products[index] = newName;
    showAllProduct();
}