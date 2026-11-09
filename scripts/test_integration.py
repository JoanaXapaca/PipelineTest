import time
import urllib.request
import sys
import subprocess

def test_communication():
    print("A iniciar containers...")
    subprocess.run(["docker-compose", "up", "-d", "--build"], check=True)
    
    print("A aguardar que os servicos arranquem...")
    time.sleep(10) # Dá tempo para o Go e o Nginx arrancarem

    try:
        # Testar o Backend (Go) na porta 8081
        print("A testar Backend (Go) na porta 8081...")
        req_back = urllib.request.urlopen("http://localhost:8081/api/health", timeout=5)
        if req_back.status != 200:
            print("Backend falhou!")
            sys.exit(1)
        print("Backend OK!")

        # Testar o Frontend (Vue) na porta 3000
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
        subprocess.run(["docker-compose", "down"], check=True)

if __name__ == "__main__":
    test_communication()