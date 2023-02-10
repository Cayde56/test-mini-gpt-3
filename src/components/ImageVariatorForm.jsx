import { useContext, useState, useEffect } from "react";
import axios from "axios";
import ImageTable from "./ImageTable";
import { Context } from "./Context";
import fs from "fs";

export function ImageVariatiorForm() {
  const [nImages, setNImages] = useState(1);
  const [image, setImage] = useState(undefined);
  const [preview, setPreview] = useState("");
  const [imageName, setImageName] = useState("");
  const { setUrls } = useContext(Context);
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    if (imageBase64 !== "") {
      setUrls(Array(10).fill(`data:image/png;base64,${imageBase64}`));
    }
    setImageName(cutFilename(imageName));
  }, [imageBase64, imageName]);

  const cutFilename = (filename) => {
    if (filename.length > 20)
      return `${filename.substring(0, 20)}...${filename.split(".").pop()}`;
    else return filename;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof image === "undefined") {
      return alert("Carge una imagen primero");
    }

    var res = {};

    const formData = new FormData();
    formData.append("img", image);
    formData.append("nImages", nImages);

    try {
      res = await axios.post("http://localhost:9000/api/save-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.imgInfo.code === "SUCCESS") {
        // console.clear();
        // console.table(res.data.queryFind);
        // console.table(res.data.imgInfo);
        setImageBase64(res.data.imageBase64);
        return;
      }
    } catch (error) {
      console.error(error);
      if (error.code === "ERR_NETWORK") alert("Error de conexión");
      else if (error.code === "ERR_BAD_REQUEST")
        alert("Error, página no encontrada");
    }
  };

  const handleChangeImg = (e) => {
    if (e.target.files[0].name.split(".").pop() !== "png") {
      return alert("Carge una imagen .png");
    }

    if (e.target.files[0].size > 4000000) {
      return alert("El tamaño de la imagen debe ser menor a 4MB");
    }

    if (typeof e.target.files[0] !== "undefined") {
      setImageName(e.target.files[0].name);
      setImage(e.target.files[0]);

      const file = e.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleInputNImages = (e) => {
    if (e.target.value >= 10) {
      setNImages(10);
      return;
    }
    if (e.target.value <= 1) {
      setNImages(1);
      return;
    }
    setNImages(parseInt(e.target.value));
  };

  return (
    <>
      <div className="main-box">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="box"
        >
          <div className="box">
            <label
              htmlFor="img"
              className="label-img file-input"
              id="file-input-label-id"
            >
              <input
                type="file"
                id="img"
                accept=".png"
                name="img"
                onChange={handleChangeImg}
              />
            </label>
          </div>
          <div className="box">
            <label className="label-img-name" id="file-name">
              {imageName}
            </label>
          </div>
          <div className="box">
            <label className="label-number">
              Número de imágenes (1-10):
              <input
                type="number"
                name="nImages"
                min="1"
                max="10"
                value={nImages}
                onInput={handleInputNImages}
              />
            </label>
          </div>
          <div className="box">
            <input type="submit" value="Crear" className="btn btn-primary" />
          </div>
        </form>

        <table className="show-img">
          <tbody>
            <tr>
              <td>
                <figure>
                  {preview && <img className="preview" src={preview} />}
                  {preview && (
                    <figcaption className="preview-image-caption">
                      Vista previa
                    </figcaption>
                  )}
                </figure>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ImageTable />
    </>
  );
}
