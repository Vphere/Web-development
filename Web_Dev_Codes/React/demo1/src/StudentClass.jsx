import React, { Component } from "react";

class StudentClass extends Component {
  render() {
    const { name, age, sem, image } = this.props;

    return (
      <div style={styles.card}>
        <img src={image} style={styles.img} />
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Semester: {sem}</p>
      </div>
    );
  }
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

export default StudentClass;