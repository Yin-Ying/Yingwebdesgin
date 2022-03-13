function TimeYear(){
    var Year = new Date().getFullYear();  
    document.getElementById('Year').textContent = Year;
}
CoppyRightContent();
function CoppyRightContent() {
    // 宣告變數 在 html 內新增 div 標籤
    let div = document.createElement('div');

    // 宣告變數 在哪個html 標籤之內新增 div 
    let Footer = document.getElementById('Footer');

    // 在 footer 內新增div 子元素
    Footer.appendChild(div);

    // html語法 若樣使用 id 或 class 請用單引號包覆
    div.innerHTML='"COCOMANGA &copy;版權宣告2020 - <span id="Year">2022</span>"';
    TimeYear();
    // 移動位置
    let Address = document.getElementById('Address');
    
    // 在被選取的元素之前插入內容 before() 置入被選取元素之前
    Address.before(div);
}
SmallNavcon();
function SmallNavcon(){
    // 薪資標籤 ul與li
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    // 建立ul框架,給予 id 名稱
    let SN =document.getElementById('SmallNav');
    SN.appendChild(ul);

    //賦予屬性id or class 
     ul.setAttribute("id","PhoneNav");

    // li.setAttribute("class","About");
  
  let NavClass= ["About","VerticalLine","Shop","VerticalLine","Message","VerticalLine","Address"];
  for (i=0; i < NavClass.length; i++ ){
    let li = document.createElement('li');
    li.setAttribute("class",NavClass[i]);
    ul.appendChild(li);
    let A = document.createElement('a');
    li.appendChild(A);
    A.setAttribute("href","javascript:;");
    let Item = ["品牌故事","|","購物說明","|","客服留言","|","門市資訊"];
    li.innerText= Item[i];
  }
}
// MenuNav();
  function MenuNav() {
  let MenuNav = document.getElementById('MenuNav');
  MenuNav.style.display = "none";
  }
  Pageload();
   function Pageload(){
       $('header').load("web/web.html");
   }
/*ShareCon(8);
// 新增 好物分享 的內容
function ShareCon(Number) {
  let i = Number;
  let a = i + Number;
  // 在同一頁面中，會將相同 名稱 的 class ,累加編號
  for(i; i < 0; i++){
    New_ID_Tag('shareCon', 'section', 'Class', 'Commodity');
    New_Class_Tag(Commodity , 'p', 'Class', 'Null', 'i');

    for(let b = 0; b < DClass.length; b++){
      New_Class_Tag('Commodity', 'div', 'Class', DClass[b], i);
    }

    let CO = document.getElementsByClassName(COName('Commodity'))[i(0)];
    // Image 內新增資料
    let A = document.CreateElement('a');
    // 新增 連結 屬性
    A.setAttribute("href", LinKPath);
    // 宣告 指定 class 的變數
    let Images = CO.querySelector(ClassName('.Images'));
    //  let Images = CO.querySelector('Images')[i];
    // 在 Images 內新增
    Images.appendChild(A);

    // Images > a 內新增資料
    let Img = document.createElement('img');
    // 屬性
    Img.setAttrebute("src", PhotoPath('images/Banner/006.jpg'));
    // 在 a 內新增
    A.appendChild(Img); 

  }

}
 */
