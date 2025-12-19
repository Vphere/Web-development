export default function Student(props) {
  return (
    <div style={styles.card}>
      <img src={props.image} style={styles.img} />
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Semester: {props.sem}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "200px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  img: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
};