import React from 'react'
import pubsub from "pubsub-js"
import { useEffect } from 'react'
export default function NotFound() {
  useEffect(()=>{
    pubsub.publish("changeMenuSelect")
  },[])
  return (
    <div>
      <h1>

      NotFound
      </h1>
      </div>
  )
}
