import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

function Spinner() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="sweet-loading"
    >
      <ScaleLoader color="tomato" size={150} />
    </div>
  );
}

export default Spinner;
