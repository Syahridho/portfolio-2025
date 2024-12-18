import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

const FormContact = ({ isLoading }: any) => {
  const { control, register } = useFormContext();

  return (
    <>
      <div className="mb-3">
        <FormField
          control={control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="fullname">Fullname</FormLabel>
              <FormControl>
                <Input
                  placeholder="Fullname"
                  id="fullname"
                  type="text"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mb-3">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  id="email"
                  type="email"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mb-3 flex flex-col gap-4">
        <Label htmlFor="desc">Description</Label>
        <Textarea
          placeholder="Type your message here."
          id="desc"
          required
          {...register("desc")}
        />
      </div>
      <ShimmerButton
        className="shadow-2xl mt-4 xl:px-6 float-end"
        type="submit"
      >
        <span className="">{isLoading ? "Loading..." : "Send"}</span>
      </ShimmerButton>
    </>
  );
};

export default FormContact;
