def hr_chatbot(query):
    query = query.lower()

    if "leave" in query:
        return "You can apply leave from the Leave section."
    if "attendance" in query:
        return "Attendance can be marked daily before 10 AM."
    return "Please contact HR department."
