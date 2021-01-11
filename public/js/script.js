$(document).ready(function(){
    for(let level = 1; level <= 10; level++) {
        const element = `<option class="text-capitalize" value="${level}">${level}</option>`;
        $("#level").append(element);
    }
});

$(document).ready(function() {
    const stograKey = "cartShopCard";
    const dataString = localStorage.getItem(stograKey);
    const cart = dataString ? JSON.parse(dataString) : [];

    let text = "";
    for (let item of cart) {
        text += '<tr><th class="pl-0 border-0" scope="row"><div class="media align-items-center"><a class="reset-anchor d-block animsition-link" href="/card/'
                + item.id + 'detail.html"><img src="img/' + item.image + '" width="70" /></a><div class="media-body ml-3"><strong class="h6"><a class="reset-anchor animsition-link" href="/card/'
                + item.id + '">' + item.name + '</a></strong></div></div></th><td class="align-middle border-0"><p class="mb-0 small">$ '
                + item.price + '</p></td><td class="align-middle border-0"><div class="border d-flex align-items-center justify-content-between px-3"><span class="small text-uppercase text-gray headings-font-family">Amount</span><div class="quantity"><button class="dec-btn p-0"><i class="fas fa-caret-left"></i></button><input class="form-control form-control-sm border-0 shadow-0 p-0" type="text" value="'
                + item.amount + '"/><button class="inc-btn p-0"><i class="fas fa-caret-right"></i></button></div></div></td><td class="align-middle border-0"><p class="mb-0 small">$ '
                + (item.price * item.amount) + '</p></td><td class="align-middle border-0"><a class="reset-anchor" href="#"><i class="fas fa-trash-alt small text-muted"></i></a></td></tr>';
    }
    $("#card-table").text(text);
}); 

$(document).ready(function() {
    $(".add-card").click(function() {
        
    });
});



function addCard(id, image, name, price, amount) {
    const stograKey = "cartShopCard";
    const dataString = localStorage.getItem(stograKey);
    const cart = dataString ? JSON.parse(dataString) : [];

    const item = {
        id: id,
        image: image,
        name: name,
        price: price,
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