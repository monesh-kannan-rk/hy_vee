"use client"
import Form from "@/components/Form";
import Data from "@/components/Data";
import { useEffect, useState } from "react";

export default function Home() {
  const[name, setName] = useState("")
  const [details, setDetails] = useState({})
  const [showDetailsAnimation, setShowDetailsAnimation] = useState(false);
  useEffect(()=>{
    if(details.name){
      setShowDetailsAnimation(true)
    }
  },[details])
  return (
    <main>
    <div className="bg">
      <h1>Hyvee</h1>
    </div>
    <Form name={name} setName={setName} details={details} setDetails={setDetails} setShowDetailsAnimation={setShowDetailsAnimation}/>
    {showDetailsAnimation && <Data details={details} anime={showDetailsAnimation}/>}
    </main>
  );
}
