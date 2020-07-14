import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function SocialFollow() {
  return (
    <div class="social-container">
        <SocialIcon url="https://www.linkedin.com/in/sri-lakshmi-apoorva-namala-223910188/" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://github.com/ApoorvaNamala" style={{ height: 40, width: 40 }} bgColor="black"/>
        <SocialIcon url="https://www.facebook.com/apoorva.namala/" style={{ height: 40, width: 40 }}/>     
    </div>
  );
}