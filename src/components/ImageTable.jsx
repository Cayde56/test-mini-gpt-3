import { useContext } from "react";
import { Context } from "../context/Context";

function ImageTable() {
  const { urls } = useContext(Context);

  return (
    <table className="show-img">
      <tbody>
        <tr>
          <td>
            {urls[0] && <img src={urls[0]} />}
          </td>
          <td>
            {urls[1] && <img src={urls[1]} />}
          </td>
          <td>
            {urls[2] && <img src={urls[2]} />}
          </td>
          <td>
            {urls[3] && <img src={urls[3]} />}
          </td>
          <td>
            {urls[4] && <img src={urls[4]} />}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>
            {urls[5] && <img src={urls[5]} />}
          </td>
          <td>
            {urls[6] && <img src={urls[6]} />}
          </td>
          <td>
            {urls[7] && <img src={urls[7]} />}
          </td>
          <td>
            {urls[8] && <img src={urls[8]} />}
          </td>
          <td>
            {urls[9] && <img src={urls[9]} />}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ImageTable;
