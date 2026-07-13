import cps from "../../mocks/performance/cps.json"

import type { CPS } from "../../features/dashboard/types/performance"

export async function getCPS():Promise<CPS[]> {

    // futuramente

    // return api.get("/performance/cps")

    // cps JSON doesn't fully match CPS type (missing optional fields like weight),
    // cast via unknown to bypass strict structural check when intentional
    return cps as unknown as CPS[]

}