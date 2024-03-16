var sanpham = [
    {
        id: 1,
        name: "ÁO THUN TRẮNG IN HOA LY",
        price: "250.000",
        image: "https://elise.vn/media/catalog/product/cache/b35d2052d2e1ce5f6cbaec523842ed65/f/s/fs2312076tskcwh11.jpg"
    },
    {
        id: 2,
        name: "ÁO XƯỚC XANH CỐM DÂY XÍCH VAI LỆCH",
        price: "550.000",
        image: "https://elise.vn/media/catalog/product/cache/b35d2052d2e1ce5f6cbaec523842ed65/f/f/ff2309052tswoge1.jpg"
    },
    {
        id: 3,
        name: "QUẦN SOOC SỢI XANH LÁ PHỦ VẠT",
        price: "1.098.000",
        image: "https://elise.vn/media/catalog/product/cache/b35d2052d2e1ce5f6cbaec523842ed65/f/s/fs2312077bswoge14.jpg"
    }
];

function Add() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var image = document.getElementById("image").value;
    var price = document.getElementById("price").value;

    sanpham.push({ id: id, name: name, image: image, price: price });
    Reset();
    Show();
}

function Show() {
    var tableBody = document.getElementById("sanpham");
    tableBody.innerHTML = "";

    for (var i = 0; i < sanpham.length; i++) {
        var row = "<tr><td>" + sanpham[i].id + "</td><td>" + sanpham[i].name + "</td><td><img src='" + sanpham[i].image + "' alt='Product Image' style='width:100px;height:auto;'></td><td>" + sanpham[i].price + "</td><td><button onclick='Edit(" + i + ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" + i + ")' class='btn btn-danger'>Delete</button></td></tr>";
        tableBody.innerHTML += row;
    }
}

function Reset() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("image").value = "";
    document.getElementById("price").value = "";
}

function Edit(index) {
    var product = sanpham[index];
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("image").value = product.image;
    document.getElementById("price").value = product.price;

    sanpham.splice(index, 1);
    Show();
}

function Delete(index) {
    sanpham.splice(index, 1);
    Show();
}

