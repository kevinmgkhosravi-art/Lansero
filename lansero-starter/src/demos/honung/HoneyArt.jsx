import { useId } from 'react'

// Product illustrations for the honey demo, drawn as SVG so every variety gets its true colour.

function Jar({ color, label, x = 0, y = 0, scale = 1, id }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" x2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.85" />
          <stop offset="0.45" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="44" y="26" width="112" height="30" rx="6" fill="#D9BC8C" />
      <rect x="44" y="30" width="112" height="3" fill="#B8955E" />
      <rect x="44" y="40" width="112" height="3" fill="#B8955E" />
      <rect x="44" y="50" width="112" height="3" fill="#B8955E" />
      <path d="M52 56h96c8 0 14 6 14 14v128c0 12-10 22-22 22H60c-12 0-22-10-22-22V70c0-8 6-14 14-14z" fill={`url(#${id}-fill)`} />
      <path d="M50 76c0-6 4-10 10-10h4v134h-4c-6 0-10-4-10-10z" fill="#FFFFFF" opacity="0.28" />
      <rect x="54" y="112" width="92" height="62" rx="4" fill="#F4E7CF" />
      <text x="100" y="140" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="17" fill="#2B1B0D">{label}</text>
      <text x="100" y="160" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="7.5" letterSpacing="1" fill="#7A5A35">GYLLENE KUPAN</text>
    </g>
  )
}

function Comb() {
  const hex = 'M0,-14 L12,-7 L12,7 L0,14 L-12,7 L-12,-7Z'
  const cells = []
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 6; col++) {
      const x = 42 + col * 25 + (row % 2 ? 12.5 : 0)
      const y = 50 + row * 22
      cells.push(<path key={`${row}-${col}`} d={hex} transform={`translate(${x} ${y})`} fill={(row + col) % 5 === 0 ? '#F2C24E' : '#E3A21F'} stroke="#8A5A12" strokeWidth="2" />)
    }
  }
  return (
    <g>
      <rect x="22" y="30" width="178" height="176" rx="10" fill="#6B4518" />
      <rect x="30" y="38" width="162" height="160" rx="6" fill="#B87A1C" />
      {cells}
    </g>
  )
}

export default function HoneyArt({ product }) {
  const { art, color, label } = product
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 220 240" role="img" aria-label={product.name}>
      {art === 'comb' && <Comb />}
      {art === 'box' && (
        <g>
          <Jar id={`${id}-a`} color="#F2C94C" label="Lind" x={-6} y={44} scale={0.62} />
          <Jar id={`${id}-b`} color="#E0A33A" label="Blomster" x={62} y={44} scale={0.62} />
          <Jar id={`${id}-c`} color="#8E4F12" label="Ljung" x={130} y={44} scale={0.62} />
          <rect x="8" y="150" width="204" height="74" rx="6" fill="#2B1B0D" />
          <rect x="8" y="150" width="204" height="8" fill="#B8955E" />
          <text x="110" y="196" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="16" fill="#F4E7CF">Presentask</text>
        </g>
      )}
      {art === 'jar' && <Jar id={id} color={color} label={label} x={10} />}
    </svg>
  )
}
