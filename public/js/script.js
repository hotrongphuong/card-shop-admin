const stograKey = "cartShopCart";

$(document).ready(function(){
    for(let level = 1; level <= 10; level++) {
        const element = `<option class="text-capitalize" value="${level}">${level}</option>`;
        $("#level").append(element);
    }
});


function addCardToCart(id, amount) {
    const dataString = localStorage.getItem(stograKey);
    const cart = dataString ? JSON.parse(dataString) : [];

    const item = {
        id: id,
        amount: amount || 1,
    };
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].id == item.id) {
            cart[index].amount += item.amount;
            localStorage.setItem(stograKey, JSON.stringify(cart));
            return;
        }
    }
    cart.push(item);
    localStorage.setItem(stograKey, JSON.stringify(cart));
}

function plusAmount(id) {
    let amountNow = $("#" + id).attr("value"); 
    $("#" + id).attr("value", ++amountNow);
    const price = $("#price-" + id).text();
    console.log(price);
    $("#total-" + id).text(amountNow * price);
}

function subAmount(id) {
    var amountNow = $("#" + id).attr("value");
    if (amountNow > 1) {
        $("#" + id).attr("value", --amountNow);
    }
    const price = $("#price-" + id).text();
    $("#total-" + id).text(amountNow * price);
}

// Phan trang san pham

$(document).on("click", ".page", function() {
    $.ajax()
});

