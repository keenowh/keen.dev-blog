import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const activeClassName = "active"

const StyledNav = styled.nav`
   margin-bottom: 1em;
   max-width: 80%;
   display: block;
   margin: 0 auto;
   @media (min-width: 1080px) {
      max-width: 50%;
   }

   @media (min-width: 520px) {
      display: flex;
      justify-content: space-between;
   }
`

// const StyledList = styled.div`
//    padding: 0;
//    display: flex;
//    flex-wrap: wrap;
//    justify-content: space-around;
//    margin-top: 0;

//    @media (max-width: 520px) {
//       display: flex;
//       flex-direction: column;
//       margin-top: 0.5em;
//       align-content: center;
//    }
// `

const ListElement = styled.div`
   text-align: center;
   font-size: 1.8rem;
   border-radius: 9px;
   padding: 0.5rem 1.5rem;

   border: solid white 3px;
   // @media (max-width: 768px) {
   //    margin-bottom: 10px;
   // }

   @media (min-width: 768px) {
      font-size: 2.2rem;
      padding: 0.5rem 4.5rem;
      // margin-top: 10px;
   }

   &:hover {
      background-color: blue;
   }
`

const NavItem = styled(Link).attrs({
   activeClassName,
})`
   color: white;
   border: none;
   &:hover {
      color: white;
   }

   &:before {
      display: none;

      @media (min-width: 520px) {
         display: inline;
      }
   }

   &.${activeClassName} {
      font-weight: bold;
   }
`

const Nav = () => {
   return (
      <StyledNav>
         <NavItem to="/blog/" activeClassName={activeClassName}>
            <ListElement>/blog</ListElement>
         </NavItem>
         <NavItem to="/projects/" activeClassName={activeClassName}>
            <ListElement>/project</ListElement>
         </NavItem>
         <NavItem to="/about/" activeClassName={activeClassName}>
            <ListElement>/about</ListElement>
         </NavItem>
      </StyledNav>
   )
}

export default Nav
