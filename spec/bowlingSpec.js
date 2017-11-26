describe('Bowling', function () {

  var game

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
      it('adds 8 points from first roll', function () {
        game.updateScore(8)
        expect(game.score).toEqual(8)
      })

      it('adds 1 point from the second roll', function () {
        game.updateScore(8)
        game.updateScore(1)
        expect(game.score).toEqual(9)
      })
    })

    describe('second frame', function () {
      // describe('whith p')
      it('adds points + bonus after first roll if a spare occurred before', function () {
        game.updateScore(2)
        game.updateScore(8)
        game.updateScore(5)
        expect(game.score).toEqual(20)
      })

      it('adds no bonus points after the second roll if a spare occurred before', function () {
        game.updateScore(2)
        game.updateScore(8)
        game.updateScore(5)
        game.updateScore(3)
        expect(game.score).toEqual(23)
      })

      it('adds bonus points after first roll if a strike occurred before', function () {
        game.updateScore(10)
        game.updateScore(5)
        expect(game.score).toEqual(20)
      })

      it('adds bonus points after second roll if a strike occurred before', function () {
        game.updateScore(10)
        game.updateScore(5)
        game.updateScore(3)
        expect(game.score).toEqual(26)
      })
    })

    describe('third frame', function(){
      it('adds points + bonus after first roll when two strikes in a row', function() {
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(3)
        expect(game.score).toEqual(39)
      })

      it('adds points + bonus after second roll when two strikes in a row', function() {
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(3)
        game.updateScore(3)
        expect(game.score).toEqual(45)
      })
    })

    describe('test game', function(){
      it('from instructions', function() {
        game.updateScore(1)
        game.updateScore(4)
        game.updateScore(4)
        game.updateScore(5)
        game.updateScore(6)
        game.updateScore(4)
        game.updateScore(5)
        game.updateScore(5)
        game.updateScore(10)
        game.updateScore(0)
        game.updateScore(1)
        game.updateScore(7)
        game.updateScore(3)
        game.updateScore(6)
        game.updateScore(4)
        game.updateScore(10)
        game.updateScore(2)
        game.updateScore(8)
        game.updateScore(6)
        expect(game.score).toEqual(133)
      })
    })

    describe('perfect game', function(){
      it('has a score of 300', function() {
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        game.updateScore(10)
        expect(game.score).toEqual(300)
      })
    })
  })
})
