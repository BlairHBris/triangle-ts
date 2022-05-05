import { truncate } from "fs"

export class Triangle {
    sideOne: number
    sideTwo: number
    sideThree: number
    isEquilateral: boolean
    isIsosceles: boolean
    isScalene: boolean
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
