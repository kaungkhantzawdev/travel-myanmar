$(".navbar-toggler").click(function () {
    let result = $(".navbar-collapse").hasClass("show");
    console.log(result);
    if(result){
        $(".menu").removeClass("fa-times").addClass("fa-bars");
    }else{
        $(".menu").removeClass("fa-bars").addClass("fa-times");
    }
});

let screenHeight = $(window).height();
console.log(screenHeight);

$(window).scroll(function () {
    let currentHeight = $(this).scrollTop();
    if(currentHeight >= screenHeight -150){
        $(".header").addClass("side-nav");
    }else{
        $(".header").removeClass("side-nav");
        setActive("myanmar");
    }
});

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();


    function setActive(current) {
        $(".nav-link").removeClass("current-section");

        $(`.nav-link[href='#${current}']`).addClass("current-section");
    };


    function navScroll() {
       let currentSection = $("section[id]");

       currentSection.waypoint(function (direction) {

          if(direction == "down"){
            let currentId = $(this.element).attr('id');
            console.log(currentId);
            setActive(currentId);
          }
          
       },{ offset:'150px' });

       currentSection.waypoint(function (direction) {

          if(direction == "up"){
            let currentId = $(this.element).attr('id');
            console.log(currentId);
            setActive(currentId);
          }
        
        },{ offset:'150px' });
      
    };


    navScroll();

    $(window).on("load",function () {
        $(".loader-container").fadeOut(500,function () {
            $(".loader-container").remove();
        });
    });
