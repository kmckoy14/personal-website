import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
          <div className="container">
              <nav>
                  <div className={styles.logo}>
                      <a href="">Keaton McKoy</a>
                  </div>
                  <div className={styles.menu}>
                      <a className={styles.menu_items} href="#about">About</a>
                      <a className={styles.menu_items} href="#projects">Projects</a>
                      <a className={styles.menu_items} href="#contact">Contact</a>
                      <a className={styles.menu_items} href="https://github.com/kmckoy14">GitHub</a>
                  </div>
              </nav>
        </div>
          
      
    </header>
  )
}

export default Header
