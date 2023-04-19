import { Skeleton } from 'antd'
import React from 'react'
import './SkeletonLoad.css'
export default function SkeletonLoad() {
    return (

           
                <div style={{ display:"flex"}}>
                    <div style={{ width:"50%"}}>
                    <Skeleton.Image active={true} style={{width:'100%', height: 150}}/>
                <Skeleton
                active = {true}
                className='product-list-skeleton'
                    paragraph={{
                        rows: 3,
                    }}
                />
                    </div>
                    <div style={{ width:"50%"}}>
                    <Skeleton.Image active={true} style={{width:'100%', height:150}}/>
                <Skeleton
                active = {true}
                className='product-list-skeleton'
                    paragraph={{
                        rows: 3,
                    }}
                />
                    </div>
                </div>
    )
}
