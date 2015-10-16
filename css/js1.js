var headerColor = new Array();
headerColor[0] = 'rgb(0,197,209)';
headerColor[1] = 'rgb(210,50,98)';
headerColor[2] = 'rgb(250,250,250)';
headerColor[3] = 'rgb(102, 255, 102)';
curColor = 0;

$(document).ready(function(){
    //** !!! I copied this from http://jsfiddle.net/cgspicer/V4qh9/ !!! This js file is not my own work
    //** notice we are including jquery and the color plugin at
    //** http://code.jquery.com/color/jquery.color-2.1.0.js

    //** Working on making this animate only .main class

    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 1000; //where you want the animation to stop
    var beginning_color = new $.Color( 'rgb(0,197,209)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgb(210,50,98)' ); ;//what color we want to use in the end
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        console.log('Scroll Position: ',scroll_pos); //Added line to log scroll position
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

        //add snowflake rotate and size pulse effect here
    });

    $('h1').on('click',function(){
        console.log('Clicked h1');
        if (curColor<3) {
            curColor += 1;
        }
        else {
            curColor = 0;
        }
        newColor = headerColor[curColor];
        console.log('New Color: ',newColor,' array val: ',curColor);
        $(this).css('color',newColor);
    });
});