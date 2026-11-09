import time
import urllib.request
import sys
import subprocess
import os

def test_communication():
    print("A clonar repositorio Go...")
    if os.path.exists("go-backend-test"):
        subprocess.run(["rmdir", "/s", "/q", "go-backend-test"], shell=True, check=False)
    subprocess.run(["git", "clone", "https://github.com/JoanaXapaca/go-backend-test.git"], check=True)

    print("A iniciar containers...")
    subprocess.run([r"C:\Users\jrego\AppData\Local\Programs\DockerDesktop\resources\bin\docker-compose.exe", "up", "-d", "--build"], check=True)

    print("A aguardar que os servicos arranquem...")
    time.sleep(15) # Aumentado para 15s por segurança

    try:
        print("A testar Backend (Go) na porta 8081...")
        req_back = urllib.request.urlopen("http://localhost:8081/api/health", timeout=5)
        if req_back.status != 200:
            print("Backend falhou!")
            sys.exit(1)
        print("Backend OK!")

        print("A testar Frontend (Vue) na porta 3000...")
        req_front = urllib.request.urlopen("http://localhost:3000", timeout=5)
        if req_front.status != 200:
            print("Frontend falhou!")
            sys.exit(1)
        print("Frontend OK!")
        
        print("SUCESSO: A comunicacao entre os containers esta funcional!")

    except Exception as e:
        print(f"ERRO no teste de integracao: {e}")
        sys.exit(1)
    finally:
        print("A desligar containers...")
        subprocess.run([r"C:\Users\jrego\AppData\Local\Programs\DockerDesktop\resources\bin\docker-compose.exe", "down"], check=True)
        # Limpar a pasta clonada
        subprocess.run(["rmdir", "/s", "/q", "go-backend-test"], shell=True, check=False)

if __name__ == "__main__":
    test_communication()