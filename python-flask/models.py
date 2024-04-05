from flask_sqlalchemy import SQLAlchemy #pip install -U Flask-SQLAlchemy
         
db = SQLAlchemy()
         
class Users(db.Model):
    __tablename__ = "tblusers"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), index=True)
    email = db.Column(db.String(150), index=True, unique=True)
    password = db.Column(db.String(255), index=True)