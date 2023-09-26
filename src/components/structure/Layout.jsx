import { Menu } from "./Menu";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}
