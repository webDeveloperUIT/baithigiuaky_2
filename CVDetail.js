var cvDetail = JSON.parse(window.localStorage.getItem("cvDetail"));
document.body.innerHTML = `
      <div class="CV-info">
        <h1 class="title">${cvDetail.TenCV}</h1>
        <h2 class="Nguoiphutrach">Người phụ trách: ${cvDetail.Nguoiphutrach}</h2>
        <p class="Noinhanhang"> Nơi nhận hàng: ${cvDetail.Noinhanhang}</p>
        <p class="Noigiaohang"> Nơi giao hàng: ${cvDetail.Noigiaohang}</p>
        <p class="Ngaybatdau"> Ngày bắt đầu: ${cvDetail.Ngaybatdau}</p>
        <p class="Ngayketthuc"> Ngày kết thúc: ${cvDetail.Ngayketthuc}</p>
      </div>
    </div>
    <div class="desc">
      <h1>Chi tiết</h1>
      <p>${cvDetail.Chitiet} </p>
    </div>
 
`;
