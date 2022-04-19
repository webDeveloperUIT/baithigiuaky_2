var product = JSON.parse(window.localStorage.getItem("CVtDetail"));
console.log(CV);
document.body.innerHTML = `
      
      <div class="CV-info">
        <h1 class="title">${product.TenCV}</h1>
        <h2 class="Nguoiphutrach">Người phụ trách: ${CV.Nguoiphutrach}</h2>
        <p class="Noinhanhang"> Nơi nhận hàng: ${CV.Noinhan}</p>
        <p class="Noigiaohang"> Nơi giao hàng: ${CV.Noigiaohang}</p>
        <p class="Ngaybatdau"> Ngày bắt đầu: ${CV.Ngaybatdau}</p>
        <p class="Ngayketthuc"> Ngày kết thúc: ${CV.Ngayketthuc}</p>
      </div>
    </div>
    <div class="desc">
      <h1>Chi tiết</h1>
      <p>${CV.Chitiet} </p>
    </div>
 
`;
