let name = prompt("Lütfen Adınızı Giriniz","Örnek : Ülker ")

let myname = document.querySelector("#myName")

myname.innerHTML=`${myname.innerHTML}  ${name}`


function mydate()
{
     var date = new Date();
     
     var h = date.getHours();
     var m = date.getMinutes();
     var s = date.getSeconds();
     

     h = checktime(h)
     m = checktime(m)
     s = checktime(s)

     

     document.getElementById('myClock').innerHTML = h+":"+m+":"+s ;
     
     t=setTimeout('mydate()',1000);
}



function checktime(i)
{
    if(i<10)
    {
        i="0"+i;
    }
    return i ;
}
 
mydate();