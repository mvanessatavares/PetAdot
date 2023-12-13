import styles from "./styles.module.css"
import ongs from "../../components/assets/ongs.png"
import { Link } from "react-router-dom";
import ong2 from "../../components/assets/ong2.png"
import ong3 from "../../components/assets/ong3.png"

const Ajude = () => {


  console.log('page')
  return (
    <div className={styles.ajuda}>
       
       <h1>Ajude essas ONGs</h1>
       <div className={styles.teste_container}>
       <img id="imagem" src={ongs}></img>
       <p>Amo Patinhas </p>
       <Link Link to="/informacoes">Informações</Link>

       <div className={styles.container2}>
        <img id="imagem" src={ong2}></img>
        <p>Dog sweet Home</p>
        <Link Link to="/">Informações</Link>
       </div>
       <div className={styles.container3}>
       <img id="imagem" src={ong3}></img>
       <p>Pet Store</p>
       <Link Link to="/">Informações</Link>
       </div>
    </div>
  

    </div>

    
  );
};

export default Ajude;