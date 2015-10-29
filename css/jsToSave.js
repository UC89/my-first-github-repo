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


            numberOfIcons = $('#icon-div img').length;
    widthOfIconDiv = (100/numberOfIcons*2)+'%';
    console.log('widthOfDiv on load: ',widthOfIconDiv)
    $('.icon-container').css({'width':widthOfIconDiv});

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

//This function will return the distance from the top of the document
function getElementPosition(elementId) {
    var elementPosition = $(elementId).position();
    var elementVertical = elementPosition['top'];
    console.log(elementId, 'Position: ',elementPosition,' From top: ',elementVertical)
    return elementVertical;
}