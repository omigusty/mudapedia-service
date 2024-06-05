import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoImage from "@/assets/logo.svg";
import { DigitalBlockchainId, JunaNetwork, Stikom } from "@/assets/partners";

const data = [1, 2, 3, 4, 5, 6];
const Logo = {
  src: logoImage,
  name: "Logo Mudapedia",
};

export default function Home() {
  return (
    <main>
      <div className="container lg:max-w-screen-sm mx-auto">
        <div className="p-4 space-y-8">
          <header>
            <img
              src={Logo.src}
              alt={Logo.name}
              width={52}
              className="mx-auto"
            />
            <h2 className="text-center text-2xl font-semibold tracking-tight">
              Selamat Datang di Mudapedia
            </h2>
            <p className="text-center text-sm text-muted-foreground">
              Mudapedia merupakan sekumpulan anak-anak muda mahasiswa STIKOM
              PGRI Banyuwangi yang mempunyai semangat dalam mendirikan usaha
              bersama
            </p>
          </header>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Layanan Kami</CardTitle>
              <CardDescription>
                Mudapedia merupakan solusi untuk anda
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-* gap-3">
                {data.map((item) => (
                  <Card className="bg-gray-50 shadow-none">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="space-x-2 flex items-center">
                        <img
                          src="https://github.com/shadcn.png"
                          width={46}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle className="text-md">Viraliz</CardTitle>
                          <CardDescription>
                            Jasa Kelolas Sosial Media
                          </CardDescription>
                        </div>
                      </div>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="rounded-full">
                            Detail
                          </Button>
                        </SheetTrigger>
                        <SheetContent className="space-y-4">
                          <SheetHeader>
                            <div className="flex items-center space-x-2">
                              <img
                                src="https://github.com/shadcn.png"
                                width={28}
                                className="rounded-md"
                              />
                              <SheetTitle className="text-xl">
                                Viraliz
                              </SheetTitle>
                            </div>
                            <SheetDescription>
                              Make changes to your profile here. Click save when
                              you're done.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-2">
                            <header>
                              <h4 className="text-md font-semibold leading-none tracking-tight">
                                Portfolio
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Contoh desain feed yang pernah dibuat
                              </p>
                            </header>
                            <div className="grid sm:grid-cols-3 grid-cols-2 gap-2">
                              <img
                                src="https://github.com/shadcn.png"
                                className="rounded-md"
                              />
                              <img
                                src="https://github.com/shadcn.png"
                                className="rounded-md"
                              />
                              <img
                                src="https://github.com/shadcn.png"
                                className="rounded-md"
                              />
                              <img
                                src="https://github.com/shadcn.png"
                                className="rounded-md"
                              />
                              <img
                                src="https://github.com/shadcn.png"
                                className="rounded-md"
                              />
                              <img
                                src="https://github.com/shadcn.png"
                                className="rounded-md"
                              />
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button className="rounded-full w-full">
                                Kunjungi Website
                              </Button>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <footer className="py-4 space-y-2">
          <p className="text-sm text-muted-foreground text-center">
            Copyright©️2023-2024 Mudapedia | All Right Reserved
          </p>
          <div className="flex items-center flex-col">
            <p className="text-sm font-semibold text-center">Supported by</p>
            <div className="flex items-center">
              <img src={Stikom} alt="STIKOM PGRI Banyuwangi" width={42} />
              <img
                src={JunaNetwork}
                alt="CV.Juna Network Indonesia"
                width={42}
              />
              <img
                src={DigitalBlockchainId}
                alt="PT.Digital Blockchain Indonesia"
                width={42}
              />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
