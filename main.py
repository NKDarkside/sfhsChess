#!/usr/bin/env python3
"""
Simple Flask app to serve the SFHS Chess Club static website.
This allows the HTML website to work with Replit's Flask workflow configuration.
"""

from flask import Flask, send_from_directory, send_file
import os

app = Flask(__name__)

@app.route('/')
def index():
    """Serve the index page."""
    return send_file('index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    """Serve static files (HTML, CSS, JS, images)."""
    # Handle clean URLs without extensions
    if not '.' in filename:
        # Try to serve as HTML file
        html_file = f"{filename}.html"
        if os.path.exists(html_file):
            return send_file(html_file)
    
    # Serve the file directly if it exists
    if os.path.exists(filename):
        return send_file(filename)
    
    # Return 404 if file not found
    return "Page not found", 404

@app.route('/static/<path:filename>')
def serve_static_folder(filename):
    """Serve files from static folder if it exists."""
    return send_from_directory('.', filename)

@app.errorhandler(404)
def not_found(error):
    """Custom 404 page."""
    return """
    <!DOCTYPE html>
    <html lang="en" data-bs-theme="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Not Found - SFHS Chess Club</title>
        <link href="https://cdn.replit.com/agent/bootstrap-agent-dark-theme.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <h1 class="display-4">♟️ Oops!</h1>
                    <p class="lead">The page you're looking for isn't here.</p>
                    <a href="/" class="btn btn-primary">Return to Home</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    """, 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)