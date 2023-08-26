import cv2
import numpy as np

cap = cv2.VideoCapture("highway.mp4")

img = cv2.imread("dupa.png")

object_detector = cv2.createBackgroundSubtractorMOG2(history=100, varThreshold=50)

while True:
    ret, frame = cap.read()

    roi = cv2.addWeighted(frame, 1, img, 1, 1)

    mask = object_detector.apply(roi)
    _, mask = cv2.threshold(mask, 160, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for cnt in contours:
        # Calculate area and remove small elements
        area = cv2.contourArea(cnt)
        if area > 600:
            x, y, w, h = cv2.boundingRect(cnt)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 3)
            objectX = x
            objectY = y
            objectXW = x + w
            objectYH = y + h

            print(frame.shape)

            cachedObject = frame[objectY:objectYH, objectX:objectXW]
            # cv2.imwrite("cos.png", cachedObject)

    cv2.imshow("frame", frame)

    key = cv2.waitKey(30)
    if key == 27:
        break

cap.release()
cv2.destroyAllWindows()
