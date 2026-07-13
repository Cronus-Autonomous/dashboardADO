import { useEffect,useState } from "react"

import { getCPS } from "../../lib/api/performance"

import type { CPS } from "../dashboard/types/performance"

export function useCPS(): CPS[] | undefined {

    const [data,setData]=useState<CPS[]>()

    useEffect(()=>{

        getCPS().then(setData)

    },[])

    return data

}