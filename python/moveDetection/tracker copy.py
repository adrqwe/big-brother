import cv2
import numpy as np

cap = cv2.VideoCapture("highway.mp4")

img = cv2.imread("dupa.png")


while True:
    ret, frame = cap.read()

    result = cv2.addWeighted(frame, 1, img, 1, 1)

    cv2.imshow("frame", frame)
    cv2.imshow("frame1", result)

    key = cv2.waitKey(30)
    if key == 27:
        break

cap.release()
cv2.destroyAllWindows()
