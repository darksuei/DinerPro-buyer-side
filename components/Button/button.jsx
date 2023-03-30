export default function Button({ background, Title, _width, func }) {
  return (
    <div
      onClick={func}
      style={{
        backgroundColor: `var(${background})`,
        width: _width ? `${_width}px` : "30px",
        padding: ".5rem 1rem",
        borderRadius:"10px",
        color: "#fff",
        cursor:"pointer"
        ":hover": {
            backgroundColor: "#555",
          },
      }}>
      <p>{Title}</p>
    </div>
  );
}
