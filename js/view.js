var GameView = Backbone.View.extend({

  el: $('#main'),
  initialize: function(){
    this.render();
  },
  render: function(){
    var bg = new $.gameQuery.Animation({imageURL: 'img/bg.jpg'}),
        player = new $.gameQuery.Animation({imageURL: 'img/bah_01.png'}),
        baddie1 = new $.gameQuery.Animation({imageURL: 'img/bad_rock_01.png'}),
        playgroundArea = $(this.el).find('#playgroundArea'),
        bgWidth = this.model.get('bgWidth'),
        bgHeight = this.model.get('bgHeight');

    // set up sprites
    playgroundArea.playground({ width:bgWidth, height:bgHeight, refreshRate:this.model.get('refreshRate') })
      .addGroup('background',{animation:bg, width:bgWidth, height:bgHeight, overflow:'visible'}).end()
      .addGroup('player',{animation:player, width:this.model.get('playerWidth'), height:this.model.get('playerHeight'), posx:this.model.get('playerInitX'), posy:this.model.get('playerInitY'), overflow:'visible'}).end()
      .addGroup('baddies',{animation:baddie1, width:this.model.get('baddieWidth'), height:this.model.get('baddieHeight'), posx:this.model.get('baddieInitX'), posy:this.model.get('baddieInitY'), overflow:'visible'}).end();

  }

});
