"use client"

import { useState, useRef } from "react";
import { useZxing } from "react-zxing";

export function BarcodeScanner() {
  const [result, setResult] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [copied, setCopied] = useState(false);

  const { ref } = useZxing({
    paused: !isScanning,
    onDecodeResult(result) {
      const text = result.getText();
      setResult(text);
      setIsScanning(false);
      alert(`¡Código escaneado! \nCódigo: ${text}`);
    },
    onError(error) {
      console.error("Error al escanear:", error);
      alert("Error: No se pudo acceder a la cámara");
    },
  });

  const handleStartScan = () => {
    setIsScanning(true);
    setResult("");
  };

  const handleStopScan = () => setIsScanning(false);

  const handleCopy = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Escáner de Código de Barras</h2>

      <div style={{
        width: "100%",
        aspectRatio: "16/9",
        backgroundColor: "#ddd",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {isScanning ? (
          <video ref={ref} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span style={{ fontSize: 48 }}>📷</span>
        )}
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {!isScanning ? (
          <button onClick={handleStartScan} style={{ flex: 1, padding: 10 }}>Iniciar Escaneo</button>
        ) : (
          <button onClick={handleStopScan} style={{ flex: 1, padding: 10, backgroundColor: "#f44336", color: "#fff" }}>
            Detener Escaneo
          </button>
        )}
      </div>

      {result && (
        <div style={{ padding: 10, border: "1px solid #aaa", borderRadius: 8 }}>
          <p style={{ fontFamily: "monospace", wordBreak: "break-all" }}>{result}</p>
          <button onClick={handleCopy} style={{ marginTop: 10, padding: 10 }}>
            {copied ? "Copiado ✅" : "Copiar Código"}
          </button>
        </div>
      )}
    </div>
  );
}
