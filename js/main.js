(function($){

  // game model
  var gameModel = new GameModel();

  // game view
  var gameView = new GameView( { model: gameModel } );

  // key binding
  var setupKeys = function() {
  	var moveAmount = gameModel.get('playerMoveAmount');
  	var player = $('#player');
  	
  	$(document).keydown(function(e){

  	  switch(e.keyCode){

  	    case 65: // left (a)
          player.x( moveAmount*-1, true );
  	      break;

  	    case 68: // right (d)
          player.x( moveAmount, true );
  	      break;
  	  }
  	});
  }

  // start game
  $.playground().startGame(function(){
    setupKeys();
  });

  // called at a regular interval
  $.playground().registerCallback(function(){
  	$('#baddies').y( 8, true );

      var baddiesTop = Number( $('#baddies').css('top').replace('px','') ),
          baddiesLeft = Number( $('#baddies').css('left').replace('px','') ),
          playerTop = Number( $('#player').css('top').replace('px','') ),
          playerLeft = Number( $('#player').css('left').replace('px','') );

      //console.log('baddies ' + baddiesTop);
      //console.log('playerTop ' + playerTop);

      // hit test
      if ( ( (baddiesTop > (playerTop)) && (baddiesTop < (playerTop+40)) ) && ( (baddiesLeft > (playerLeft+40)) && (baddiesLeft < (playerLeft+80)) ) ) {
        alert('hit');
      }

  }, gameModel.get('refreshRate'));

})(jQuery);