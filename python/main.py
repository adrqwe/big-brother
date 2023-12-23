import time
import cv2

from flask import Flask, render_template, Response
from moveDetection.tracker import Tracker, selectedCameras

app = Flask(__name__)

mask1 = cv2.imread("./moveDetection/mask/chanel1Mask.png")
mask2 = cv2.imread("./moveDetection/mask/chanel2Mask.png")
mask3 = cv2.imread("./moveDetection/mask/chanel3Mask.png")
mask4 = cv2.imread("./moveDetection/mask/chanel4Mask.png")


camera1 = Tracker(
    cv2.VideoCapture(
        "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=1&subtype=0"
    ),
    mask1,
    numberOfCamera=1,
)
camera2 = Tracker(
    cv2.VideoCapture(
        "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=2&subtype=0"
    ),
    mask2,
    numberOfCamera=2,
)
camera3 = Tracker(
    cv2.VideoCapture(
        "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=3&subtype=0"
    ),
    mask3,
    numberOfCamera=3,
)
camera4 = Tracker(
    cv2.VideoCapture(
        "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=4&subtype=0"
    ),
    mask4,
    numberOfCamera=4,
)


def generate_frames(cap):
    while True:
        time.sleep(0.2)

        frame = cap.moveDetection()
        ret, buffer = cv2.imencode(".jpg", frame)
        frame = buffer.tobytes()

        yield (b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + frame + b"\r\n")


@app.route("/rendervideo0")
def render_video0():
    return render_template("video0.html")


@app.route("/rendervideo1")
def render_video1():
    return render_template("video1.html")


@app.route("/rendervideo2")
def render_video2():
    return render_template("video2.html")


@app.route("/rendervideo3")
def render_video3():
    return render_template("video3.html")


@app.route("/video0")
def video0():
    try:
        return Response(
            generate_frames(camera1),
            mimetype="multipart/x-mixed-replace; boundary=frame",
        )
    except:
        return None


@app.route("/video1")
def video1():
    try:
        return Response(
            generate_frames(camera2),
            mimetype="multipart/x-mixed-replace; boundary=frame",
        )
    except:
        return None


@app.route("/video2")
def video2():
    try:
        return Response(
            generate_frames(camera3),
            mimetype="multipart/x-mixed-replace; boundary=frame",
        )
    except:
        return None


@app.route("/video3")
def video3():
    try:
        return Response(
            generate_frames(camera4),
            mimetype="multipart/x-mixed-replace; boundary=frame",
        )
    except:
        return None


@app.route("/selected/cameras")
def selectCameras():
    return selectedCameras


if __name__ == "__main__":
    app.run(debug=True)
