describe('Bowling', function () {

  var game
  var i
  var set

  beforeEach(function () {
    game = new Bowling ()
  })

  describe('#new', function () {
    it('has a score that starts at 0', function () {
      expect(game.score).toEqual(0)
    })
  })

  describe('#updateScore', function () {
    describe('first frame', function () {
      beforeEach(function () {
        game.updateScore(8)
      })
      it('adds 8 points from first roll', function () {
        expect(game.score).toEqual(8)
      })

      it('adds 1 point from the second roll', function () {
        game.updateScore(1)
        expect(game.score).toEqual(9)
      })
    })

    describe('second frame', function () {
      describe('when a spare ocurred before', function () {
        beforeEach(function () {
          set = [2, 8, 5]
          set.forEach(function (points){
            game.updateScore(points)
          })
        })
        it('adds points + bonus after first roll', function () {
          expect(game.score).toEqual(20)
        })

        it('adds no bonus points after the second roll', function () {
          game.updateScore(3)
          expect(game.score).toEqual(23)
        })
      })

      describe('when a strike ocurred before', function () {
        beforeEach(function () {
          set = [10, 5]
          set.forEach(function (points){
            game.updateScore(points)
          })
        })
        it('adds bonus points after first roll if a strike occurred before', function () {
          expect(game.score).toEqual(20)
        })

        it('adds bonus points after second roll if a strike occurred before', function () {
          game.updateScore(3)
          expect(game.score).toEqual(26)
        })
      })
    })

    describe('third frame', function(){
      describe('when two strikes in a row ocurred before', function () {
        beforeEach(function () {
          set = [10, 10, 3]
          set.forEach(function (points){
            game.updateScore(points)
          })
        })
        it('adds points + bonus after first roll when two strikes in a row', function() {
          expect(game.score).toEqual(39)
        })

        it('adds points + bonus after second roll when two strikes in a row', function() {
          game.updateScore(3)
          expect(game.score).toEqual(45)
        })
      })
    })

    describe('test game from instructions', function(){
      beforeEach(function () {
        set = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
        set.forEach(function (points){
          game.updateScore(points)
        })
      })
      it('has a final score of 133', function() {
        expect(game.score).toEqual(133)
      })
    })

    describe('perfect game', function(){
      beforeEach(function () {
        for (i = 0; i < 12; i++) {
          game.updateScore(10)
        }
      })
      it('has a score of 300', function() {
        expect(game.score).toEqual(300)
      })
    })
  })

  describe('#updatePins', function () {
    it('increases the number of pins that the user wants to knock down', function () {
      game.increasePins()
      expect(game.pins).toEqual(1)
    })
  })
})
