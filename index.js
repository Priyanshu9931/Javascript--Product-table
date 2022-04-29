var row = 1;

function myFunction(){
    var i = document.getElementById('Product ID').value;
    var n = document.getElementById('Product Name').value;
    var p = document.getElementById('Product Price').value;
    
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const text1 = document.createTextNode(i);
    td1.appendChild(text1); 
    row.appendChild(td1);
    document.getElementById("display").appendChild(row);
    
    const td2 = document.createElement("td");
    const text2 = document.createTextNode(n);
    td2.appendChild(text2); 
    row.appendChild(td2);
    document.getElementById("display").appendChild(row);

    const td3 = document.createElement("td");
    const text3 = document.createTextNode(p);
    td3.appendChild(text3); 
    row.appendChild(td3);
    document.getElementById("display").appendChild(row);

    
    if (!i || !n || !p) {
        alert("Please fill all the details");
        return;
    }


}
