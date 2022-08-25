/* import Footer from '../../navigation/footer/Footer'
import Header from '../../navigation/header/Header'

 */
import Link from 'next/link'
import styles from './SidebarLayout.module.css'
export interface ISidebarLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start'
}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input type="text" placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default SidebarLayout
