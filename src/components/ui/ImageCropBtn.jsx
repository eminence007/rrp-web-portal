import React, { useState, useRef, useCallback } from "react";
import { Modal, Button, Form, Stack } from "react-bootstrap";
import Cropper from "react-easy-crop";
import { AiOutlineRotateRight } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { getCroppedImg } from "../../utils/canvasUtil";
import "./ImageCropBtn.css";

const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};
const ImageCropBtn = (props) => {
  const containerheight = "100%";
  const style = {
    containerStyle: {
      position: "relative",
      top: "0",
      width: "calc(100% - 2px)",
      height: containerheight,
      overflow: "hidden",
      display: "flex",
    },
    mediaStyle: { height: "100%", width: "100%", display: "block" },
    cropAreaStyle: { width: "50%", height: "50%" },
  };
  const inputRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [rotation, setRotation] = useState(0);


  const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const handleSave = useCallback(async () => {
    try {
      const croppedPic = await getCroppedImg(
        imageFile,
        croppedAreaPixels,
        rotation
      );
      props.onSave(croppedPic);
      setShowModal(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      handleShow();
      setImageFile(imageDataUrl);
    }
  };
  const handleRotation = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };
  return (
    <>
      <Button
        variant="secondary"
        onClick={() => {
          inputRef.current.click();
        }}
        className="d-flex align-items-center"
      >
        <FiUpload
          className="mx-auto"
          onChange={() => {
            setCrop({ x: 0, y: 0 });
            setZoom(1);
            setCroppedAreaPixels(null);
            setRotation(0);
            setImageFile(null);
          }}
        />
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        value=""
        onChange={handleFileChange}
        hidden
      />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crop Image</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Cropper
            image={imageFile}
            crop={crop}
            zoom={zoom}
            aspect={1}
            rotation={rotation}
            onCropChange={setCrop}
            onCropComplete={handleCropComplete}
            onZoomChange={setZoom}
           // style={style}
            restrictPosition={false}
          />
        </Modal.Body>
        <Modal.Footer>
          <Stack gap={3}>
            <Form.Range
              value={zoom}
              min={0.75}
              max={1.25}
              step={0.01}
              onChange={(e) => setZoom((zoom)=>e.target.value)}
            />
            <Button variant="light" block onClick={handleRotation}>
              <AiOutlineRotateRight size="1.5rem" />
            </Button>
            <Button variant="primary" block onClick={handleSave}>
              Save
            </Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageCropBtn;
