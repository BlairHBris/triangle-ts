interface ITriange {
    isEquilateral: boolean
    isIsosceles: boolean
    isScalene: boolean
}

export class Triangle {
    side1: number
    side2: number
    side3: number

    constructor(side1: number, side2: number, side3: number) {
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    get sideRules() {
        return (
            (this.side1 + this.side2) > this.side3 && 
            (this.side1 + this.side3) > this.side2 && 
            (this.side3 + this.side2) > this.side1
        )
    }

    get isTriangle() {
        return( 
            this.sideRules &&
            this.side1 > 0 && 
            this.side2 > 0 && 
            this.side3 > 0
        )
    }

    get isEquilateral() {
        return(
            this.isTriangle && 
            this.side1 === this.side2 && 
            this.side1 === this.side3
        )
    }

    get isIsosceles() {
        return(
            this.isTriangle && 
            (this.side1 === this.side2 || 
            this.side1 === this.side3 || 
            this.side2 === this.side3)
        )
    }

    get isScalene() {
        return(
            this.isTriangle && 
            !(this.side1 === this.side2 || 
            this.side1 === this.side3 || 
            this.side2 === this.side3)
        )
    }
}

/*import { truncate } from "fs"

export class Triangle {
    sideOne: number
    sideTwo: number
    sideThree: number
    isEquilateral: boolean | undefined
    isIsosceles: boolean | undefined
    isScalene: boolean | undefined
    constructor(sideOne: number, sideTwo: number, sideThree: number) {
        this.sideOne = sideOne
        this.sideTwo = sideTwo
        this.sideThree = sideThree
        if(sideOne > 0 && sideTwo > 0 && sideThree > 0 && sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree > sideOne){
            if(sideOne == sideTwo && sideOne == sideThree && sideTwo == sideThree){
                this.isEquilateral = true
                this.isIsosceles = true
                this.isScalene = false
            } else if(sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree) {
                this.isEquilateral = false
                this.isIsosceles = true
                this.isScalene = false
            } else if(sideOne !== sideTwo && sideOne !== sideThree && sideTwo !== sideThree){
                this.isEquilateral = false
                this.isIsosceles = false
                this.isScalene = true
            }
        } else{
            this.isEquilateral = false
            this.isIsosceles = false
            this.isScalene = false
        }
    }
} 
*/