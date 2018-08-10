function produceDrivingRange(distance){
  return function(start, end){
    const result = Math.abs(figureBlock(start) - figureBlock(end))
    if (distance >= result){
      return `within range by ${Math.abs(distance - result)}`
    }
    else{
      return `${Math.abs(distance - result)} blocks out of range`
    }
  }

  function figureBlock(block){
    return parseInt(block, 10)
  }

}

function produceTipCalculator(percentage){
  return function(distance){
    return distance *(percentage)
  }
}

function createDriver(){
  let id = 0

  return class{
    constructor(name){
    this.name = name
    this.id = ++id
  }
  }

}
