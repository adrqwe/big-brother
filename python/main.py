from flask import Flask, render_template, Response, request
import cv2

app = Flask(__name__)


def generate_frames(cap):
    while True:
        ## read the camera frame
        success, frame = cap.read()
        if not success:
            break
        else:
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
            generate_frames(
                cap=cv2.VideoCapture(
                    "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=1&subtype=0"
                )
            ),
            mimetype="multipart/x-mixed-replace; boundary=frame",
        )
    except:
        return None


@app.route("/video1")
def video1():
    try:
        return Response(
            generate_frames(
                cap=cv2.VideoCapture(
                    "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=2&subtype=0"
                )
            ),
            mimetype="multipart/x-mixed-replace; boundary=frame",
        )
    except:
        return None


@app.route("/video2")
def video2():
    try:
        return Response(
            generate_frames(
                cap=cv2.VideoCapture(
                    "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=3&subtype=0"
                )
            ),
            mimetype="multipart/x-mixed-replace; boundary=frame",
        )
    except:
        return None


@app.route("/video3")
def video3():
    return Response(
        generate_frames(
            cap=cv2.VideoCapture(
                "rtsp://admin:Zetor7340@192.168.1.36:554/cam/realmonitor?channel=4&subtype=0"
            )
        ),
        mimetype="multipart/x-mixed-replace; boundary=frame",
    )


if __name__ == "__main__":
    app.run(debug=True)
