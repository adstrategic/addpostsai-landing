"use client"

import Image from "next/image"
import { DIAGRAM_PLATFORM_IDS, getPlatform } from "@/lib/platforms"
import { User } from "lucide-react"
import { PlatformIconImg } from "./PlatformIcon"

function getDiagramPositions(count: number) {
  const startY = 60
  const spacing = count > 1 ? 280 / (count - 1) : 0

  return Array.from({ length: count }, (_, i) => ({
    cx: 320,
    cy: startY + i * spacing,
  }))
}

export function PlatformDiagram() {
  const platformPositions = getDiagramPositions(DIAGRAM_PLATFORM_IDS.length)

  return (
    <div className="rounded-2xl border border-brand-border bg-surface-alt p-6 shadow-sm">
      <svg viewBox="0 0 400 380" className="h-auto w-full" aria-hidden="true">
        {platformPositions.map((pos, i) => (
          <line
            key={DIAGRAM_PLATFORM_IDS[i]}
            x1="180"
            y1="190"
            x2={pos.cx - 26}
            y2={pos.cy}
            stroke="#D1EEEE"
            strokeWidth="2"
            className="dash-animate"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animation: `dashMove 1.5s ease-in-out ${i * 0.3}s infinite alternate`,
            }}
          />
        ))}

        <line
          x1="70"
          y1="190"
          x2="130"
          y2="190"
          stroke="#D1EEEE"
          strokeWidth="2"
        />

        <circle
          cx="50"
          cy="190"
          r="28"
          fill="white"
          stroke="#D1EEEE"
          strokeWidth="2"
        />
        <foreignObject x="34" y="174" width="32" height="32">
          <User className="size-8 text-brand-muted" />
        </foreignObject>

        <circle
          cx="180"
          cy="190"
          r="32"
          fill="#020817"
          className="drop-shadow-sm"
        />
        <foreignObject x="148" y="158" width="64" height="64">
          <div className="flex size-16 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/logos/addposts-icon.png"
              alt=""
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </foreignObject>

        {DIAGRAM_PLATFORM_IDS.map((id, i) => {
          const pos = platformPositions[i]
          const platform = getPlatform(id)

          return (
            <g key={id}>
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r="26"
                fill="white"
                className="drop-shadow-sm"
              />
              <foreignObject
                x={pos.cx - 22}
                y={pos.cy - 22}
                width="44"
                height="44"
              >
                <div
                  className={`flex size-11 items-center justify-center overflow-hidden rounded-full ${platform.logo ? "bg-white" : platform.bg}`}
                >
                  <PlatformIconImg platform={platform} />
                </div>
              </foreignObject>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
