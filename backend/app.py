from flask import jsonify, request
from config import app, db
from models import User

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))

    return jsonify({'users': json_users})

@app.route('/create_users', methods=['POST'])
def create_users():

    data = request.get_json()
    username, password, email = data['username'], data['password'], data['email']
    if not username or not password or not email:
        return jsonify({'error': 'Username or password or email is empty'}), 400

    new_user = User(username=username, password=password, email=email)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    return jsonify({"message" : "User created!"}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)