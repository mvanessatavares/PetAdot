import styles from './img.module.css';
import gatoo from '../../components/assets/gatoo.png';
import dog from '../../components/assets/dog.png';



const Img = () => {

  return (
    <div className={styles.te_container}>

<div className={styles.gato}>
      <img id="imagem" src={gatoo}></img>
      </div>
      <div className={styles.dog}>
      <img id="imagem" src={dog}></img>

      </div>
    
      </div>
  

  );
};

export default Img;