let tool = new Tool("Stone")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}

tool.on("activated",p=>{
    let brick = new Brick(p.position,new Vector3(4,4,4),"#8F8F8F")
    Game.newBrick(brick)
    brick.setPosition(new Vector3(roundTo(brick.position.x,4)-2, roundTo(brick.position.y,4)-2, roundTo(brick.position.z,4)-4))
    brick.clickable = true
}) 
let brick = world.bricks.find(brick => brick.name === 'brick') 
brick.clicked((player, secure) => {
  if (!secure) return
  brick.destroy()
})
