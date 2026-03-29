import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface CarouselImgProps {
  arrayImg: string[]
  slug: string
}

export function CarouselImg({arrayImg, slug}: CarouselImgProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto w-full max-w-[1080px] px-2 py-4">
     <Carousel setApi={setApi} className="w-full">
        <CarouselContent >
          {arrayImg.map((_, index) => (
            <CarouselItem key={index} >
              <Card >
                <CardContent className="flex h-[240px] w-full items-center justify-center overflow-hidden p-0 sm:h-[320px] md:h-[550px]">
                  <img
                    src={arrayImg[index]}
                    alt={`Image ${index + 1}`}
                    className="h-full w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 top-1/2 z-10 -translate-y-1/2 border bg-background/95 shadow-md hover:bg-background disabled:opacity-60" />
        <CarouselNext className="right-2 top-1/2 z-10 -translate-y-1/2 border bg-background/95 shadow-md hover:bg-background disabled:opacity-60" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}


