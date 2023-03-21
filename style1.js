/*let d = new Date();

document.write( "<h1>Today's date is " + d +"</h1>")
*/
/*var fso= new ActiveXObject("Scripting.FileSystemObject");
var a = fso.CreateTextFile("d:\testfile.txt", true);
a.Writeln("This is a test.");

a.Close();*/
/*window.alert(Date());

var r=window.confirm("message")
if(r==true)
    document.write("ban da nhan ok");
else
    document.write("ban da chon khong");
*/
/*alert("chuong trinh cong 2 so\n" + "ban nhap vao gia tri 2 so\n" + "chuong trinh se hoi ban co muon thuc hien phep cong khong>\n");

var first, second, num1, num2, sum;
first = window.prompt("Nhap so thu nhat", "0");
document.write("<br>","Ban nhap " + first);
second = window.prompt("Nhap so thu hai","0");
document.write("<br>","Ban nhap " + second);
var ok = window.confirm("Ba co muon cong 2 so?")

if(ok)
{
    num1=parseInt(first);
    num2=parseInt(second);
    sum=num1+num2;
    document.write("<br>", "Tong cua "+ first + " va " + second + " = " + sum);
}*/

// Json
/*var text = '{"NhanVien":[ '+' { "Ho":"Nguyen","Ten":"Teo"}, '+' {"Ho":"Ly","Ten":Ty"}, '+' {"Ho":"Tran","Ten":"Tu"}]}';

var obj = JSON.parse(text);
//su dung
obj.NhanVien[1].Ho + " " + obj.NhanVien[1].Ten;
window.alert(obj.NhanVien[1].Ho );*/
//LyTY
//-----------------------------------------------/
/*var italic_text= document.createTextNode("This is italic text");
var bold_text = document.createTextNode("This is bold text");
var normal_text = document.createTextNode("This is normal text");

 var inode= document.getElementById("il");
 var bnode= document.getElementById("bl");
 var pnode= document.createElement("p");
 pnode.appendChild(normal_text);
 bnode.appendChild(bold_text);
 inode.appendChild(italic_text);
 document.body.appendChild(pnode);*/

 /*var node=document.getElementById("p1");
 if(node.hasChildNodes())
    node.removeChild(node.firstChild);
 else
    document.write("Don't have child !!!");
 var sibling = node.nextSibling();
 document.write(sibling.nodeName);
*/

/*var x,y,type;
x=Event.clientX;
y=Event.clientY;
type=Event.type;
var str="(" + x + "," + y + ") -" + type;
var element = document.getElementById("toado");
element.innerHTML=str;

document.onclick=doClick;
document.onmousemove=doClick;
*/
function compute(frm){
    var x = frm.expr.value;
    result.innerHTML=x*x;
}

function myPara_onmouseout()
{
    myPara.innerText ="Roll your mouse over my text";
    myPara.style.color = "Black";
}
function myPara_onmouseover()
{
    myPara.innerText ="Wow that feels good!!";
    myPara.style.color="Red";
}