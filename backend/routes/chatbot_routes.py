from flask import Blueprint, request, jsonify
from services.chatbot_service import process_chat_query

chatbot_bp = Blueprint("chatbot", __name__)

@chatbot_bp.route("/chatbot/query", methods=["POST"])
def query():
    data = request.json
    response = process_chat_query(data["query"])
    return jsonify({"response": response})
