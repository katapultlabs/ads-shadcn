"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  onValueChange,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const initial = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )
  // Track the live value so the (custom) range fill follows the thumbs.
  const [internal, setInternal] = React.useState<number[]>(initial)
  const values = Array.isArray(value) ? value : internal

  const pct = (v: number) => ((v - min) / (max - min)) * 100
  const lo = values.length > 1 ? Math.min(...values) : min
  const hi = values.length > 1 ? Math.max(...values) : (values[0] ?? min)
  const leftPct = pct(lo)
  const widthPct = pct(hi) - pct(lo)

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      onValueChange={(v) => {
        setInternal(v)
        onValueChange?.(v)
      }}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        {/* Custom range fill: radix-ui's SliderRange (1.4.1) crashes on React 19
            (context.values.map is not a function), so we compute the fill here. */}
        <span
          data-slot="slider-range"
          className="absolute h-full bg-primary"
          style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          aria-label={
            Array.isArray(props["aria-label"]) ? props["aria-label"][index] : (props["aria-label"] ?? (values.length > 1 ? `Value ${index + 1}` : "Value"))
          }
          className="block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
