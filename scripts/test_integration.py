import time
import urllib.request
import sys
import subprocess
import os

DOCKER_COMPOSE = r"C:\Users\jrego\AppData\Local\Programs\DockerDesktop\resources\bin\docker-compose.exe"

def test_communication():
    print("Cloning Go repository...")
    if os.path.exists("go-backend-test"):
        subprocess.run(["rmdir", "/s", "/q", "go-backend-test"], shell=True, check=False)
    subprocess.run(["git", "clone", "https://github.com/JoanaXapaca/go-backend-test.git"], check=True)

    print("Starting containers (using pre-built images)...")
    # SEM --build! Usa as imagens construídas no stage 'Docker Build'
    subprocess.run([DOCKER_COMPOSE, "up", "-d"], check=True)

    print("Waiting for services to start...")
    time.sleep(15)

    try:
        print("Test 1: Host -> Frontend Container (Port 3000)...")
        req_front = urllib.request.urlopen("http://localhost:3000", timeout=5)
        if req_front.status != 200:
            sys.exit(1)
        print("Frontend Host test OK!")

        print("Test 2: Host -> Backend Container (Port 8081)...")
        req_back = urllib.request.urlopen("http://localhost:8081/api/health", timeout=5)
        if req_back.status != 200:
            sys.exit(1)
        print("Backend Host test OK!")

        print("Test 3: Frontend Container -> Backend Container (Docker Network)...")
        result = subprocess.run(
            [DOCKER_COMPOSE, "exec", "-T", "frontend", "wget", "-qO-", "http://backend:8081/api/health"],
            capture_output=True, text=True, check=True
        )
        print(f"Response from Backend Container: {result.stdout.strip()}")
        if '{"status":"healthy"}' not in result.stdout:
            sys.exit(1)
        print("Frontend-to-Backend Container communication OK!")

        print("SUCCESS: All container integration tests passed!")

    except Exception as e:
        print(f"ERROR in integration test: {e}")
        sys.exit(1)
    finally:
        print("Shutting down containers...")
        subprocess.run([DOCKER_COMPOSE, "down"], check=True)
        subprocess.run(["rmdir", "/s", "/q", "go-backend-test"], shell=True, check=False)

if __name__ == "__main__":
    test_communication()