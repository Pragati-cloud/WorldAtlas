import { useEffect, useTransition } from "react";

export const Countries =() => {
const [isPending, startTransition] =useTransition();

useEffect(()=>{
  startTransition(async ()=>{
    const res = await getCountryData();
    console.log(res);
  })
  
}, [])

  return (
    <h1>Country</h1>
  )
};