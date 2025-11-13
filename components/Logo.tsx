export function Logo() {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
      <img src="/logo.webp" alt="Askar Logo" style={{height: '35px', objectFit: 'contain'}} />
      <span style={{fontWeight: '600', fontSize: '1.1rem'}}>Askar Studio</span>
    </div>
  )
}
