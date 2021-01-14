

$(document).ready(function() {
    let html = "";
    const listCart = getListCart();
    for (let item of listCart) {
        let card = getCard(item.id, item.amount);
    }
}); 

function getListCart() {
    const dataString = localStorage.getItem(stograKey);
    const cart = dataString ? JSON.parse(dataString) : [];
    return cart;
}


function getHTMLCart(item) {
    console.log(item);
    let HTML =  '   <tr>  '  + 
    '       <th class="pl-0 border-light" scope="row">  '  + 
    '           <div class="media align-items-center"><a class="reset-anchor d-block animsition-link" href="/card/detail/' + item._id + '"><img  '  + 
    '                       src="img/' + item.image + '" width="70" /></a>  '  + 
    '               <div class="media-body ml-3"><strong class="h6"><a class="reset-anchor animsition-link"  '  + 
    '                           href="/card/detail/' + item._id + '">' + item.name + '</a></strong></div>  '  + 
    '           </div>  '  + 
    '       </th>  '  + 
    '       <td class="align-middle border-light">  '  + 
    '           <p class="mb-0 small">$ <span id="price-' + item._id + '">' + item.price + '</span></p>  '  + 
    '       </td>  '  + 
    '       <td class="align-middle border-light">  '  + 
    '           <div class="d-flex align-items-center justify-content-center px-3">'  + 
    '               <div class="quantity">  '  + 
    '                   <button class="dec-btn p-0" style="cursor: pointer;" onclick="subAmount(\'' + item._id + '\')"><i class="fa fa-caret-left"></i></button>  '  + 
    '                   <input class="form-control form-control-sm border-0 shadow-0 p-0" id="' + item._id + '" type="text" value="' + item.amount + '" />  '  + 
    '                   <button class="inc-btn p-0" style="cursor: pointer;" onclick="plusAmount(\'' + item._id + '\')"><i class="fa fa-caret-right"></i></button>  '  + 
    '               </div>  '  + 
    '           </div>  '  + 
    '       </td>  '  + 
    '       <td class="align-middle border-light">  '  + 
    '           <p class="mb-0 small">$ <span id="total-' + item._id + '">' + item.price * item.amount  + '</span></p>  '  + 
    '       </td>  '  + 
    '       <td class="align-middle border-light"><button class="reset-anchor btn-dark" style="cursor: pointer;" onclick="deleteItem(' + item._id + ')"><i  '  + 
    '                   class="fa fa-trash small text-white"></i></button></td>  '  + 
    '  </tr>  ' ; 
    return HTML;
}

function getCard(id, amount) {
    $.ajax({
        asyc: false,
        type: "GET",
        url: "./getCard",
        data: { id: id },
        cache: false,
        success: function(card) {
            card['amount'] = amount;
            console.log('Data return: ' + card.name);
            const html = getHTMLCart(card);
            $("#cart-table").append(html);
        },
        error: function() {
            console.log('Loi');
        }
    });
}