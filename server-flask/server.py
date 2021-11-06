from datetime import datetime
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///user.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    userName = db.Column(db.String(20), primary_key=True)
    password = db.Column(db.String(15), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    # def __repr__(self) -> str:
    #     return f"{self.userName} - {self.password}"

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method=='POST':
        userName = request.form['userName']
        password = request.form['password']
        user = User(userName=userName, password=password)
        print(user)
        db.session.add(user)
        db.session.commit()
        return render_template('welcome.html', user=user)

    allUser = User.query.all()
    print(allUser)
    return render_template('index.html')

# @app.route('/update/<int:id>', methods=['GET', 'POST'])
# def update(sno):
#     if request.method=='POST':
#         title = request.form['title']
#         desc = request.form['desc']
#         todo = Todo.query.filter_by(sno=sno).first()
#         todo.title = title
#         todo.desc = desc
#         db.session.add(todo)
#         db.session.commit()

#         return redirect('/')


#     todo = Todo.query.filter_by(sno=sno).first() 
#     return render_template('update.html', todo=todo)

# @app.route('/delete/<int:sno>')
# def delete(sno):
#     todo = Todo.query.filter_by(sno=sno).first()
#     db.session.delete(todo)
#     db.session.commit()

#     return redirect('/')


# @app.route('/show')
# def show():
#     allTodo = Todo.query.all()
#     print(allTodo)
#     return 'Products Page!'


if __name__ == "__main__":
    app.run(debug=True)