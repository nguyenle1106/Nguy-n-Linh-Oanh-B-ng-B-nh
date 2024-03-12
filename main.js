var ao = [
  {
      id:1,
      name: "ÁO THUN TRẮNG IN HOA LY",
      code: "TC102",
      price: "250.000",
      image: "https://elise.vn/media/catalog/product/cache/b35d2052d2e1ce5f6cbaec523842ed65/f/s/fs2312076tskcwh11.jpg"
  },
];
var quan = [
  {
      id:1,
      name: "QUẦN DÀI KEM CƠI TÚI ĐÍNH LOGO",
      code: "EC202",
      price: "190.000",
      image: "https://elise.vn/media/catalog/product/cache/b35d2052d2e1ce5f6cbaec523842ed65/f/s/fs2312090bpwocr.jpg"
  },
  
];
var chanvay = [
  {
      id:1,
      name: "CHÂN VÁY ĐŨI TRẮNG NHÚN LY",
      code: "EC201",
      price: "450.000",
      image: "https://elise.vn/media/catalog/product/cache/f677d7e3a5087b6a18a5b1f320b78594/f/s/fs2303061bkwowh1.jpg"
  },
]

function listProducts(){
  for(let i = 0; i <= ao.length-1; i++){
      var demo = '<div class = "col-3">';
      demo += '<div class="card" style="width: 18rem; ">';
      demo += '<img src="'+ao[i].image +'" class = "card-img-top" style="height:400px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+ao[i].name+'</h5>';
      demo += '<p class="card-text">'+ao[i].price+'</p>';
      demo += '<a href="#" class="btn btn-success" onclick="oder()">Đặt mua</a>';
      
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("ao").innerHTML += demo;
  }
  
  for(let i = 0; i <= quan.length-1; i++){
      var demo = '<div class = "col-3">';   
      demo += '<div class="card" style="width: 18rem; ">';
      demo += '<img src="'+quan[i].image +'" class = "card-img-top" style="height:400px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+quan[i].name+'</h5>';
      demo += '<p class="card-text">'+quan[i].price+'</p>';
      demo += '<a href="#" class="btn btn-success" onclick="oder()">Đặt mua</a>';
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("quan").innerHTML += demo;
  }

  for(let i = 0; i <= chanvay.length-1; i++){
      var demo = '<div class = "col-3">';   
      demo += '<div class="card" style="width: 18rem; ">';
      demo += '<img src="'+chanvay[i].image +'" class = "card-img-top" style="height:400px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+chanvay[i].name+'</h5>';
      demo += '<p class="card-text">'+chanvay[i].price+'</p>';
      demo += '<a href="#" class="btn btn-success" onclick="oder()">Đặt mua</a>';
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("chanvay").innerHTML += demo;
  }
}




function _add(category) {
  var name, price, image;
  if (category == 'ao') {
    name = document.getElementById('ao_name').value;
        price = document.getElementById('ao_price').value;
        image = document.getElementById('ao_image').value;
        if (name.trim() !== '' && price.trim() !== '' && image.trim() !== '') {
            ao.push({ id: ao.length + 1, name: name, code: "", price: price, image: image });
            addProductToDisplay(ao[ao.length - 1], 'ao');
        } else {
            alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
        }
    } else if (category == 'quan') {
        name = document.getElementById('quan_name').value;
        price = document.getElementById('quan_price').value;
        image = document.getElementById('quan_image').value;
        if (name.trim() !== '' && price.trim() !== '' && image.trim() !== '') {
            quan.push({ id: quan.length + 1, name: name, code: "", price: price, image: image });
            addProductToDisplay(quan[quan.length - 1], 'quan');
        } else {
            alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
        }
    }else if (category == 'chanvay') {
        name = document.getElementById('chanvay_name').value;
        price = document.getElementById('chanvay_price').value;
        image = document.getElementById('chanvay_image').value;
        if (name.trim() !== '' && price.trim() !== '' && image.trim() !== '') {
            chanvay.push({ id: chanvay.length + 1, name: name, code: "", price: price, image: image });
            addProductToDisplay(chanvay[chanvay.length - 1], 'chanvay');
        } else {
            alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
        }
    }
}

function addProductToDisplay(product, category) {
    var demo = '<div class="col-3">';
    demo += '<div class="card" style="width: 18rem; ">';
    demo += '<img src="' + product.image + '" class="card-img-top" style="height:400px;">';
    demo += '<div class="card-body">';
    demo += '<h5 class="card-title">' + product.name + '</h5>';
    demo += '<p class="card-text">' + product.price + '</p>';
    demo += '<a href="#" class="btn btn-success" onclick="oder()">Đặt mua</a>';
    demo += '<a href="#" class="btn btn-primary" onclick="editProduct(\'' + category + '\', ' + product.id + ')">Sửa</a>';
    demo += '<a href="#" class="btn btn-danger" onclick="deleteProduct(\'' + category + '\', ' + product.id + ')">Xóa</a>';
    demo += '</div>';
    demo += '</div>';
    demo += '</div>';
    var categoryElement = document.getElementById(category);
    categoryElement.innerHTML += demo;
}

function editProduct(category, productId) {
    var productArray = window[category]; 
    var product = productArray.find(p => p.id === productId); 

    document.getElementById(category + '_name').value = product.name;
    document.getElementById(category + '_price').value = product.price;
    document.getElementById(category + '_image').value = product.image;

    var button = document.querySelector('#' + category + ' button');
    button.innerText = 'Cập nhật';
    button.setAttribute('onclick', 'updateProduct("' + category + '", ' + productId + ')');
}


function updateProduct(category, productId) {
    var productArray = window[category]; 
    var product = productArray.find(p => p.id === productId); 

    product.name = document.getElementById(category + '_name').value;
    product.price = document.getElementById(category + '_price').value;
    product.image = document.getElementById(category + '_image').value;


    refreshProductDisplay(category);

    resetFormAndButton(category);
}


function refreshProductDisplay(category) {
    var categoryElement = document.getElementById(category);
    categoryElement.innerHTML = ''; 
    window[category].forEach(product => {
        addProductToDisplay(product, category); 
    });
}


function resetFormAndButton(category) {
    document.getElementById(category + '_name').value = '';
    document.getElementById(category + '_price').value = '';
    document.getElementById(category + '_image').value = '';
    var button = document.querySelector('#' + category + ' button');
    button.innerText = 'Add';
    button.setAttribute('onclick', '_add("' + category + '")');
}


function deleteProduct(category, productId) {

    window[category] = window[category].filter(product => product.id !== productId);
    
    refreshProductDisplay(category);
}