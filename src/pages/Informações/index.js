import styles from "./info.module.css";
import ongs from "../../components/assets/ongs.png"
import { FaFacebook, FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Informações = () => {
  return (
    <div className={styles.info}>
        
      
      <h1>Informações</h1>
      <p>A amo patinhas trabalha com transparência, confiança e comprometimento. <br/>
        Convidamos você a se juntar a nós e ajudar a fazer a mudança acontecer.<br/>
        Conheça um pouco mais da instituição, clique no botão seja um voluntário e venha conhecer a organização.
        </p>
       

        <img id="imagem" src={ongs}></img>

        <div className={styles.redes}>
          <h3>Nossas redes:</h3>
        <a href="">
        <FaFacebook size={45}/> </a>

        <a href="">
        <FaInstagram  size={45}/> </a>
        </div>


        <a href="mailto:seuemail@example.com">
        <button>Seja um voluntário</button>
      </a>

    
    
    </div>
  );
};

export default Informações;
