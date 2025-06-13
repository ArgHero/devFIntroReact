import "./Tarjeta.css";

const styles = {
  border: "1px solid #ccc",
  padding: "20px",
  width: "300px",
  textAlign: "center",
};

function Tarjeta(props) {

    const {nombre,profesion,mensaje} = props;

    return (
    <div style={styles}>
        <h2>{nombre}</h2>
        <h4>{profesion}</h4>
        <p>{mensaje}</p>
    </div>
    );
}

export default Tarjeta;
