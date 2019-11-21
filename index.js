// Your code here

class Polygon {
    constructor(sidesArray){
        this.sides = sidesArray
    }

    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce( ((memo, element)=> memo+element), 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.sides.length !== 3){
            return false
        }
        if(!Array.isArray(this.sides)){
            return false
        }
        let sideSums = this.sides.map((side,index)=>side+this.sides[(index+1)%3])
        if(this.sides.filter((side,index)=> side >= sideSums[(index+1)%3] ? true : false).length>0){
            return false
        }
        return true
    }
    sideSums(){ 
        return this.sides.map((side,index)=>side+this.sides[(index+1)%3])
    }

}

class Square extends Polygon {
    get isValid(){
        if (this.sides.every(side=> side === this.sides[0]) ){
            return true
        }
        return false
    }
    get area(){
        return this.sides[0]**2
    }
}
