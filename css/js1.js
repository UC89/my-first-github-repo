var headerColor = new Array();
headerColor[0] = 'rgb(0,197,209)';
headerColor[1] = 'rgb(210,50,98)';      //red
headerColor[2] = 'rgb(250,250,250)';    //white
headerColor[3] = 'rgb(102, 255, 102)';  //green
curColor = 0;

//This function returns to element vertical position, and height
function getElementPosition(elementId) {
    var elementPosition = $(elementId).position();
    var elementVertical = elementPosition['top'];
    console.log(elementId, 'Position: ',elementPosition,' From top: ',elementVertical)
    var elementHeight = $(elementId).height();
    return [elementVertical,elementHeight];
}


$(document).ready(function(){
    //Get vertical position and height of education
    var educationPosition = getElementPosition('#education')[0];
    var educationHeight = getElementPosition('#education')[1];

    console.log('Education Position: ',educationPosition)
    //Still should change this to limit curColor to length of color array
    $('h2').on('click',function(){
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

    //This gives the navbar heigh and mkes sure the rest of the page content has enough padding
    navbarHeight = $('#nav-bar-id').height()
    navbarHeightPx = navbarHeight+'px'
    console.log('Navbar height: ',navbarHeightPx)
    $('#page-main').css({'padding-top':navbarHeightPx});

    $('#about-me').on('click',function(){
        console.log('Clicked about me');
        var visible='hidden';
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
    var beginning_color = new $.Color( 'rgb(71,126,150)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgb(240,240,240)' ); ;//what color we want to use in the end



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


        var upperLimit = educationPosition-educationHeight*2;
        var lowerLimit = educationPosition;
        var maxHuskySize = 200;
        if (scroll_pos >= upperLimit & scroll_pos <=lowerLimit) {
            var sizePercentage = (scroll_pos-upperLimit)/(lowerLimit-upperLimit)
            var degreesRotated = 'rotate('+sizePercentage*2+'turn)';
            var currentSize = $('#husky').height();
            var newHuskySize = maxHuskySize*sizePercentage;
            console.log('PageHeight: '+pageHeight)
            console.log('Upperlimit: '+upperLimit+' LowerLimit: '+lowerLimit);
            console.log('Size Percentage: '+sizePercentage)

            $('#husky').css('transform',degreesRotated);
            $('#husky').css('width',newHuskySize);
            $('#husky').css('height',newHuskySize);
        }
        /*This is to make content sections rotate through as you scroll */
    });
});

$( window).resize(function() {
    });

//GOOGLE MAPS TEST---------------------------------------
//-------------------------------------------------------
// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task');
        data.addColumn('number', '% of Time');
        data.addRows([
          ['Setup EEG', 30],
          ['Review EEG', 30],
          ['Troubleshoot Computer', 10],
          ['CME', 10],
          ['Other', 20]
        ]);

        // Set chart options
        var options = {'title':'Breakdown of Time at Work',
                       'width':300,
                       'height':300,
                       is3D:true,
                       'backgroundColor': {fill:'transparent'}
                   };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('work-chart'));
        chart.draw(data, options);
        }
        drawChart()