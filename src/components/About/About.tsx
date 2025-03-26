import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={styles.about_title}>About Me</h2>
        <div className={styles.about_content}>
          <div className={styles.about_image}>
            <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-1/279100928_5185864498142382_6444060920306370064_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=HgRX-wpJShEQ7kNvgEYZJW3&_nc_oc=AdnlQ-_YJ9QxnUhsM34nufA-XB0LXv3USvmOCaDdj_K_VO_-qV6Qj8sMjh-31OBCM1s&_nc_zt=24&_nc_ht=scontent-lax3-1.xx&_nc_gid=Ku6Jw9bMQVzFL_bB3KSi0Q&oh=00_AYFmhHHvzZJhXdBAxl7msGHmq1VQAqCX74s1FceklG68lQ&oe=67EA3FBA" alt="Placeholder FB Image" />
          </div>
          <div className={styles.about_text}>
            <h3>Hi, I'm Keaton McKoy</h3>
            <p>
              I'm a self-taught software engineer and solutions architect with a passion for building innovative, user-centric applications. My background in social media and marketing gives me a strong eye for intuitive UI design, enhancing user experience through thoughtful development.
            </p>
            <p>
              With experience in brand strategy, product launches, and data-driven decision-making, I excel in high-pressure environments, supporting executive leadership and managing critical projects. Currently seeking software engineering internship opportunities to further apply my skills in coding and web development.
            </p>

            <div className={styles.skills}>
              <h3>Technical Skills</h3>
              <ul className={styles.skills_list}>
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>MongoDB</li>
                <li>Node/Express</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  )
}

export default About
