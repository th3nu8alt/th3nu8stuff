let brick = world.bricks.find(brick => brick.name === 'brick')
let tool = new Tool("Grass")
Game.on("initialSpawn",p=>{
  p.setJumpPower(3.99)
  if (p.ownsAsset(690)) {
    p.addTool(tool)
  }
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}


tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(4,4,4),"#589D3C")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,4)-2, roundTo(brick.position.y,4)-2, roundTo(brick.position.z,4)-4))
    brick.clickable = true
    brick.model = 692
}) 
brick.clicked((player, secure) => {
  if (!secure) return
  brick.destroy()
})
