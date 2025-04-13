import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import BlurIn from "@/components/ui/blur-in";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";
import instance from "@/lib/axios/instance";
import { useQuery } from "@tanstack/react-query";

interface Certificates {
  name: string;
  image: string;
  expires: string;
}

const fetch = async () => {
  const { data } = await instance.get("/api/allCertificates");
  return data;
};

const AllCertificate = () => {
  const [select, setSelect] = useState("frondEnd");

  const { data, isLoading } = useQuery({
    queryKey: ["allCertificates"],
    queryFn: fetch,
  });

  return (
    <div className="max-w-[1000px] mx-auto xl:my-6 p-8">
      <Link className="flex items-center text-slate-600" href={"/certificate"}>
        <div className="border rounded-full p-2 my-2 mr-2">
          <FaArrowLeft />
        </div>
        Back
      </Link>

      <BlurIn
        word="Certificate"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-4">I have certificates from several bootcamps.</h1>
      <div className="mt-4 mb-8">
        <Select onValueChange={(e) => setSelect(e)} defaultValue={select}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={"FrondEnd Developer"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frondEnd" defaultChecked>
              FrondEnd Developer {data?.data?.["frondEnd"].length}
            </SelectItem>
            <SelectItem value="backEnd">
              BackEnd Developer {data?.data?.["backEnd"].length}
            </SelectItem>
            <SelectItem value="devOps">
              DevOps Developer {data?.data?.["devOps"].length}
            </SelectItem>
            <SelectItem value="mechine">
              Mechine Learning {data?.data?.["mechine"].length}
            </SelectItem>
            <SelectItem value="mobile">
              Mobile App Developer {data?.data?.["mobile"].length}
            </SelectItem>
            <SelectItem value="other">
              Other {data?.data?.["other"].length}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 w-full">
        {!isLoading ? (
          data?.data?.[select]
            .sort(
              (a: Certificates, b: Certificates) =>
                new Date(a.expires).getTime() - new Date(b.expires).getTime()
            )
            .reverse()
            .map((certificate: Certificates, index: number) => (
              <BlurFade key={index} delay={0.12 * index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="p-0 m-0 h-full w-full sm:h-48 sm:w-64 xl:h-40 xl:w-56"
                    >
                      <Card>
                        <Image
                          src={certificate.image}
                          width={350}
                          height={200}
                          alt="certificate"
                          className="object-cover w-full h-full"
                        />
                      </Card>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <Image
                        src={certificate.image}
                        width={1028}
                        height={1028}
                        alt="certificate"
                        className={`w-full object-contain ${
                          certificate.name === "MTCNA" && "h-screen"
                        }`}
                      />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </BlurFade>
            ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default AllCertificate;
