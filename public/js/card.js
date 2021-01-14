
function getListCardHTML(card) {
    let html = '   <div class="col-lg-4 col-sm-6">  ' +
        '       <div class="product text-center" style="width: 80%;">  ' +
        '           <div class="mb-3 position-relative d-flex justify-content-center">  ' +
        '               <div class="badge text-white bg-danger">status</div>  ' +
        '               <a class="d-block" href="/card/detail/' + card._id + '"><img class="img-fluid w-100" src="img/' + card.image + '" alt="..."></a>  ' +
        '               <div class="product-overlay">  ' +
        '                   <ul class="mb-0 list-inline">  ' +
        '                       <li class="list-inline-item m-0 p-0"><button class="btn btn-sm btn-dark add-card"  ' +
        '                               onclick="addCardToCart(' + card._id + ')">Add to cart</button></li>  ' +
        '                   </ul>  ' +
        '               </div>  ' +
        '           </div>  ' +
        '           <h6> <a class="reset-anchor" href="/card/' + card._id + '">' + card.name + '</a></h6>  ' +
        '           <p class="small text-white">$ ' + card.price + '</p>  ' +
        '       </div>  ' +
        '  </div>  ';
    return html;

}

$(document).on("click", ".page-item", function () {
    const indexPage = $(this).text();
    console.log(indexPage);
    const formData = {
        keySearch: $("#input-search").val(),
        cardType: $("#cardType").val(),
        attribute: $("#attribute").val(),
        type: $("#type").val(),
        level: $("#level").val(),
        numPage: indexPage,
        sortType: $('#sort-type').val(),
    };

    $(".page-item").removeClass("active");
    $(this).addClass("active");
    $.ajax({
        asyc: false,
        type: "POST",
        url: "/card/page",
        data: formData,
        cache: false,
        success: function (res) {
            $("#listCard").empty();
            console.log(res);
            for (let card of res) {
                const html = getListCardHTML(card);
                $("#listCard").append(html);
            }
        },
        error: function () {
            console.log('Loi');
        }
    });
});

// Search
$(document).on("click", "#btn-search", function () {
    $.ajax({
        asyc: false,
        type: "POST",
        url: "/card/search",
        data: { keySearch: $("#input-search").val() },
        cache: false,
        success: function (res) {
            $("#page1").addClass("active");
            $(".pre").remove();
            const numPage = Math.ceil(res.length / 12);
            for (let indexPage = 2; indexPage <= numPage; indexPage++) {
                var html = '<li class="page-item pre"><button class="page-link">' + indexPage + '</button></li>';
                $("#pagination").append(html);
            };
                
            const val = $('#sort-type').val();
            if (val === 'sort-alphabet') {
                res.sort(alphabet);
            } else if (val === 'sort-price-in') {
                res.sort(priceIn);
            } else if (val === 'sort-price-de') {
                res.sort(priceDe);
            }

            $("#listCard").empty();
            res = res.splice(0, 12);
            console.log(res);
            for (let card of res) {
                const html = getListCardHTML(card);
                $("#listCard").append(html);
            }
        },
        error: function () {
            console.log('Loi');
        }
    });
});

// Filter
$(document).on("click", "#filter", function () {
    const formData = {
        cardType: $("#cardType").val(),
        attribute: $("#attribute").val(),
        type: $("#type").val(),
        level: $("#level").val()
    };

    $.ajax({
        asyc: false,
        type: "POST",
        url: "/card/filter",
        data: formData,
        cache: false,
        success: function (res) {
            $("#page1").addClass("active");
            $(".pre").remove();
            const numPage = Math.ceil(res.length / 12);
            for (let indexPage = 2; indexPage <= numPage; indexPage++) {
                var html = '<li class="page-item pre"><button class="page-link">' + indexPage + '</button></li>';
                $("#pagination").append(html);
            };
            const val = $('#sort-type').val();
            if (val === 'sort-alphabet') {
                res.sort(alphabet);
            } else if (val === 'sort-price-in') {
                res.sort(priceIn);
            } else if (val === 'sort-price-de') {
                res.sort(priceDe);
            }

            $("#listCard").empty();
            res = res.splice(0, 12);
            console.log(res);
            for (let card of res) {
                const html = getListCardHTML(card);
                $("#listCard").append(html);
            }
        },
        error: function () {
            console.log('Loi');
        }
    });
});

$(document).on('change', '#sort-type', function () {
    const val = $(this).val();
    console.log(val);

    $.ajax({
        asyc: false,
        type: "GET",
        url: "/card/listCard",
        cache: false,
        success: function (res) {
            $("#page1").addClass("active");
            $(".pre").remove();
            const numPage = Math.ceil(res.length / 12);
            for (let indexPage = 2; indexPage <= numPage; indexPage++) {
                var html = '<li class="page-item pre"><button class="page-link">' + indexPage + '</button></li>';
                $("#pagination").append(html);
            };

            $("#listCard").empty();
            if (val === 'sort-alphabet') {
                res.sort(alphabet);
            } else if (val === 'sort-price-in') {
                res.sort(priceIn);
            } else if (val === 'sort-price-de') {
                res.sort(priceDe);
            }
            res = res.splice(0, 12);
            console.log(res);
            for (let card of res) {
                const html = getListCardHTML(card);
                $("#listCard").append(html);
            }
        },
        error: function () {
            console.log('Loi');
        }
    });
});