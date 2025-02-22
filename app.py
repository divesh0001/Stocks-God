from flask import Flask, request, jsonify
from flask_cors import CORS
from stock_predictor import predict_stock_performance

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    """Handle prediction requests from the frontend."""
    try:
        data = request.get_json()
        company_name = data.get("company_name")
        if not company_name:
            return jsonify({"error": "Company name is required"}), 400

        prediction_result = predict_stock_performance(company_name)
        return jsonify(prediction_result)
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
