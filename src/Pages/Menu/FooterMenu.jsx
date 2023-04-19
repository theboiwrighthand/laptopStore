import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Link } from "react-router-dom";

export default function FooterMenu() {
    const [bottomImg, SetBottomImg] = useState([])
    useEffect(() => {
        const callAPI = () => {
            fetch(`${process.env.REACT_APP_API}/homepage?populate=*`)
                .then(res => res.json())
                .then((data) => {
                    const arraybottom = data.data.attributes.bottomBanner.data.map((item) => {
                        return item.attributes.url
                    })
                    SetBottomImg(arraybottom)

                })
        }
        callAPI()
    }, [])
    return <>
        <Row>
            <div style={{width:'100%',height:'100%',display:'flex'}}>
            {bottomImg.map((item) => {
                return (<Col span={6}>
                    <Link to='/1'><img key={item} alt="" style={{ objectFit: 'contain', width: '100%', height: '100%', paddingRight: '5px' }} src={`${process.env.REACT_APP_LINK_BACK_END}${item}`}></img></Link>
                </Col>)
            })}
            </div>

        </Row>

    </>
}