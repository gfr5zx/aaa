// โหลดจำนวนสินค้าเมื่อเปิดหน้าเว็บ
let cartCount = localStorage.getItem("cartCount") || 0;

updateCart();

// ฟังก์ชันเพิ่มสินค้า
function addToCart() {

    cartCount++;
    localStorage.setItem("cartCount", cartCount);

    updateCart();

    alert("เพิ่มสินค้าลงรถเข็นแล้ว");
}

// อัปเดตตัวเลขที่รถเข็น
function updateCart() {

    const cartElements = document.querySelectorAll("#cartCount");

    cartElements.forEach(item => {
        item.innerText = cartCount;
    });
}
window.onload = function(){

    updateCart();

    let cartItem = document.getElementById("cartItem");

    if(cartItem){
        cartItem.innerText = cartCount;
    }

}