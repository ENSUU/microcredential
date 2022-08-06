from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:123@localhost/demoDB'
db = SQLAlchemy(app)

# Define db model
class Data(db.Model):
     __tablename__ = "data"
     id=db.Column(db.Integer, primary_key=True)
     email= db.Column(db.String(120), unique = True)

     def __init__(self, email):
         self.email = email

# Homepage when the application runs.
@app.route("/")

def hello():
    return render_template("index.html")

# Handles the homepage when the form is submitted
# request.method == "POST" is collecting the data of the form when the submit button is clicked.
@app.route("/", methods=["POST"])
def thankyou():
    if request.method == "POST":
        email = request.form["email_name"]
        print(request.form)

    # Laat Step: commit - collect and send data to database
    data = Data(email)
    db.session.add(data)
    db.session.commit() # Execute the data into database

    return render_template("thankyou.html")

@app.route("/about")
def aboutUs():
    return "<h1>About Us</h1>"

if __name__ == "__main__":
    app.run()
    app.debug = True
