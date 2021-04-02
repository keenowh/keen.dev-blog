import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const activeClassName = "active"

const StyledNav = styled.nav`
   margin-bottom: 1em;

   @media (min-width: 520px) {
      margin-bottom: 2em;
   }
`

const StyledList = styled.div`
   padding: 0;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   margin-top: 0;

   @media (max-width: 520px) {
      display: flex;
      flex-direction: column;
      margin-top: 0.5em;
      align-content: center;
   }
`

const ListElement = styled.div`
   text-align: center;
   font-size: 1.8rem;
   border-radius: 9px;
   border: solid white 3px;
   @media (min-width: 300px) {
      font-size: 2.2rem;
      padding: 0.5rem 6rem;
      width: 25rem;
      margin-top: 10px;
   }

   @media (min-width: 768px) {
      width: 23rem;
   }

   // &:after {
   //    content: " ";
   //    display: none;
   //    white-space: pre;

   //    @media (min-width: 520px) {
   //       display: inline-block;
   //    }
   // }

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
         <StyledList>
            <NavItem to="/blog/" activeClassName={activeClassName}>
               <ListElement>/blog</ListElement>
            </NavItem>
            <NavItem to="/projects/" activeClassName={activeClassName}>
               <ListElement>/project</ListElement>
            </NavItem>
            <NavItem to="/about/" activeClassName={activeClassName}>
               <ListElement>/about</ListElement>
            </NavItem>
         </StyledList>
      </StyledNav>
   )
}

export default Nav
