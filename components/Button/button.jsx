import styles from "./button.module.css";

export default function Button({ background, Title, _width, func }) {
  return (
    <div
      className={styles.btn}
      onClick={func}
      style={{
        backgroundColor: `var(${background})`,
        width: _width ? `${_width}px` : "30px",
      }}>
      <p>{Title}</p>
    </div>
  );
}

