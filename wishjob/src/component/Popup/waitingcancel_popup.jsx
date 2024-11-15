import React from "react";

const WaitingCancelPopup = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.modalBody}>
          <h3>취소하시겠습니까?</h3>
          <div style={styles.buttonContainer}>
            <button style={styles.confirmButton} onClick={onClose}>
              확인
            </button>
            <button style={styles.confirmButton} onClick={onClose}>
              취소
            </button>
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
    backgroundColor: "rgba(0, 0, 0, 0.2)", // 배경 투명도를 낮춤
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: "8px",
    width: "300px", // 팝업 너비를 늘림
    padding: "20px", // 전체 패딩을 늘려 내용이 넓어지도록 함
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
    overflow: "hidden",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  confirmButton: {
    backgroundColor: "#FFD700", // 황금색 버튼
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "5px",
  },
};

export default WaitingCancelPopup;
