import React from "react"
import Layout from "../components/layout"

import styled from "styled-components"

const WindowContainer = styled.div`
   width: 70%;
   margin: 2rem auto;
   box-shadow: 0 0.25rem 0.5rem #12181e;
   border-radius: 0 0 0.1rem 0.1rem;
`

const WindowBar = styled.div`
   border-radius: 0.5rem 0.5rem 0 0;
   background: midnightblue;
   height: 36px;
   position: relative;
`

const WindowBody = styled.div`
   background: #172b4d;
   padding: 18px;
`

const WindowPre = styled.pre`
   display: block;
   font-family: monospace;
   color: white;
   margin: 1rem 0 0.5rem;
`

const WindowBtnCls = styled.div`
   height: 13px;
   width: 13px;
   border-radius: 50%;
   border: 1px solid #000;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 15px;
   background-color: #ff3b47;
   border-color: #9d252b;
   display: inline-block;
`

const WindowBtnMnm = styled.div`
   height: 13px;
   width: 13px;
   border-radius: 50%;
   border: 1px solid #000;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 35px;
   background-color: #ffc100;
   border-color: #9d802c;
   display: inline-block;
`
const WindowBtnMax = styled.div`
   height: 13px;
   width: 13px;
   border-radius: 50%;
   border: 1px solid #000;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 55px;
   background-color: #00d742;
   border-color: #049931;
   display: inline-block;
`

const WindowCommand = styled.span`
   color: #32c146;
`

const About = () => (
   <Layout>
      <WindowContainer>
         <WindowBar>
            <WindowBtnCls></WindowBtnCls>
            <WindowBtnMnm></WindowBtnMnm>
            <WindowBtnMax></WindowBtnMax>
         </WindowBar>
         <WindowBody>
            <WindowPre>
               $ <WindowCommand>show Overview</WindowCommand>
            </WindowPre>
            <div style={{ color: "white", marginLeft: "2rem" }}>
               Hello! My name is Keen Renzo Ballon and I am based in Malabon,
               Metro Manila. A software developer with main focus is on Back-end
               Development and Systems Administration. I love the idea of
               intermediating between development and operations side of the
               tech industry, automating my way through it as much as possible.
            </div>
            <WindowPre>
               $ <WindowCommand>show resume.pdf</WindowCommand>
            </WindowPre>
            <div style={{ color: "white", marginLeft: "2rem" }}>
               ================
               <br />| <a href="resume.pdf">Resume Page</a> |
               <br />
               ================
            </div>
         </WindowBody>
      </WindowContainer>
   </Layout>
)

export default About
