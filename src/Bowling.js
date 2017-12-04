var i
var j

function Bowling () {
  this.score = 0
  this.scoreCard = [[0,0], [0,0]]
  this.frame = 2
  this.roll = 0
  this.pins = 0
}


Bowling.prototype.isFirstRoll = function () {
  return this.roll == 0
}

Bowling.prototype.isStandardFrames = function () {
  return this.frame <= 11
}

Bowling.prototype.strikeOrSpareBefore = function () {
  if (this.scoreCard[i-1][0] + this.scoreCard[i-1][1] == '10-') return true
  return this.scoreCard[i-1][0] + this.scoreCard[i-1][1] == 10
}

Bowling.prototype.strikeBefore = function () {
  return this.scoreCard[i-1][0] == 10
}

Bowling.prototype.strikeBeforeLast = function () {
  return this.scoreCard[i-2][0] == 10
}

Bowling.prototype.strikeBeforeAndBeforeLast = function () {
  return this.scoreCard[i-1][0] == 10 & this.scoreCard[i-2][0] == 10
}

Bowling.prototype.addPoints = function (points) {
  this.score += points
}

Bowling.prototype.changeFrame = function () {
  this.frame += 1
  this.roll = 0
}

Bowling.prototype.changeRoll = function () {
  this.roll = 1
}

Bowling.prototype.isEleventhFrame = function () {
  return this.frame == 12
}

Bowling.prototype.isTwelfthFrame = function () {
  return this.frame == 13
}

Bowling.prototype.pointsExceedTen = function (points) {
  return this.scoreCard[i][0] + points > 10
}

Bowling.prototype.changeFrameOrRoll = function (points) {
  if (points == 10) {
    this.changeFrame()
  } else {
    this.changeRoll()
  }
}

Bowling.prototype.increasePins = function () {
  if (this.pins < 10) {
    this.pins++
  }
  else {
    this.pins = 0
  }
}

Bowling.prototype.updateScore = function (points) {

  i = this.frame
  j = this.roll

  if (this.isStandardFrames()) {

    switch (this.roll) {
      case 0:
        this.scoreCard.push([points, '-'])
        if (this.strikeOrSpareBefore()) {
          if (this.strikeBefore()) {
            if (this.strikeBeforeLast()) {
              this.addPoints(points * 3)
            } else {
              this.addPoints(points * 2)
            }
          } else {
            this.addPoints(points * 2)
          }
        } else {
          this.addPoints(points)
        }
        this.changeFrameOrRoll(points)
        break;
      case 1:
        if (this.pointsExceedTen(points)) points = 10 - this.scoreCard[i][0]
        this.scoreCard[i][1] = points
        if (this.strikeBefore()) {
          this.addPoints(points * 2)
        } else {
          this.addPoints(points)
        }
        this.changeFrame()
    }

  } else if (this.isEleventhFrame() && this.strikeOrSpareBefore()) {

    switch (this.roll) {
      case 0:
        this.scoreCard.push([points, '-'])
        if (this.strikeBeforeAndBeforeLast()) {
          this.addPoints(points * 2)
        } else {
          this.addPoints(points)
        }
        this.changeFrameOrRoll(points)
        break;
      case 1:
        if (this.pointsExceedTen(points)) points = 10 - this.scoreCard[i][0]
        this.scoreCard[i][1] = points
        this.addPoints(points)
        this.changeFrame()
    }

  } else if (this.isTwelfthFrame() && this.strikeBeforeAndBeforeLast()){
      this.scoreCard.push([points, '-'])
      this.addPoints(points)
      this.changeFrame()
    }
}
