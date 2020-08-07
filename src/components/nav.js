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

const StyledList = styled.ul`
   padding: 0;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 0;




   @media (max-width: 520px) {
      display: flex;
      flex-direction: column;
      margin-top: 0.5em;
      align-content: center;
   }

`

const ListElement = styled.li`
   display: inline-block;
   padding: 0.5em;
   text-align: center;
   font-size: 1.8rem;
   border-radius: 9px;
   border: solid white 3px;
   max-width: 250px;
    @media (min-width: 300px) {
        font-size: 2.2rem;
        padding-right: 0;
        padding-left: 0;
        margin-top: 10px
    }

//    @media (min-width: 350px) {
//       font-size: 2.2rem;
//    }
   
//    @media (max-width: 350px) {
//     font-size: 2.2rem;
//     margin-top: 10px;
//  }
//    @media (min-width: 520px) {
//       padding: 7px;
//       margin-right: 2rem;
//       font-size: 2.4rem;
//       max-width:  
//    }

   &:after {
      content: " ";
      display: none;
      white-space: pre;

      @media (min-width: 520px) {
         display: inline-block;
      }
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
   padding: 2em;
   &:hover {
      color: white;
   }

   &:before {
      content: "/";
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
            <ListElement>
               <NavItem to="/blog/" activeClassName={activeClassName}>
                  blog
               </NavItem>
            </ListElement>
            <ListElement>
               <NavItem to="/projects/" activeClassName={activeClassName}>
                  project
               </NavItem>
            </ListElement>

            <ListElement>
               <NavItem to="/about/" activeClassName={activeClassName}>
                  about
               </NavItem>
            </ListElement>
         </StyledList>
      </StyledNav>
   )
}

export default Nav
