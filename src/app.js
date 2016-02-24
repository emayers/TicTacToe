var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    player1: null,
    player2: null,
    square1: null, square2: null, square3: null, square4: null, square5: null,
    square6: null, square7: null, square8: null, square9: null,
    turn: 0,
    moves: [],
    occupied: [0,0,0,0,0,0,0,0,0],
    occupied1: [0,0,0,0,0,0,0,0,0],
    occupied2: [0,0,0,0,0,0,0,0,0],
    
    selection: function(){
        var choice = prompt("Player 1, 'X' or Player 2, 'O'?");
        switch(choice){
            case "X":
                break;
            case "O":
                this.turn = 1;
                break;
            default:
                this.selection();
                break;
        }
    },
    
    reset: function(){
        for(var i = 0; i < this.moves.length; i++){
            this.moves[i].setVisible(false);
        }
        for(var j = 0; j < this.occupied.length; j++){
            this.occupied[j] = 0;
            this.occupied1[j] = 0;
            this.occupied2[j] = 0;
        }
        this.turn = 0;
        this.selection();
    },
    
    win: function(){
        if(this.occupied1[0] == 1 && this.occupied1[3] == 1 && this.occupied1[6] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied1[1] == 1 && this.occupied1[4] == 1 && this.occupied1[7] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied1[2] == 1 && this.occupied1[5] == 1 && this.occupied1[8] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied1[0] == 1 && this.occupied1[1] == 1 && this.occupied1[2] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied1[3] == 1 && this.occupied1[4] == 1 && this.occupied1[5] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied1[6] == 1 && this.occupied1[7] == 1 && this.occupied1[8] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied1[0] == 1 && this.occupied1[4] == 1 && this.occupied1[8] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied1[6] == 1 && this.occupied1[4] == 1 && this.occupied1[2] == 1){
            alert("You win player 1!");
            this.reset();
        }
        else if(this.occupied2[0] == 1 && this.occupied2[3] == 1 && this.occupied2[6] == 1){
            alert("You win player 2!");
            this.reset();
        }
        else if(this.occupied2[1] == 1 && this.occupied2[4] == 1 && this.occupied2[7] == 1){
            alert("You win player 2");
            this.reset();
        }
        else if(this.occupied2[2] == 1 && this.occupied2[5] == 1 && this.occupied2[8] == 1){
            alert("You win player 2!");
            this.reset();
        }
        else if(this.occupied2[0] == 1 && this.occupied2[1] == 1 && this.occupied2[2] == 1){
            alert("You win player 2!");
            this.reset();
        }
        else if(this.occupied2[3] == 1 && this.occupied2[4] == 1 && this.occupied2[5] == 1){
            alert("You win player 2!");
            this.reset();
        }
        else if(this.occupied2[6] == 1 && this.occupied2[7] == 1 && this.occupied2[8] == 1){
            alert("You win player 2!");
            this.reset();
        }
        else if(this.occupied2[0] == 1 && this.occupied2[4] == 1 && this.occupied2[8] == 1){
            alert("You win player 2!");
            this.reset();
        }
        else if(this.occupied2[6] == 1 && this.occupied2[4] == 1 && this.occupied2[2] == 1){
            alert("You win player 2!");
            this.reset();
        }
        else if(this.occupied[0] == 1 && this.occupied[1] == 1 && this.occupied[2] == 1 && this.occupied[3] == 1
               && this.occupied[4] == 1 && this.occupied[5] == 1 && this.occupied[6] == 1 && this.occupied[7] == 1
               && this.occupied[8] == 1){
            alert("Draw!");
            this.reset();
        }
    },
    
    createMoves: function(location, event){ 
		var game = event.getCurrentTarget();
        game.player1 = new cc.Sprite(res.X_png);
        game.player2 = new cc.Sprite(res.O_png);
        var locate = location.getLocation();
        var box1 = game.square1.getBoundingBox();
        var box2 = game.square2.getBoundingBox();
        var box3 = game.square3.getBoundingBox();
        var box4 = game.square4.getBoundingBox();
        var box5 = game.square5.getBoundingBox(); 
        var box6 = game.square6.getBoundingBox();
        var box7 = game.square7.getBoundingBox();
        var box8 = game.square8.getBoundingBox();
        var box9 = game.square9.getBoundingBox();
        
        if(game.turn % 2 == 0){
            if(cc.rectContainsPoint(box1, locate) && game.occupied[0] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[0] = 1;
                game.occupied1[0] = 1;
                game.turn++;
                game.win();    
            }
            else if(cc.rectContainsPoint(box2, locate) && game.occupied[1] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[1] = 1;
                game.occupied1[1] = 1;
                game.turn++;
                game.win(); 
            }
            else if(cc.rectContainsPoint(box3, locate) && game.occupied[2] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[2] = 1;
                game.occupied1[2] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box4, locate) && game.occupied[3] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[3] = 1;
                game.occupied1[3] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box5, locate) && game.occupied[4] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[4] = 1;
                game.occupied1[4] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box6, locate) && game.occupied[5] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[5] = 1;
                game.occupied1[5] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box7, locate) && game.occupied[6] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[6] = 1;
                game.occupied1[6] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box8, locate) && game.occupied1[7] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[7] = 1;
                game.occupied1[7] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box9, locate) && game.occupied1[8] == 0){
                game.addChild(game.player1, 1);
                game.player1.setPosition(locate.x, locate.y);
                game.moves.push(game.player1);
                game.occupied[8] = 1;
                game.occupied1[8] = 1;
                game.turn++;
                game.win();
            }
        }
        
        else{
            if(cc.rectContainsPoint(box1, locate) && game.occupied[0] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[0] = 1;
                game.occupied2[0] = 1;
                game.turn++;
                game.win();
                
            }
            else if(cc.rectContainsPoint(box2, locate) && game.occupied[1] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[1] = 1;
                game.occupied2[1] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box3, locate) && game.occupied[2] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[2] = 1;
                game.occupied2[2] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box4, locate) && game.occupied[3] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[3] = 1;
                game.occupied2[3] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box5, locate) && game.occupied[4] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[4] = 1;
                game.occupied2[4] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box6, locate) && game.occupied[5] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[5] = 1;
                game.occupied2[5] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box7, locate) && game.occupied[6] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[6] = 1;
                game.occupied2[6] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box8, locate) && game.occupied[7] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[7] = 1;
                game.occupied2[7] = 1;
                game.turn++;
                game.win();
            }
            else if(cc.rectContainsPoint(box9, locate) && game.occupied[8] == 0){
                game.addChild(game.player2, 1);
                game.player2.setPosition(locate.x, locate.y);
                game.moves.push(game.player2);
                game.occupied[8] = 1;
                game.occupied2[8] = 1;
                game.turn++;
                game.win();
            }
        }

	},
    
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var helloLabel = new cc.LabelTTF("TicTacToe V0.1", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        
        this.square1 = new cc.Sprite();
        this.square1.height = 25;
        this.square1.width = 25;
        this.square1.setPosition(395,370);
        this.square2 = new cc.Sprite();
        this.square2.height = 25;
        this.square2.width = 25;
        this.square2.setPosition(395,270);
        this.square3 = new cc.Sprite();
        this.square3.height = 25;
        this.square3.width = 25;
        this.square3.setPosition(395,170);
        this.square4 = new cc.Sprite();
        this.square4.height = 25;
        this.square4.width = 25;
        this.square4.setPosition(490,370);
        this.square5 = new cc.Sprite();
        this.square5.height = 25;
        this.square5.width = 25;
        this.square5.setPosition(490,270);
        this.square6 = new cc.Sprite();
        this.square6.height = 25;
        this.square6.width = 25;
        this.square6.setPosition(490,170);
        this.square7 = new cc.Sprite();
        this.square7.height = 25;
        this.square7.width = 25;
        this.square7.setPosition(585,370);
        this.square8 = new cc.Sprite();
        this.square8.height = 25;
        this.square8.width = 25;
        this.square8.setPosition(585,270);
        this.square9 = new cc.Sprite();
        this.square9.height = 25;
        this.square9.width = 25;
        this.square9.setPosition(585,170);
        
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });

        this.addChild(this.sprite, 0);
        this.addChild(this.square1);
        this.addChild(this.square2);
        this.addChild(this.square3);
        this.addChild(this.square4);
        this.addChild(this.square5);
        this.addChild(this.square6);
        this.addChild(this.square7);
        this.addChild(this.square8);
        this.addChild(this.square9);
        
        this.selection();
        
        cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			onTouchBegan: this.createMoves,
		}, this);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

