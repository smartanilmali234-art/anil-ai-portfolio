"""
Local Development Server for ML Terminal Portfolio
Launches http.server and automatically opens the browser.
"""
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

socketserver.TCPServer.allow_reuse_address = True

def run():
    global PORT
    os.chdir(DIRECTORY)
    
    httpd = None
    for port in range(PORT, PORT + 10):
        try:
            httpd = socketserver.TCPServer(("", port), Handler)
            PORT = port
            break
        except OSError:
            continue

    if not httpd:
        print(f"[!] Error: Ports {PORT}-{PORT+9} are all in use.")
        return

    with httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print("  AI / ML ENGINEER RETRO TERMINAL PORTFOLIO SERVER")
        print("=" * 60)
        print(f"[*] Serving portfolio at: {url}")
        print("[*] Press Ctrl+C in this terminal to shut down.")
        print("=" * 60)
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[*] Server stopped.")

if __name__ == "__main__":
    run()
