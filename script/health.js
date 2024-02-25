(function($){
    
   class Gym{
    init(){
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.footer();
        this.popup();
    }

    header(){

        $('.main-btn').on({
            mouseenter(){
                $('.sub').stop().slideUp(0);
                $(this).next().stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
            }
        })
        $('.column').on({
            mouseleave(){
                $('.sub').stop().slideUp(300);
                $('.main-btn').removeClass('on');
            }
        })
    }

    section1(){
        
        let count = 0;

        function mainSlide(){
        $('.slide-wrap').stop().animate({top:`${-count * 100}%`}, 500, function(){
            if(count > 2) count = 0;
            $('.slide-wrap').stop().animate({top:`${-count * 100}%`}, 0)
        })
        }
     
        function nextCount(){
            count++;
            mainSlide();
        }
        
        function autoTimer(){
            setInterval(nextCount, 3000);
        }

        autoTimer();

    }   

    section2(){

    }

    section3(){

    }

    footer(){

    }

    popup(){

        $('.notice-first').on({
            click(){
                $('.popup').removeClass('off');
                $('.popup').addClass('on');
            }
        })

        $('.close-btn').on({
            click(){
                $('.popup').removeClass('on');
                $('.popup').addClass('off');
            }
        })

    }
   }

   const gym = new Gym();
   gym.init();

})(jQuery)