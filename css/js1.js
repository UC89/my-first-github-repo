var headerColor = new Array();
headerColor[0] = 'rgb(0,197,209)';
headerColor[1] = 'rgb(210,50,98)';      //red
headerColor[2] = 'rgb(250,250,250)';    //white
headerColor[3] = 'rgb(102, 255, 102)';  //green
curColor = 0;

$(document).ready(function(){
    //Still should change this to limit curColor to length of color array
    $('h1').on('click',function(){
        numColors = headerColor.length;
        console.log('Clicked h1');
        if (curColor<numColors) {
            curColor += 1;
        }
        else {
            curColor = 0;
        }
        newColor = headerColor[curColor];
        console.log('New Color: ',newColor,' array val: ',curColor);
        $(this).css('color',newColor);
    });

    navbarHeight = $('#nav-bar-id').height()
    navbarHeightPx = navbarHeight+'px'
    console.log('Navbar height: ',navbarHeightPx)
    $('#page-main').css({'padding-top':navbarHeightPx});

    $('#about-me').on('click',function(){
        console.log('Clicked about me');
        var visible='hidden';
    });

    numberOfIcons = $('#icon-div img').length;
    widthOfIconDiv = (100/numberOfIcons*2)+'%';
    console.log('widthOfDiv on load: ',widthOfIconDiv)
    $('.icon-container').css({'width':widthOfIconDiv});


    //Make icons layout responsive
    //icon-container and icon-link classes

    $( window).resize(function() {
    //Get some basic variables, width of icons and background, check if icons can fit horizontally
        var numberOfIcons = $('#icon-div img').length;
        var linkedInIconElement = document.getElementById('linkedin-icon');
        var mainElement = document.getElementById('main-background');
        var iconWidth = linkedInIconElement.clientWidth;
        var backgroundWidth = mainElement.clientWidth;
        var widthToCenter = (backgroundWidth-(numberOfIcons*iconWidth))/(numberOfIcons+3)+'px';

        //Log values to verify no errors
        console.log('numberOfIcons: ',numberOfIcons);
        console.log('iconWidth: ',iconWidth);
        console.log('backgroundWidth: ',backgroundWidth);
        console.log('RequiredPadding: ',widthToCenter);
        //Change padding of .icon-link element
        $('.icon-container').css('padding',widthToCenter)
    });

    //** !!! I copied this from http://jsfiddle.net/cgspicer/V4qh9/ !!! The color change on scroll was taken from the above site and modified for mine */
    var mainDivElement = document.getElementById('main-background');
    var pageHeight = mainDivElement.clientHeight-1000
    var windowHeight = window.innerHeight;
    ;
    console.log('Page Height: ',pageHeight)
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = pageHeight; //where you want the animation to stop
    var beginning_color = new $.Color( 'rgb(174,198,230)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgb(210,50,98)' ); ;//what color we want to use in the end

    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        //console.log('Scroll Position: ',scroll_pos); //Added line to log scroll position
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) {
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('#main-background').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('#main-background').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('#main-background').animate({ backgroundColor: beginning_color }, 0);
        } else { }

        //Add rotating snowflake on side
        //Keeping this for now even though graphic was deleted
        degreesRotated = 'rotate('+percentScrolled*2+'turn)';
        pxToMove = (scroll_pos/pageHeight)*windowHeight*1.4+'px';
        newSnowX = percentScrolled*50+10+'px'
        newSnowY = percentScrolled*50+10+'px'
        $('#snow-flake').css('transform',degreesRotated);
        $('#snow-flake').css('top',pxToMove);
        $('#snow-flake').css('width',newSnowX);
        $('#snow-flake').css('height',newSnowY);
    });
});