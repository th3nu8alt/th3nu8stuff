const tool = new Tool("test")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
  p.setJumpPower(3.85)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}


tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(4,4,4),"#589D3C")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,4)-2, roundTo(brick.position.y,4)-2, roundTo(brick.position.z,4)-4))

}) 
