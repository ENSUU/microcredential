from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:Eun$ukim8426@localhost/demoDB'
db = SQLAlchemy(app)

# Define db model
class Data(db.Model):
     __tablename__ = "customers"
     id = db.Column(db.Integer, primary_key=True)
     firstname = db.Column(db.String(120))
     lastname = db.Column(db.String(120))
     email = db.Column(db.String(120), unique = True)
     total = db.Column(db.Numeric)

     def __init__(self, firstname, lastname, email, total):
         self.firstname = firstname
         self.lastname = lastname
         self.email = email
         self.total = total

# Homepage when the application runs.
@app.route("/")

def home():
    return render_template("index.html")

@app.route("/cartPage")

def cart():
    return render_template("cartPage.html")

@app.route("/completedOrder")
def orderComplete():
    return render_template("completedOrder.html")

# Handles the homepage when the form is submitted
# request.method == "POST" is collecting the data of the form when the submit button is clicked.
@app.route("/cartPage", methods=["POST"])
def thankyou():
    if request.method == "POST":
        firstname = request.form["fName"]
        lastname = request.form["lName"]
        email = request.form["email"]
        total = request.form["orderTotal"]
        print(request.form)

    # Last Step: commit - collect and send data to database
    data = Data(firstname, lastname, email, total)
    db.session.add(data)
    db.session.commit() # Execute the data into database

    return render_template("completedOrder.html")

if __name__ == "__main__":
    app.run()
    app.debug = True
