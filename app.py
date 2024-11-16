from flask import Flask, request, jsonify
from stock_predictor import predict_stock_performance
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all domains (important for React)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        stock_name = request.json['stock_name']
        prediction = predict_stock_performance(stock_name)
        return jsonify({"prediction": prediction.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
