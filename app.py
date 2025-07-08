#from model.processing import object_detection_api
from flask import Flask, render_template, request
import numpy as np

from ultralytics import YOLO
import argparse
import io
import os
from PIL import Image
import datetime

import torch
from flask import Flask, render_template, request, redirect
import io
from operator import truediv
import os
import json
from PIL import Image
import pandas as pd
import numpy as np
import pickle

import random
import torch
from flask import Flask, jsonify, url_for, render_template, request, redirect


import smtplib 
from email.message import EmailMessage
from datetime import datetime
from werkzeug.utils import secure_filename
import sqlite3

import smtplib 
from email.message import EmailMessage
from datetime import datetime

import pathlib
temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath

app = Flask(__name__)
app.config["PATH_TO_UPLOAD"] = os.path.join("static", "img")

RESULT_FOLDER = os.path.join('static')
app.config['RESULT_FOLDER'] = RESULT_FOLDER
DATETIME_FORMAT = "%Y-%m-%d_%H-%M-%S-%f"

model = torch.hub.load("ultralytics/yolov5", "custom", path = "best.pt", force_reload=True)

model.eval()
model.conf = 0.5  
model.iou = 0.45  

from io import BytesIO


@app.route('/index')
def index():
    return render_template('index.html')

@app.route("/predict", methods=["POST","GET"])
def predict():
    if request.method == 'POST':
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files.get('file')
        if not file:
            return
    
        print('Model 5')
        img_bytes = file.read()
        img = Image.open(io.BytesIO(img_bytes))
        results = model(img, size=415)
        results.render()  
        for img in results.render():
            img_base64 = Image.fromarray(img)
            img_base64.save("static/image0.jpg", format="JPEG")
        return redirect("static/image0.jpg")
    
    
    return render_template('index.html')
        
    
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/logon')
def logon():
    return render_template('register.html')

@app.route('/login')
def login():
    return render_template('login.html')


@app.route("/signup")
def signup():
    global otp, username, name, email, number, password
    username = request.args.get('user','')
    name = request.args.get('name','')
    email = request.args.get('email','')
    number = request.args.get('mobile','')
    password = request.args.get('password','')
    con = sqlite3.connect('signup.db')
    cur = con.cursor()
    cur.execute("insert into `info` (`user`,`email`, `password`,`mobile`,`name`) VALUES (?, ?, ?, ?, ?)",(username,email,password,number,name))
    con.commit()
    con.close()
    return render_template("login.html")
    



@app.route("/signin")
def signin():

    mail1 = request.args.get('user','')
    password1 = request.args.get('password','')
    con = sqlite3.connect('signup.db')
    cur = con.cursor()
    cur.execute("select `user`, `password` from info where `user` = ? AND `password` = ?",(mail1,password1,))
    data = cur.fetchone()

    if data == None:
        return render_template("login.html")    

    elif mail1 == str(data[0]) and password1 == str(data[1]):
        return render_template("index.html")
    else:
        return render_template("register.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/notebook")
def notebook1():
    return render_template("Notebook.html")


if __name__ == "__main__":
    
    app.run(debug=True)  # debug=True causes Restarting with stat
