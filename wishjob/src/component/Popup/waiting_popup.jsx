// WaitingPopup.jsx
import React from "react";



const WaitingPopup = ({ onClose, onConfirm }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}></div>
        <div style={styles.modalBody}>
          <h3>기업 이름의</h3>
          <p>예상 대기 시간은 <span style={{ color: "red" }}>30분</span> 입니다.</p>
          <p>대기 하시겠습니까?</p>
          <div style={styles.buttonContainer}>
            <button style={styles.confirmButton} onClick={onConfirm}>확인</button>
            <button style={styles.cancelButton} onClick={onClose}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 인라인 스타일 정의
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  confirmButton: {
    backgroundColor: "#FFD700", // 황금색 버튼
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  cancelButton: {
    backgroundColor: "#ccc", // 회색 버튼
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default WaitingPopup;