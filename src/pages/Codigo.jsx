import { useEffect, useState } from "react";
import { Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";

export function Codigo() {
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");
  const [escaneando, setEscaneando] = useState(true);

  useEffect(() => {
    const scanner = new Html5Qrcode("lector");
    const config = {
      fps: 10,
      qrbox: { width: 300, height: 300 },
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_QR_CODE],
    };

    const iniciarScanner = async () => {
      try {
        await scanner.start(
          { facingMode: "environment" },
          config,
          (decodedText) => {
            console.log("✅ Código detectado:", decodedText);
            setResultado(decodedText);
            setEscaneando(false);
            scanner.stop().then(() => scanner.clear());
          },
          (err) => {
            // esto se repite constantemente, mejor no loguear
          }
        );
      } catch (e) {
        console.error(e);
        setError("No se pudo acceder a la cámara");
      }
    };

    if (escaneando) iniciarScanner();

    return () => {
      if (scanner.isScanning) {
        scanner.stop().then(() => scanner.clear());
      }
    };
  }, [escaneando]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📷 Lector de Códigos</h2>
      <div
        id="lector"
        style={{
          width: "300px",
          height: "300px",
          margin: "20px auto",
          border: "2px solid #006371",
          borderRadius: "10px",
          display: escaneando ? "block" : "none",
        }}
      ></div>

      {resultado && (
        <div style={{ background: "#e6ffe6", padding: "10px", borderRadius: "5px" }}>
          <p><strong>✅ Detectado:</strong> {resultado}</p>
          <button onClick={() => setEscaneando(true)}>Escanear otro</button>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
