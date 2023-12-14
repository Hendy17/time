import { HeaderContainer } from "./styles";
import { Timer, Scroll } from 'phosphor-react'

import logoTime from '../../assets/logo-Time.png'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTime} alt=""/>
      <nav>
        <NavLink to="/" title="Time">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}