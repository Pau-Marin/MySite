import styles from "../../styles/About.module.css"

export default function About() {
  return (
    <div>
      <div className={styles.main}>
        <h1>About</h1>
        <p>
          Soy un desarrollador web con experiencia en construir sitios web y
          aplicaciones móviles utilizando tecnologías como React, Node.js y
          MongoDB.
        </p>
      </div>
      <div className={styles.timeline}>
        <ul>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              obcaecati, molestias doloremque necessitatibus sint deserunt
              distinctio quas sapiente, explicabo enim illo itaque, aut cum.
              Expedita voluptatem soluta aspernatur blanditiis praesentium?
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illo
              magnam similique rem possimus nostrum nobis beatae incidunt
              dignissimos aliquid obcaecati cupiditate at molestiae placeat
              quasi qui in consequuntur. Dolor.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
