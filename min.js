
// make a total price 

var namee = document.getElementById("name");
var price = document.getElementById("price");
var taxes = document.getElementById("taxes");
var ads  = document.getElementById("ads");
var total = document.getElementById("total");
var carite = document.getElementById("carite");
var clear_all = document.getElementById("clear_all");



// show the total

function get_total(){
    if(price.value != " "){
        let result = +price.value - +ads.value - +taxes.value;
        total.innerHTML = "Total : " + " " + result
    }
}
// clear data 
function clear_data(){
    namee.value = '';
    price.value = '';
    ads.value = '';
    taxes.value = '';
    total.innerHTML = 'Total : 0';
}

// crite gadwal
// careat product

//    save prodect in localstorage

var data_product;

if(localStorage.newpro != null){
    data_product = JSON.parse(localStorage.newpro);

}else{data_product = []}

carite.onclick = function(){
    let newproduct ={
        namee:namee.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        total:total.innerHTML
    }
    data_product.push(newproduct);
    localStorage.setItem("newpro", JSON.stringify(data_product) );
    
    clear_data();
    read_data();
}
//  save prodect in localstorage


//  show product in the page

var gadwal = document.querySelector(".gadwal");
var upCH = document.querySelector(".upCH");


function read_data(){
    let table = '';
    for(let A = 0; A < data_product.length; A++){
        table += 
        `
        <tr>
            <td>${A +1}</td>
            <td>${data_product[A].namee}</td>
            <td>${data_product[A].price}</td>
            <td>${data_product[A].ads}</td>
            <td>${data_product[A].taxes}</td>
            <td>${data_product.innerHTML}</td>
            <td onclick="update_data(${A})"> <i class="fa-solid fa-pen-to-square"></i></td>
            <td onclick="clear_colum()"><i class="fa-solid fa-trash-can"></i></td>
        </tr>
        `
        gadwal.innerHTML = table ;
        
        if(data_product.length  > 1 ){
            clear_all.innerHTML = ` <button onclick="clear_oll()" class="btn btn-outline-primary"> Clear All </button> `

        }else{ clear_all.innerHTML = ' '}
    }
    
}
read_data()


// Delate a prodect

function clear_colum(A){
    data_product.splice(A,1);
    localStorage.newpro = JSON.stringify(data_product);
    gadwal.innerHTML =' ';
    read_data();
}
// Delate All gadwal

function clear_oll(){
    localStorage.clear();
    data_product.splice(0);
    gadwal.innerHTML =' ';
    read_data();
    
}


//  update data
function update_data(A){
    namee.value = data_product[A].namee;
    price.value = data_product[A].price;
    ads.value = data_product[A].ads;
    taxes.value = data_product[A].taxes;
    get_total();


    data_product.splice(A,1);
    localStorage.newpro = JSON.stringify(data_product);
    gadwal.innerHTML =' ';
    read_data();
}

//  //  //  //   //  //  //  //  // //  //  //  //  // // // // //  // //  // // 


//  serch  tittle
function searchh(e){
    
    let table = '';
    for(let A = 0; A < data_product.length; A++){
        if(data_product[A].namee.toLowerCase().includes(e.toLowerCase()) == true){
                table += 2
                `
                <tr>
                    <td>${A +1}</td>
                    <td>${data_product[A].namee}</td>
                    <td>${data_product[A].price}</td>
                    <td>${data_product[A].ads}</td>
                    <td>${data_product[A].taxes}</td>
                    <td>${data_product.innerHTML}</td>
                    <td onclick="update_data(${A})"> <i class="fa-solid fa-pen-to-square"></i></td>
                    <td onclick="clear_colum()"><i class="fa-solid fa-trash-can"></i></td>
                </tr>
                `
            }
        }
        gadwal.innerHTML = table ;
}


