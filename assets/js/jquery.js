$(document).ready(function(){

     /* home slider */

    $("#top-slider").click(function(event) {
        event.preventDefault(); 
    });
    
    var slideCount = $('#top-slider ul li').lenght;
    var slideWidth = $('#top-slider ul li').width();
    var slideHeight = $('#top-slider ul li').height();

    var slideUlWidth = slideCount * slideWidth;
    $('#top-slider').css({width: slideWidth, height: slideHeight});

    $('#top-slider ul').css({width: slideUlWidth, marginLeft: -slideWidth});

    $('#top-slider ul li:last-child').prependTo('#top-slider ul');

    function moveLeft(){
        $('#top-slider ul').animate({
            left: +slideWidth
        },1000 ,function(){
            $('#top-slider ul li:last-child').prependTo('#top-slider ul');
            $('#top-slider ul').css('left', '0');
        });
    };

    function moveRight(){
        $('#top-slider ul').animate({
            left: -slideWidth
        },1000, function(){
            $('#top-slider ul li:first-child').appendTo('#top-slider ul');
            $('#top-slider ul').css('left', '0');
        });
    };

    $('a.control-prev').click(function(){
        moveLeft();
    });

    $('a.control-next').click(function(){
        moveRight();
    })


    // gallery tabbing
    $('#toy-rule1, #toy-example1, #rule-img1, #example-img1').hide();
    $('#basic-btn1').css({
        backgroundColor: '#FCC3AE',
        color: '#ff4500'
    });

    $('#basic-btn1').click(function(){
        $('#basic-btn1').css({
            backgroundColor: '#FCC3AE',
            color: '#ff4500'
        });
        $('#rule-btn1, #example-btn1').css({
            backgroundColor: '#ff4500',
            color: 'white'
        });
        $('#toy-rule1, #toy-example1, #rule-img1, #example-img1').hide();
        $('#toy-basic1, #basic-img1').show();
    });

    $('#rule-btn1').click(function(){
        $('#rule-btn1').css({
            backgroundColor: '#FCC3AE',
            color: '#ff4500'
        });
        $('#basic-btn1, #example-btn1').css({
            backgroundColor: '#ff4500',
            color: 'white'
        });

        $('#toy-basic1, #toy-example1, #basic-img1, #example-img1').hide();
        $('#toy-rule1, #rule-img1').show();
    })

    $('#example-btn1').click(function(){
        $('#example-btn1').css({
            backgroundColor: '#FCC3AE',
            color: '#ff4500'
        });
        $('#basic-btn1, #rule-btn1').css({
            backgroundColor: '#ff4500',
            color: 'white'
        });
        $('#toy-basic1, #toy-rule1, #basic-img1, #rule-img1').hide();
        $('#toy-example1, #example-img1').show();
    })

    // 1 end

    $('#toy-rule2, #toy-example2, #rule-img2, #example-img2').hide();
    $('#basic-btn2').css({
        backgroundColor: '#FCC3AE',
        color: '#ff7700'
    });

    $('#basic-btn2').click(function(){
        $('#basic-btn2').css({
            backgroundColor: '#FCC3AE',
            color: '#ff7700'
        });
        $('#rule-btn2, #example-btn2').css({
            backgroundColor: '#ff7700',
            color: 'white'
        });
        $('#toy-rule2, #toy-example2, #rule-img2, #example-img2').hide();
        $('#toy-basic2, #basic-img2').show();
    });

    $('#rule-btn2').click(function(){
        $('#rule-btn2').css({
            backgroundColor: '#FCC3AE',
            color: '#ff7700'
        });
        $('#basic-btn2, #example-btn2').css({
            backgroundColor: '#ff7700',
            color: 'white'
        });

        $('#toy-basic2, #toy-example2, #basic-img2, #example-img2').hide();
        $('#toy-rule2, #rule-img2').show();
    })

    $('#example-btn2').click(function(){
        $('#example-btn2').css({
            backgroundColor: '#FCC3AE',
            color: '#ff7700'
        });
        $('#basic-btn2, #rule-btn2').css({
            backgroundColor: '#ff7700',
            color: 'white'
        });
        $('#toy-basic2, #toy-rule2, #basic-img2, #rule-img2').hide();
        $('#toy-example2, #example-img2').show();
    })

    // 2 end
   
    $('#toy-rule3, #toy-example3, #rule-img3, #example-img3').hide();
    $('#basic-btn3').css({
        backgroundColor: '#FCC3AE',
        color: '#ff4500'
    });

    $('#basic-btn3').click(function(){
        $('#basic-btn3').css({
            backgroundColor: '#FCC3AE',
            color: '#ff4500'
        });
        $('#rule-btn3, #example-btn3').css({
            backgroundColor: '#ff4500',
            color: 'white'
        });
        $('#toy-rule3, #toy-example3, #rule-img3, #example-img3').hide();
        $('#toy-basic3, #basic-img3').show();
    });

    $('#rule-btn3').click(function(){
        $('#rule-btn3').css({
            backgroundColor: '#FCC3AE',
            color: '#ff4500'
        });
        $('#basic-btn3, #example-btn3').css({
            backgroundColor: '#ff4500',
            color: 'white'
        });

        $('#toy-basic3, #toy-example3, #basic-img3, #example-img3').hide();
        $('#toy-rule3, #rule-img3').show();
    })

    $('#example-btn3').click(function(){
        $('#example-btn3').css({
            backgroundColor: '#FCC3AE',
            color: '#ff4500'
        });
        $('#basic-btn3, #rule-btn3').css({
            backgroundColor: '#ff4500',
            color: 'white'
        });
        $('#toy-basic3, #toy-rule3, #basic-img3, #rule-img3').hide();
        $('#toy-example3, #example-img3').show();
    })

    // // 3 end

    $('#toy-rule4, #toy-example4, #rule-img4, #example-img4').hide();
    $('#basic-btn4').css({
        backgroundColor: '#FCC3AE',
        color: '#ff7700'
    });

    $('#basic-btn4').click(function(){
        $('#basic-btn4').css({
            backgroundColor: '#FCC3AE',
            color: '#ff7700'
        });
        $('#rule-btn4, #example-btn4').css({
            backgroundColor: '#ff7700',
            color: 'white'
        });
        $('#toy-rule4, #toy-example4, #rule-img4, #example-img4').hide();
        $('#toy-basic4, #basic-img4').show();
    });

    $('#rule-btn4').click(function(){
        $('#rule-btn4').css({
            backgroundColor: '#FCC3AE',
            color: '#ff7700'
        });
        $('#basic-btn4, #example-btn4').css({
            backgroundColor: '#ff7700',
            color: 'white'
        });

        $('#toy-basic4, #toy-example4, #basic-img4, #example-img4').hide();
        $('#toy-rule4, #rule-img4').show();
    })

    $('#example-btn4').click(function(){
        $('#example-btn4').css({
            backgroundColor: '#FCC3AE',
            color: '#ff7700'
        });
        $('#basic-btn4, #rule-btn4').css({
            backgroundColor: '#ff7700',
            color: 'white'
        });
        $('#toy-basic4, #toy-rule4, #basic-img4, #rule-img4').hide();
        $('#toy-example4, #example-img4').show();
    })

    // 4 end

});