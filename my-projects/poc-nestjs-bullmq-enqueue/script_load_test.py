"""Dispara N chamadas para POST /gerar-relatorio (só stdlib, sem pip install).

Uso:
    python load_test.py
"""

import json
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

# Quantidade total de chamadas ao endpoint.
TOTAL_REQUESTS = 10000

# Configurações da requisição.
URL = "http://localhost:3000/gerar-relatorio"
CONCURRENCY = 20  # chamadas em paralelo
TIMEOUT = 10  # segundos por requisição


def chamar(i: int) -> tuple[int, bool, str]:
    """Faz uma chamada ao endpoint. Retorna (indice, sucesso, detalhe)."""
    payload = json.dumps({"usuarioId": f"user-{i}"}).encode("utf-8")
    req = urllib.request.Request(
        URL,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            body = json.loads(resp.read().decode("utf-8"))
            return i, True, f"job {body.get('jobId')}"
    except urllib.error.HTTPError as e:
        return i, False, f"HTTP {e.code}"
    except Exception as e:  # noqa: BLE001
        return i, False, str(e)


def main() -> None:
    print(f"Disparando {TOTAL_REQUESTS} chamadas para {URL} "
          f"(concorrência={CONCURRENCY})...\n")
    inicio = time.perf_counter()
    sucessos = 0
    falhas = 0

    with ThreadPoolExecutor(max_workers=CONCURRENCY) as executor:
        futuros = [executor.submit(chamar, i) for i in range(1, TOTAL_REQUESTS + 1)]
        for futuro in as_completed(futuros):
            _, ok, detalhe = futuro.result()
            if ok:
                sucessos += 1
            else:
                falhas += 1
                print(f"  falha: {detalhe}")

    duracao = time.perf_counter() - inicio
    print("\n--- Resumo ---")
    print(f"Total:    {TOTAL_REQUESTS}")
    print(f"Sucessos: {sucessos}")
    print(f"Falhas:   {falhas}")
    print(f"Tempo:    {duracao:.2f}s "
          f"({TOTAL_REQUESTS / duracao:.1f} req/s)")


if __name__ == "__main__":
    main()
