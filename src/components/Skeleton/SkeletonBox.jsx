import React from 'react'
import Skeleton from './Skeleton'

function SkeletonBox() {
   const list = new Array(20).fill(0);
   return (
      <div className="skelton_box">
         {
            list.map((_, index) => (
               <Skeleton key={index}/>
            ))
         }
      </div>
   )
}

export default SkeletonBox