var form = document.querySelector(".form");
  var container = document.querySelector(".container");
  var lishCV = [];
  var showitem = {};
  const addCV = () => {
    var formData = new FormData(form);
    var info = {
      TenCV: formData.get("TenCV"),
      Nguoiphutrach: formData.get("Nguoiphutrach"),
      Noinhan: formData.get("Noinhanhang"),
      Noinhanhang: formData.get("Noinhanhang"),
      Ngaybatddau: formData.get("Ngaybatdau"),
      Chitiet: formData.get("Chitiet"),
    };
    lishCV.push(info);
    console.log(lishCV);
    var list = lishCV.map((item, index) => {
      return `
      <li class="CV-item">
            
            <h1 class="CV-TenCV" ${CV.TenCV} class="desc-link" href="./productItem.html" onclick="getItem(${index})"> </h1>
            <h2 class="CV-Nguoiphutrach"> Người phụ trách:${item.Nguoiphutrach}</h2>
            <p class="CV-Noinhanhang"> Nơi nhận hàng:${item.Noinhanhang}</p>
            <p class="CV-Ngaybatdau"> Ngày bắt đầu:${item.Ngaybatdau}</p>
          </li>
          `;
    });
    container.innerHTML = list.join("");
  };
  const getItem = (index) => {
    CV = lishCV[index];
    window.localStorage.setItem("productDetail", JSON.stringify(CV));
  };
  // console.log(lishCV);
  const resetForm = () => {
    form.reset();
  };
