const brick = world.bricks.find(brick => brick.name === brick)
const destroy = new Tool("Destroy")
Game.on("initialSpawn",p=>{
    p.addTool(destroy)
  })
  tool.on("equipped",p=>{
    brick.clicked((player, secure) => {
        if (!secure){
          brick.destroy()
        }
      })
  })
  
