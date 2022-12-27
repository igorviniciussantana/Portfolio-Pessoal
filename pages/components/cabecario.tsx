import Link from 'next/link'
import styles from '../../styles/Cabecario.module.css'


export default function Cabecario() {
  return (
    <div className={styles.cabecario}>
      <div className={styles.titulo}>
        <h1><Link href="/" className={styles.pagina}>
          <a>Portfólio Pessoal</a>
        </Link></h1>
      </div>
      
      <div className={styles.menu}>
        <h2><Link href="../pagina2" className={styles.pagina}>
          <a>Sobre mim</a>
        </Link></h2>
        <h2><Link href="../pagina3" className={styles.pagina}>
          <a>Projetos</a>
        </Link></h2>
        <h2><Link href="../pagina4" className={styles.pagina}>
          <a>Habilidades</a>
        </Link></h2>
      </div>

      <div className={styles.icon}>
       <button className={styles.botao}><img src="/icone.png"></img></button> 
      </div>

      <div className={styles.card}>
      <div className={styles.menu2}>
        <h2><Link href="../pagina2" className={styles.pagina}>
          <a>Sobre mim</a>
        </Link></h2>
        <h2><Link href="../pagina3" className={styles.pagina}>
          <a>Projetos</a>
        </Link></h2>
        <h2><Link href="../pagina4" className={styles.pagina}>
          <a>Habilidades</a>
        </Link></h2>
      </div>
    </div>
      </div>
  )
}