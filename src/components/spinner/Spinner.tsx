import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto 50px auto",
};

function Spinner({
  color = "#05df72 ",
  width = 150,
  height = 30,
}: {
  color?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div>
      <BarLoader
        color={color}
        width={width}
        height={height}
        cssOverride={override}
        aria-label="loading..."
      />
    </div>
  );
}

export default Spinner;
