$(document).ready(function() {

  var frames = []
  var n
  var game = new Bowling ()
  var set

  function populate_frames_headings (n) {
    for(i = 1; i <= n; i++) {
      frames.push(i)
    }
  }

  function fill_table_skeleton () {
    populate_frames_headings(12)
    frames.forEach(function(frame){
      $( "#frames" ).append(`<th id='frame'>${frame}</th>`)
      $( "#1Roll" ).append(`<td id='roll1-${frame}'>-</td>`)
      $( "#2Roll" ).append(`<td id='roll2-${frame}'>-</td>`)
    })
  }

  function updatePins () {
    $( "#pins" ).html(`${game.pins}`)
  }

  function fill_rolls () {
    for(i = 1; i <= game.scoreCard.length - 2; i++){
      $(`#roll1-${i}`).html(`${game.scoreCard[i + 1][0]}`)
      $(`#roll2-${i}`).html(`${game.scoreCard[i + 1][1]}`)
    }
  }

  $( "#increasePins" ).click(function() {
    game.increasePins()
    updatePins()
  })

  $( "#Roll" ).click(function() {
    points = game.pins
    game.updateScore(points)
    fill_rolls ()
  })

  updatePins()
  fill_table_skeleton()
})
