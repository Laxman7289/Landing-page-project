function myFunction(){
    const checkbox = document.getElementById("checkbox1");
    const checkvalue = !checkbox.checked
    checkbox.checked = checkvalue

    const sidebar = document.getElementById("sidebar")
    if(checkvalue){
        sidebar.classList.add('open')
    }
    else{
        sidebar.classList.remove('open')
    }
}