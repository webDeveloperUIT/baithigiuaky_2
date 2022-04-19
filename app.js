var form = document.querySelector(".form");
var container = document.querySelector(".container");
var listCV = [];
var showitem = {};
const addCV = () => {
  var formData = new FormData(form);
  var testId = document.querySelector("#TenCV").value;
  console.log(testId);
  var info = {
    TenCV: formData.get("TenCV"),
    Nguoiphutrach: formData.get("Nguoiphutrach"),
    Noigiaohang: formData.get("Noigiaohang"),
    Noinhanhang: formData.get("Noinhanhang"),
    Ngaybatdau: formData.get("Ngaybatdau"),
    Ngayketthuc: formData.get("Ngayketthuc"),
    Chitiet: formData.get("Chitiet"),
  };
  listCV.push(info);
  console.log(listCV);
  var list = listCV.map((item, index) => {
    console.log(item.Ngayketthuc);
    return `
      <li class="CV-item">
            
            <a class="CV-TenCV"  class="desc-link" href="./CVItem.html" onclick="getItem(${index})"> ${item.TenCV}</a>
            <h2 class="CV-Nguoiphutrach"> Người phụ trách:${item.Nguoiphutrach}</h2>
            <p class="CV-Noinhanhang"> Nơi nhận hàng: ${item.Noinhanhang}</p>
            <p class="CV-Ngaybatdau"> Ngày bắt đầu:${item.Ngaybatdau}</p>
          </li>
          `;
  });
  container.innerHTML = list.join("");
};
const getItem = (index) => {
  CV = listCV[index];
  window.localStorage.setItem("cvDetail", JSON.stringify(CV));
};
// console.log(lishCV);
const resetForm = () => {
  form.reset();
};
