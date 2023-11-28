
// smooth scrolling locomotive code
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });

var flag=true;

const toggle_dropdown=()=>{
    if(flag==true){
        document.getElementById('drop_menu').style.display='flex';
        flag=false;
    }else{
        document.getElementById('drop_menu').style.display='none';
        flag=true;
    }
}