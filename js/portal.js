// js for shopping portal (catlaog)


// display the catalog on HTML page
function display_catalog(){
    let catalog_container = $('#catalog_container')
    console.log('works')
    catalog_container.empty();
    for(let product of catalog){
        let cart_qty = getQtyinCart(product.id);
        catalog_container.append(
            $(`<div class="col-4 p-3">
                <img class="img-thumbnail"
                 src=http://via.placeholder.com/300x300/${product.color}?text=${product.name}>
                 <div class="product-data">
                 <div> Rs. ${product.price}</div>
                 <button class="btn btn-outline-primary" onclick="add_to_cart(${product.id})">Add to Cart</button>
                 <span>${cart_qty} in Cart</span>
                </div>
               </div>`)
        )
    }
}

// function add(productid){
//     add_to_cart(productid);
//     display_catalog();
// }

$(function(){
    get_Catalog( function(){
        fetch_cart();
        display_catalog();
    })
});