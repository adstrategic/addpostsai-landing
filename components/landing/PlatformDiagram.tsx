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
    <div className="rounded-2xl border border-white/10 bg-brand-dark p-6 shadow-2xl transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(var(--primary-rgb),0.3)] will-change-[transform,box-shadow]">
      <svg viewBox="0 0 400 380" className="h-auto w-full" aria-hidden="true">
        {platformPositions.map((pos, i) => (
          <line
            key={DIAGRAM_PLATFORM_IDS[i]}
            x1="180"
            y1="190"
            x2={pos.cx - 26}
            y2={pos.cy}
            stroke="var(--color-primary)"
            strokeWidth="2"
            className="dash-animate opacity-70"
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
          stroke="var(--color-primary)"
          strokeWidth="2"
          className="opacity-70"
        />

        <circle
          cx="50"
          cy="190"
          r="28"
          fill="white"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
        <foreignObject x="34" y="174" width="32" height="32">
          <User className="size-8 text-primary" />
        </foreignObject>

        <circle
          cx="180"
          cy="190"
          r="34"
          fill="white"
          className="drop-shadow-lg"
        />
        <foreignObject x="148" y="158" width="64" height="64">
          <div className="flex size-16 items-center justify-center">
            <Image
              src="/logos/logo-addposts.png"
              alt=""
              width={38}
              height={38}
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
