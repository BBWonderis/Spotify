from flask import Flask, jsonify
from config import app, db
from models import User

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    json_users.append("Lukas")
    return jsonify({'users': json_users})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)