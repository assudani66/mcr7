import { data } from '@/data'
import React from 'react'

const Page = ({params} : {params:{locationId:string,placeId:string}}) => {
  // const placeDetails = data?.continents?.countries?.find(({id})=>id.toString()===params.placeId)
  return (
    <div>
      {/* <img className="w-80 h-80" src={placeDetails?.image}/> */}
    </div>
  )
}

export default Page