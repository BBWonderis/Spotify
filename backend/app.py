from flask import jsonify, request
from config import app, db
from models import User

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    json_users.append("Lukas")
    return jsonify({'users': json_users})

@app.route('/create_users', methods=['POST'])
def create_users():
    data = request.get_json()
    return jsonify(data), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)