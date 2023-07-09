import { data } from '@/data'
import React from 'react'

const Page = ({params} : {params:{locationId:string}}) => {
    const placeDetails = data?.continents.find(({id}:{id:number})=>id.toString()===params.locationId)
  return (
    <div>
        {params.locationId}
        
    </div>
  )
}

export default Page