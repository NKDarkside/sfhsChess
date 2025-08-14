#!/usr/bin/env python3
"""
Simple HTTP server to serve static files for the SFHS Chess Club website.
This allows the website to run on Replit without needing Flask.
"""

import http.server
import socketserver
import os
from pathlib import Path

class ChessClubHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler for serving static files with proper MIME types."""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        """Add CORS headers for development."""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        """Handle GET requests with proper routing for HTML files."""
        # Handle root path
        if self.path == '/':
            self.path = '/index.html'
        
        # Ensure .html extension for clean URLs
        if not self.path.endswith(('.html', '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico')):
            if not self.path.endswith('/'):
                # Check if file exists with .html extension
                html_path = self.path + '.html'
                if Path(html_path.lstrip('/')).exists():
                    self.path = html_path
        
        return super().do_GET()
    
    def log_message(self, format, *args):
        """Custom log format for better readability."""
        print(f"[SFHS Chess Club Server] {format % args}")

def run_server(port=5000):
    """Start the HTTP server on the specified port."""
    try:
        with socketserver.TCPServer(("0.0.0.0", port), ChessClubHTTPRequestHandler) as httpd:
            print(f"🏁 SFHS Chess Club website starting...")
            print(f"🌐 Server running at http://0.0.0.0:{port}")
            print(f"📝 Serving files from: {os.getcwd()}")
            print(f"🔗 Available pages:")
            print(f"   • Home: http://0.0.0.0:{port}/")
            print(f"   • About Us: http://0.0.0.0:{port}/about-us.html")
            print(f"   • Meetings: http://0.0.0.0:{port}/meetings.html")
            print(f"   • Upcoming Meetings: http://0.0.0.0:{port}/upcoming-meetings.html")
            print(f"♟️  Press Ctrl+C to stop the server")
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Port {port} is already in use. Trying port {port + 1}...")
            run_server(port + 1)
        else:
            print(f"❌ Error starting server: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    # Check if we're in the right directory
    if not Path("index.html").exists():
        print("❌ index.html not found. Make sure you're running this from the website directory.")
        exit(1)
    
    run_server()