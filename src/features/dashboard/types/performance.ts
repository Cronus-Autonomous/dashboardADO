export interface CPSBreakdown {

    category:string

    weight:number

    score:number

}

export interface CPS {

    current:number

    variation:number

    classification:string

    breakdown:CPSBreakdown[]

}