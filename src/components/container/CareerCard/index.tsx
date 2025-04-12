import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Career {
  image: string;
  dates: string;
  title: string;
  location: string;
  description: string;
  certificates?: string[];
}

const CareerCard = ({ career }: { career: Career }) => {
  console.log(career);
  return (
    <div className="relative ml-6 py-8 pl-10 border-l border-dashed flex flex-col gap-1.5">
      <div className="absolute -left-6 top-6 flex items-center justify-center bg-white rounded-full z-10">
        <Avatar className="border size-12 m-auto">
          <AvatarImage
            src={career.image}
            alt="Profile"
            className="object-contain"
          />
        </Avatar>
      </div>

      <h2 className="text-xs text-muted-foreground">{career.dates}</h2>
      <h1 className="font-medium leading-none">{career.title}</h1>
      <h3 className="text-sm text-muted-foreground">{career.location}</h3>
      <h3 className="prose dark:prose-invert text-sm text-muted-foreground">
        {career.description}
      </h3>
      <div className="flex gap-3">
        {career.certificates &&
          career.certificates.map((certificate: string, index: number) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="p-0 m-0 w-24 h-18 xl:w-32 xl:h-24 transition duration-500 hover:shadow"
                >
                  <Card className="w-full h-full">
                    <Image
                      src={certificate}
                      alt={`Certificate ${career.title}`}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </Card>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <Image
                    src={certificate}
                    alt={`Certificate ${career.title}`}
                    width={700}
                    height={700}
                    className="w-full object-contain"
                  />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
      </div>
    </div>
  );
};

export default CareerCard;
