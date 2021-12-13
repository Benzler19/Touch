import React from 'react'
import { BiWorld } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import '../Styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className = "footer1">
                <a href="#" style={{marginRight:12}}>ติดต่อโฆษณา</a>
                <a href="#" style={{marginRight:12}}>ร่วมงานกับเรา</a>
                <a href="#" style={{marginRight:12}}>ติดต่อเรา</a>
                <a href="#" style={{marginRight:12}}><BiWorld /></a>
                <a href="#" style={{marginRight:12}}><ImFacebook /></a>
                <a href="#" style={{marginRight:12}}><BsTwitter /></a>
                <a href="#" style={{marginRight:12}}><IoLocationSharp /></a>
            </div>


            <div className = "footer2">
                <a href="#" style={{marginRight:12}}>FAQ</a>
                <a href="#" style={{marginRight:12}}>ศูนย์ช่วยเหลือ</a>
                <a href="#" style={{marginRight:12}}>นโยบายความเป็นส่วนตัว</a>
                <a href="#" style={{marginRight:12}}>เงื่อนไขข้อตกลงการใช้บริการ</a>
            </div>
        </div>

           


    )
}

export default Footer