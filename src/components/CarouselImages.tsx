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
    <div className="mx-auto md:w-[1080px] px-2 py-4">
     <Carousel setApi={setApi} className="w-full">
        <CarouselContent >
          {arrayImg.map((_, index) => (
            <CarouselItem key={index} >
              <Card >
                <CardContent className="flex md:w-[1080px] md:h-[500px] xs:w-[300px] aspect-square items-center justify-center p-6">
                  <img
                    src={arrayImg[index]}
                    alt={`Image ${index + 1}`}
                    className=" md:object-fill rounded-lg "
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-2 top-1/2 z-10 -translate-y-1/2 bg-background/90 shadow-md hover:bg-background" />
        <CarouselNext className="hidden md:flex right-2 top-1/2 z-10 -translate-y-1/2 bg-background/90 shadow-md hover:bg-background" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}


