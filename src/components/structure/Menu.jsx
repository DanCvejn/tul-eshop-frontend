import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-center p-4 bg-indigo-600">
      <ul>
        <NavLink to={"/"} className="menu-link">Domů</NavLink>
        <NavLink to={"/"} className="menu-link">Produkty</NavLink>
        <NavLink to={"/"} className="menu-link">Kategorie</NavLink>
      </ul>
    </nav>
  )
}
