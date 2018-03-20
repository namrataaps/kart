// js for shopping cart

function add(productId) {
    add_to_cart(productId);
    display_cart();
}

function remove(productId) {
    remove_from_cart(productId);
    display_cart();
}



function display_cart(){
    let cart_table = $('#cart_table')
    cart_table.empty()
    cart_table.append($(`
        <thead> 
            <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Ammount</th>
            </tr>
        </thead>
        `));

    let cart_total = 0;

    for (let product in cart){
        cart_table.append($(`
            <tr>
                <td>${product}</td>
                <td>${catalog[product].name}</td>
                <td>
                    <i onclick="remove(${product})" class = "fa fa-minus-circle icn"></i>
                    ${cart[product]}
                    <i onclick="add(${product})" class="fa fa-plus-circle icn"></i>
                </td>
                <td>${catalog[product].price}</td>
                <td>${catalog[product].price * cart[product]}</td>
            </tr>    
    `)
        )

        cart_total += catalog[product].price * cart[product]
    }

    cart_table.append($(`
            <tr>
                <td colspan="4"><b>Total</b></td>
                <td colspan="2"><b>Rs. ${cart_total}</b></td>
            </tr>    
    `))
}


$(function(){
    get_Catalog( function(){
        fetch_cart();
        display_cart();
    })
});