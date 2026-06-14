export type Point = { x: number; y: number };

export function getPointOnPath(d: string, t: number): Point {
  const clamped = Math.max(0, Math.min(1, t));

  if (typeof document === "undefined") {
    return { x: 0, y: 0 };
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  svg.appendChild(path);

  const length = path.getTotalLength();
  const point = path.getPointAtLength(length * clamped);
  return { x: point.x, y: point.y };
}

/** Evenly spaced dots along a straight stem (root → node). t=0 at root, t=1 at node. */
export function getTipPointsOnStem(
  stemRoot: Point,
  node: Point,
  positionTs: number[],
): Point[] {
  return positionTs.map((t) => ({
    x: stemRoot.x + (node.x - stemRoot.x) * t,
    y: stemRoot.y + (node.y - stemRoot.y) * t,
  }));
}

export function getTipPoints(
  twigPath: string,
  positionTs: number[],
): Point[] {
  return positionTs.map((t) => getPointOnPath(twigPath, t));
}
