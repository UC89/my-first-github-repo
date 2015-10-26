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