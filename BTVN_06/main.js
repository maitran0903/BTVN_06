function Save(Fullname_Customers, Id_Pro, Name_Pro, Quantity_Pro, Price_Pro){
    console.log(Fullname_Customers, Id_Pro, Name_Pro, Quantity_Pro, Price_Pro)
    var a = {
        Fullname_Customers:Fullname_Customers,
        Id_Pro:Id_Pro,
        Name_Pro:Name_Pro,
        Quantity_Pro:Quantity_Pro,
        Price_Pro:Price_Pro
    }
    arr.push(a)
    console.log(arr)

}
var arr=[]

function Show(){
    var demo=''
    for( var i=0; i<arr.length;i++){
        var n=i
        n++
        demo +=    '<tr>'
        demo +=    '    <th scope="row">'+(n)+'</th>'
        demo +=    '    <td>'+arr[i].Fullname_Customers+'</td>'
        demo +=    '    <td>'+arr[i].Id_Pro+'</td>'
        demo +=    '    <td>'+arr[i].Name_Pro+'</td>'
        demo +=    '    <td>'+arr[i].Quantity_Pro+'</td>'
        demo +=    '    <td>'+arr[i].Price_Pro+'</td>'
        demo +=    '    <td>'+arr[i].Quantity_Pro*arr[i].Price_Pro+'</td>'
        demo +=    '</tr>'
    }
    document.getElementById('result').innerHTML = demo

}
function Reset(){
    document.getElementById("Fullname_Customers").value=''
    document.getElementById("Id_Pro").value=''
    document.getElementById("Name_Pro").value=''
    document.getElementById("Quantity_Pro").value=''
    document.getElementById("Price_Pro").value=''

}