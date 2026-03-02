export default function Home() {
  return (
    <div style={{padding: 20, fontFamily: "Arial"}}>
      <h1>Beşiktaş Arama Kurtarma</h1>
      <h2>Operasyon Paneli</h2>

      <div style={{marginTop: 30}}>
        <div style={{padding: 15, marginBottom: 10, background: "#e3f2fd", borderRadius: 8}}>
          <strong>Aktif Personel:</strong> 0
        </div>

        <div style={{padding: 15, marginBottom: 10, background: "#ffebee", borderRadius: 8}}>
          <strong>Aktif Operasyon:</strong> Yok
        </div>

        <div style={{padding: 15, marginBottom: 10, background: "#fff3e0", borderRadius: 8}}>
          <strong>Sektör:</strong> Tanımlanmadı
        </div>
      </div>
    </div>
  );
}
