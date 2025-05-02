import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Carusel() {
  return (
    <div className="pb-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[1540px] mx-auto mt-[100px] lg:mt-[200px] text-center  "
      >
        {" "}
        <p className="text-[55px]  lg:text-left font-semibold ">
          Bizning mamnun mijozlarimiz
        </p>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 ">
                <Card>
                  <CardContent className="space-y-[20px]  ">
                    <div className="flex gap-x-2 items-center">
                      <Image
                        src="/star.svg"
                        width={18}
                        height={18}
                        alt="photo"
                      />
                      <Image
                        src="/star.svg"
                        width={18}
                        height={18}
                        alt="photo"
                      />
                      <Image
                        src="/star.svg"
                        width={18}
                        height={18}
                        alt="photo"
                      />
                      <Image
                        src="/star.svg"
                        width={18}
                        height={18}
                        alt="photo"
                      />
                      <Image
                        src="/star.svg"
                        width={18}
                        height={18}
                        alt="photo"
                      />
                    </div>
                    <div>
                      <h5 className="text-left">Sarah M.</h5>
                      <p
                        className="text-left"
                        style={{ color: "rgba(0, 0, 0, 0.6)" }}
                      >
                        Shop.co orqali olgan jihozlarim sifati va uslubi meni
                        hayratda qoldirdi. Kundalik foydalanishdan tortib,
                        maxsus tadbirlar uchun hamma narsa yuqori darajada!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
