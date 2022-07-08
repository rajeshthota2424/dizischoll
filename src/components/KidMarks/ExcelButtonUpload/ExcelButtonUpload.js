import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import './ExcelButtonUpload.css'

const ExcelUploadButton = () => {
  const [excelUploadPopupShow, setExcelUploadPopup] = useState(false);

  const handleClose = () => setExcelUploadPopup(false);
  const handleShow = () => setExcelUploadPopup(true);

  return (
    <>
      <Button
        className="excel-upload-button"
        variant="primary"
        onClick={handleShow}
      >
        Excel Upload
      </Button>

      <Modal
        className="excel-upload-modal"
        show={excelUploadPopupShow}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Excel Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="excel-upload-green-text">
            Please Take Reference of Sample File Before Uploading Marks
          </p>
          <button type="button" className="excel-upload-modal-sample-file-btn">
            {/* to acess public folder, to link or adress any file in public folder you dont need any path, direct
            file name will be addressed to public folder path */}
            <Link
              className="excel-download-btn-link"
              to="/markssheet.xlsx"
              target="blank"
              download
            >
              Sample File
            </Link>
          </button>
          <br />
          <div className="choose-file-btn-text-container">
            <input type="file" className="excel-upload-modal-choose-file-btn" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="excel-upload-button" onClick={handleClose}>
            Update Marks
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExcelUploadButton;