from asyncio import constants
import time
import cv2

selectedCameras = {0: False, 1: False, 2: False, 3: False}


class Tracker:
    object_detector = cv2.createBackgroundSubtractorMOG2(history=100, varThreshold=80)

    def __init__(self, cap, img, numberOfCamera) -> None:
        self.cap = cap
        self.img = img
        self.detects_objects = {}
        self.boxes = []
        self.numberOfCamera = numberOfCamera

    def selectConnectBoxes(self, data: list):
        boxes = data
        index = 0
        while index < len(boxes):
            for idx, box in enumerate(boxes):
                if idx != index:
                    a, b, c, d = boxes[index]
                    corners = [(a, b), (a + c, b), (a + c, b + d), (a, b + d)]
                    for x in corners:
                        if (
                            box[0] < x[0]
                            and x[0] < box[0] + box[2]
                            and box[1] < x[1]
                            and x[1] < box[1] + box[3]
                        ):
                            firstBox = box
                            secondBox = boxes[index]
                            boxes.remove(boxes[index])
                            boxes.remove(box)

                            boxX = (
                                firstBox[0]
                                if firstBox[0] < secondBox[0]
                                else secondBox[0]
                            )

                            boxY = (
                                firstBox[1]
                                if firstBox[1] < secondBox[1]
                                else secondBox[1]
                            )

                            width = (
                                firstBox[0] + firstBox[2] - boxX
                                if firstBox[0] + firstBox[2]
                                > secondBox[0] + secondBox[2]
                                else secondBox[0] + secondBox[2] - boxX
                            )

                            height = (
                                firstBox[1] + firstBox[3] - boxY
                                if firstBox[1] + firstBox[3]
                                > secondBox[1] + secondBox[3]
                                else secondBox[1] + secondBox[3] - boxY
                            )

                            boxes.append((boxX, boxY, width, height))

                            index = 0
                            break

                    else:
                        continue
                    break
            index += 1
        return boxes

    def addContours(self, contours):
        boxes = []
        for cnt in contours:
            area = cv2.contourArea(cnt)
            if area > 150:
                boxes.append(cv2.boundingRect(cnt))
        return boxes

    def track(self):
        success, frame = self.cap.read()

        imageMask = cv2.addWeighted(frame, 1, self.img, 1, 1)
        mask = self.object_detector.apply(imageMask)

        _, mask = cv2.threshold(mask, 160, 255, cv2.THRESH_BINARY)
        contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

        contour_boxes = self.addContours(contours)
        boxes = self.selectConnectBoxes(contour_boxes)

        self.boxes = boxes

        return frame

    def refreshDetectedObjects(self, moveDetectionArea):
        founded = False
        for obj in list(self.detects_objects):
            if self.detects_objects[obj]["deathTime"] < time.time():
                del self.detects_objects[obj]

        for obj in self.detects_objects:
            if self.detects_objects[obj]["bornTime"] - time.time() < -10:
                founded = True

        for box in list(moveDetectionArea):
            for obj in list(self.detects_objects):
                if (
                    len(
                        self.selectConnectBoxes(
                            [box, self.detects_objects[obj]["area"]]
                        )
                    )
                    < 2
                ):
                    self.detects_objects[obj]["area"] = box
                    self.detects_objects[obj]["deathTime"] = time.time() + 5

                    break
            else:
                self.detects_objects[f"object{time.time()}"] = {
                    "area": box,
                    "bornTime": time.time(),
                    "deathTime": time.time() + 5,
                }

        selectedCameras[self.numberOfCamera] = founded

    def moveDetection(self):
        frame = self.track()
        moveDetectionArea = []
        for x, y, w, h in self.boxes:
            moveDetectionArea.append((x - 100, y - 100, w + 200, h + 200))

        moveDetectionArea = self.selectConnectBoxes(moveDetectionArea)

        self.refreshDetectedObjects(moveDetectionArea)

        return frame
