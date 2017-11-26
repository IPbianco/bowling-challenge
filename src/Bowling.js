var i
var j

function Bowling () {
  this.score = 0
  this.scoreCard = [[0,0], [0,0]]
  this.frame = 2
  this.roll = 0
}

Bowling.prototype.frameNumber = function () {
  return this.frame
}

Bowling.prototype.rollNumber = function () {
  return this.roll
}

Bowling.prototype.isFirstRoll = function () {
  return this.roll == 0
}

Bowling.prototype.isStandardFrames = function () {
  return this.frame <= 11
}

Bowling.prototype.strikeOrSpareBefore = function () {
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

Bowling.prototype.changeFrameOrRoll = function (points) {
  if (points == 10) {
    this.changeFrame()
  } else {
    this.changeRoll()
  }
}

Bowling.prototype.updateScore = function (points) {

  i = this.frameNumber()
  j = this.rollNumber()

  if (this.isStandardFrames()) {

    switch (this.rollNumber()) {
      case 0:
        this.scoreCard.push([points, 0])
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
        this.scoreCard[i][1] = points
        if (this.strikeBefore()) {
          this.addPoints(points * 2)
        } else {
          this.addPoints(points)
        }
        this.changeFrame()
    }

  } else if (this.frame == 12) {

    switch (this.rollNumber()) {
      case 0:
        this.scoreCard.push([points, 0])
        if (this.strikeBeforeAndBeforeLast()) {
          this.addPoints(points * 2)
        } else {
          this.addPoints(points)
        }
        this.changeFrameOrRoll(points)
        break;
      case 1:
        this.scoreCard[i][1] = points
        this.addPoints(points)
        this.changeFrame()
    }

  } else {
      this.scoreCard.push([points, 0])
      this.addPoints(points)
    }
  }
