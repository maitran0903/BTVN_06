var Arr = [
    {
        id: 1,
        User_Name: "Thuan",
        Password: "thuan123"
    },
    {
        id: 2,
        User_Name: "Nhi",
        Password: "nhi123"
    },
    {
        id: 3,
        User_Name: "mai",
        Password: "mait123"
    },
    {
        id: 4,
        User_Name: "Lan",
        Password: "lan123"
    },

]
function demo(name_user, pass_user){
    var result = Boolean  //dung/sai
    for(i=0;i<Arr.length;i++){
        if(name_user == Arr[i].User_Name){
            if(pass_user ==Arr[i].Password){
            //document.write("<p> Trang chu </p>")
            result = true
            break;
            }else{
                //alert("ten nguoi dung hoac mat khau khong dung")
                result = false;
                continue;
            }

        }else{
            //alert("ten nguoi dung hoac mat khau khong dung")
            result = false;
            continue;
        }
    }
    if( result == true){
        document.write ("<p> Trang chu </p>")
    }else{
        alert("ten nguoi dung hoac mat khau khong dung")
    }
}
function xoa(){
    document.getElementById("name_user").value =''
    document.getElementById("pass_user").value =''
}


