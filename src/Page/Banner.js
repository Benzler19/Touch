import React from 'react';
import '../Styles/Banner.css';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Img1 from '../img/Img1.jpg';
import Img2 from '../img/Img2.jpg';
import Img3 from '../img/Img3.jpg';
import Img4 from '../img/Img4.jpg';
import Img5 from '../img/Img5.jpg';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Banner() {
    return (
        <div className="banner-bg">
                        <Carousel autoplay>
                            <div>
                                <h3 style={contentStyle}><img src={Img1} alt="" style={{ "width": '1730px', "height": "500px" }} /></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={Img2} alt="" style={{ "width": '1730px', "height": "500px" }} /></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={Img3} alt="" style={{ "width": '1730px', "height": "500px" }} /></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={Img4} alt="" style={{ "width": '1730px', "height": "500px" }} /></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={Img5} alt="" style={{ "width": '1730px', "height": "500px" }} /></h3>
                            </div>
                        </Carousel>
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner