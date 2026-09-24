// Decorative, deterministic QR-style pattern for illustrations (not scannable).
const N = 25;

const isFinder = (x: number, y: number) => {
  const inBox = (ox: number, oy: number) =>
    x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
  return inBox(0, 0) || inBox(N - 7, 0) || inBox(0, N - 7);
};

const finderFill = (x: number, y: number) => {
  const lx = x % (N - 7) === x ? x : x - (N - 7);
  const ly = y % (N - 7) === y ? y : y - (N - 7);
  const ring = lx === 0 || lx === 6 || ly === 0 || ly === 6;
  const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
  return ring || core;
};

const isSeparator = (x: number, y: number) =>
  (x === 7 && (y <= 7 || y >= N - 8)) ||
  (y === 7 && (x <= 7 || x >= N - 8)) ||
  (x === N - 8 && y <= 7) ||
  (y === N - 8 && x <= 7);

const noise = (x: number, y: number) => {
  const h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return h - Math.floor(h) > 0.52;
};

export default function QrPattern({ className = '' }: { className?: string }) {
  const cells: JSX.Element[] = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const on = isFinder(x, y)
        ? finderFill(x, y)
        : !isSeparator(x, y) && noise(x, y);
      if (on) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  }
  return (
    <svg viewBox={`-1 -1 ${N + 2} ${N + 2}`} className={className} aria-hidden shapeRendering="crispEdges">
      <rect x="-1" y="-1" width={N + 2} height={N + 2} fill="#fff" />
      <g fill="#0B0C10">{cells}</g>
    </svg>
  );
}
