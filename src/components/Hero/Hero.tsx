import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Software Engineer & Solutions Architech</h1>
        <p>I'm a problem solver with a passion for creating innovative solutions.</p>
        <p>Currently seeking software engineering internship opportunities.</p>
        <div className={styles.hero_buttons}>
          <a href="#work" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      
    </section>
  )
}

export default Hero
