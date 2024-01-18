# -*- encoding: utf-8 -*-
"""
====================================
@FileName: app.py
@Author: Ariza
@Last Modified by: Ariza
@Last Modified time: 2024/01/18 13:42:04
====================================
"""

from flask import Flask, render_template, redirect

app = Flask(__name__)


@app.route("/index")
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)