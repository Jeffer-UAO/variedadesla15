import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
      
      </div>

      <div className={styles.mision}>
        
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
       
      </div>

      <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
     
      </div>
    </div>
  );
}
