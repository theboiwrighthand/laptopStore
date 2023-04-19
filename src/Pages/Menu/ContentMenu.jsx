import { Col, Row } from 'antd';
import CarouselHome from '../../Components/CarouselHome/CarouselHome';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
export default function ContentMenu() {
    const [imgRight, SetImgRight] = useState([])
    const [imgSub, SetImgSub] = useState([])

    useEffect(() => {
        const callAPI = () => {
            fetch(`${process.env.REACT_APP_API}/homepage?populate=*`)
                .then(res => res.json())
                .then((data) => {
                    const arrayleft = data.data.attributes.rightBanner.data.map((item) => {
                        return item.attributes.url
                    })
                    SetImgRight(arrayleft)
                    const arraysub = data.data.attributes.subBanner.data.map((item) => {
                        return item.attributes.url
                    })
                    SetImgSub(arraysub)
                })
        }
        callAPI()
    }, [])
    return <>
        <div className='Content-Menu'>
            <div className="MegaMenu-Image">
                <div style={{ height: "100%"}} className='MegaMenu-Image-Carousel'>
                    <Row>
                        <Col span={16}>
                            <div style={{ width: "100%", height: "100%"}}>
                                <CarouselHome />                               
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{width:'100%', paddingTop:'10px', paddingRight:'15px'}}>
                            {imgRight.map((item) => {
                                return   <Link to='/1'><img alt='' style={{ objectFit: 'ccover', display: 'block', width: '100%', height: 'auto' }} src={`${process.env.REACT_APP_LINK_BACK_END}${item}`}></img></Link>
                            })}
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='MegaMenu-Image-SubItem'>
                    <Row>
                        <div  style={{display:'flex',width:'100%'}} >
                        {imgSub.map((item) => {
                            return (<Col style={{height:'100%'}} span={8}>
                                <Link to='/1'><img alt='' style={{ objectFit: 'cover', display: 'block', width: '100%', height: 'auto' }} src={`${process.env.REACT_APP_LINK_BACK_END}${item}`}></img></Link>
                            </Col>)
                        })}
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    </>
}