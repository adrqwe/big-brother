import cv2

cap = cv2.VideoCapture(
    "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=1&subtype=0"
)
cap1 = cv2.VideoCapture(
    "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=2&subtype=0"
)


while cap.isOpened():
    ret, frame = cap.read()
    ret1, frame1 = cap1.read()
    cv2.imshow("frame1", frame1)
    cv2.imshow("frame", frame)
    if cv2.waitKey(20) & 0xFF == ord("q"):
        break
cap.release()
cap1.release()
cv2.destroyAllWindows()
