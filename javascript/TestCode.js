// 設計方法function name(){程式}
// 瀏覽器console控板
// 宣告變數var es6版本 let(變數) const(常數)

// Testcode();

// TimeYear();CoppyRightContent()內啟動

function Testcode(){
    var a=1;
    var b="01";
    console.log(a);
    console.log(b);
    console.log("01");
    
    var b =12;
    if (b > 10) console.log("數字大於10");
    
    if (b > 10)
        console.log("數字為:" + b);
    var a = 8
        if (a > b)
            console.log("a > b成立");
        else
            console.log("a > b不成立");
            let aa=1;
            let bb=2;
            if (aa==bb){console.log("兩數箱等");}
            
            else if (aa > bb){
                console.log( aa + "大於" + bb);
            }
            
            else{
                console.log("都不成立");
            };
            
}
function TimeYear(){
    // 宣告年分
    // 日期函數 Date
    var Year = new Date().getFullYear();
    // var Year="2022";
    // 由html顯示資料
    document.getElementById('Year').textContent = Year;
}
// Var_Letcode();
var a=1;
let b=2;
function Var_Letcode(){
   // var與let差異 var 除了在function內有全域與區域的分別； let 都有分別
var c= 5, d=6;
let x= 4, y=7;
{
    var e = c + d;
    let z = x + y;
}
console.log(e);
console.log(z);
function Numcode(){
    var e = c + d;
    let z = x + y;
}
} 
let i =1;
for(i=0;i<=10;i+=1){
    console.log(i);
}
// login();
function login(){
    let User;
    let Number;
    //帳號 
    let i;
    let usertext ='YinYing';
    // 密碼
    let passwd ='12345';
    User = window.prompt('請輸入帳號');
    if (User != usertext){
        for(i == User;i <=2;i+=1){
            console.log("");
        }
        if ( Number == passwd){
            console.log("歡迎登入");
        }else{
            console.log("帳號密碼錯誤");
        }
    }else{
        Number = window.prompt('請輸入密碼');
        
    }

}
// whilecode();
function whilecode(){
     let count =1;
    let number=200;
    while (number > 0) {
        console.log("第" + count + "次")
        count+=1;
        let attack=Math.floor(Math.random()*31);
        if (attack < 10 ){
            number=number;
        }else {
            console.log("產生亂數為:" + attack);
            number=number - attack;
        }  
        while (number < 0){
            number=number - number;
        }  
          
        console.log("計算結果為:" + number);
    }
}
ArrayCode();
function ArrayCode(){
    // 
    let Item =[101,'01','項目']
    //取出數值 用for 迴圈 處理
    for(let i =0;i < 3;i++){
        console.log(Item[i]);
    }

}
CoppyRightContent();
function CoppyRightContent() {
    // 宣告變數 在 html 內新增 div 標籤
    let div = document.createElement('div');

    // 宣告變數 在哪個html 標籤之內新增 div 
    let Footer = document.getElementById('Footer');

    // 在 footer 內新增div 子元素
    Footer.appendChild(div);

    // 純文字
    // div.textContent="COCOMANGA &copy;版權宣告2020 -";
    // html語法 若樣使用 id 或 class 請用單引號包覆
    div.innerHTML='"COCOMANGA &copy;版權宣告2020 - <span id="Year">2022</span>"';
    TimeYear();

    // 1.在被選取的元素開頭插入內容 prepend() 置入被選取元素之中
    let Address = document.getElementById('Address');
    // Address.prepend(div);

    // 2.在被選取的元素結尾插入內容 prepend() 置入被選取元素之中
    // Address.append(div);
    
    // 3.在被選取的元素之前插入內容 prepend() 置入被選取元素之前
    Address.before(div);

    // 4.在被選取的元素之後插入內容 prepend() 置入被選取元素之後
    // Address.after(div);
}