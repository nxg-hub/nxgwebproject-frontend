"use client"

import * as React from "react"
import PropTypes from "prop-types"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "../../lib/utils"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within a <Carousel />")
  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  showDots = true,
  showArrows = true,
  autoPlay = 0,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const onInit = React.useCallback((emblaApi) => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi) => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api])
  const scrollTo = React.useCallback((index) => api?.scrollTo(index), [api])

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); scrollPrev() }
      else if (event.key === "ArrowRight") { event.preventDefault(); scrollNext() }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api || !autoPlay) return
    const interval = setInterval(() => api.scrollNext(), autoPlay)
    return () => clearInterval(interval)
  }, [api, autoPlay])

  React.useEffect(() => {
    if (!api) return
    onInit(api)
    onSelect(api)
    api.on("reInit", onInit)
    api.on("reInit", onSelect)
    api.on("select", onSelect)
    return () => { api?.off("select", onSelect) }
  }, [api, onInit, onSelect])

  const contextValue = React.useMemo(() => ({
    carouselRef,
    api,
    opts,
    orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
    scrollPrev,
    scrollNext,
    scrollTo,
    canScrollPrev,
    canScrollNext,
    selectedIndex,
    scrollSnaps,
    showDots,
    showArrows,
  }), [carouselRef, api, opts, orientation, scrollPrev, scrollNext, scrollTo, canScrollPrev, canScrollNext, selectedIndex, scrollSnaps, showDots, showArrows])

  return (
    <CarouselContext.Provider value={contextValue}>
      <section
        onKeyDownCapture={handleKeyDown}
        className={cn("relative w-full", className)}
        aria-label="carousel"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </section>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()
  return (
    <div

      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselArrows({ className }) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext, orientation } = useCarousel()

  if (orientation === "vertical") return null

  const base = cn(
    "absolute top-1/2 -translate-y-1/2 z-10",
    "flex items-center justify-center",
    "h-10 w-10 rounded-full",
    "bg-[#1E1A16] border border-white/10",
    "text-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
    "transition-all duration-200",
    "hover:bg-[#3A332B] hover:border-white/20 hover:text-white hover:scale-105",
    "hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
    "disabled:opacity-20 disabled:cursor-not-allowed",
    "disabled:hover:scale-100 disabled:hover:bg-[#1E1A16] disabled:hover:shadow-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]",
    className
  )

  return (
    <>
      <button
        data-slot="carousel-previous"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
        className={cn(base, "-left-5")}
      >
        <svg
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        data-slot="carousel-next"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
        className={cn(base, "-right-5")}
      >
        <svg
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </>
  )
}

function CarouselDots({ className }) {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel()

  if (scrollSnaps.length <= 1) return null

  return (
    <div
      data-slot="carousel-dots"
      className={cn("flex items-center justify-center gap-1.5 mt-5", className)}
      aria-label="Slide indicators"
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === selectedIndex ? "true" : undefined}
          className={cn(
            "rounded-full transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]",
            index === selectedIndex
              ? "bg-[#3B82F6] w-5 h-2"
              : "bg-white/20 hover:bg-white/35 w-2 h-2"
          )}
        />
      ))}
    </div>
  )
}

Carousel.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  opts: PropTypes.object,
  setApi: PropTypes.func,
  plugins: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
  showDots: PropTypes.bool,
  showArrows: PropTypes.bool,
  autoPlay: PropTypes.number,
}

CarouselContent.propTypes = {
  className: PropTypes.string,
}

CarouselItem.propTypes = {
  className: PropTypes.string,
}

CarouselArrows.propTypes = {
  className: PropTypes.string,
}

CarouselDots.propTypes = {
  className: PropTypes.string,
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselArrows,
  CarouselDots,
  useCarousel,
}
