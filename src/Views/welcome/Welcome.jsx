import styles from './welcome.module.css'

import { Link } from 'react-router-dom'
export default function Welcome() {
  return (
    <>
      <div className={styles.welcome_body}>
        <div className={styles.welcome_contimg}>
          <img
            src='https://erp.easyhotel.pe/build/assets/easy-hotel-lettermark-nigth-6243bcd1.svg'
            alt=''
          />
        </div>
        <div className={styles.welcome_contelemets}>
          <div className={styles.welcome_contbutton}>
            <Link className={styles.welcome_link} to={'/login'}>
              Iniciar sesión
            </Link>

            <Link className={styles.welcome_link} to={'/registro'}>
              Registrarme
            </Link>
          </div>
          <Link className={styles.welcome_link} to={'/recuperar-contraseña'}>
            Recuperar contraseña
          </Link>
        </div>
      </div>
    </>
  )
}
