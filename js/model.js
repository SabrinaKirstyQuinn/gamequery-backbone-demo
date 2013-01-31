var GameModel = Backbone.Model.extend({
  defaults: {
    bgWidth:640,
    bgHeight:640,
    refreshRate:60,
    playerWidth:157,
    playerHeight:157,
    playerInitX:300,
    playerInitY:450,
    playerMoveAmount:6,
    baddieWidth:157,
    baddieHeight:157,
    baddieInitX:500,
    baddieInitY:-500,
  }
});