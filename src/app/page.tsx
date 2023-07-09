"use client"
import { data } from "@/data";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div>
      {data.continents.map(({name,id}:{name:string,id:number})=><div onClick={()=>{
      router.push(`/${id}`)}}>
        {name}
      </div>)}
    </div>
  )
}
