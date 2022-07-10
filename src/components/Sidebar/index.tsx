import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

interface SidebarLinkProps {
  text: string
  to: string
}

const defaultClassNames = 'text-gray-900 hover:bg-gray-100'
const activeClassNames = 'text-brand bg-gray-100'

function SidebarLink({ text, to }: SidebarLinkProps) {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => `rounded-lg flex items-center p-2 text-base font-normal mb-1 ${isActive ? activeClassNames : defaultClassNames}`}>
        <span className="ml-3">{text}</span>
      </NavLink>
    </li>
  )
}

function Sidebar() {
  return (
    <aside className="fixed w-60 h-screen p-4 shadow-md bg-white">
      <img className="h-10" src={logo} alt="Nova" />

      <ul className="mt-6">
        <SidebarLink text="Nominations" to="/" />
        <SidebarLink text="New nomination" to="new" />
      </ul>
    </aside>
  )
}

export default Sidebar