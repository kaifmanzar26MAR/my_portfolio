
// smooth scrolling locomotive code
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });

gsap.from("#about .about_content .image_section", {
    x: -500,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#about .about_content .image_section",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end:"bottom 110%",
        scrub:true,
    },
    delay: 0.5, 
});
gsap.from("#about .about_content .text_section", {
    y: 500,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#about .about_content .image_section",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end:"bottom 110%",
        scrub:true,
    },
    delay: 0.5, 
});

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