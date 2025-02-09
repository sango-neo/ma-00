type Props = {
    heading: string;
    description: string;
  };
  
  export type Header64Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Header64 = (props: Header64Props) => {
    const { heading, description } = {
      ...Header64Defaults,
      ...props,
    };
    return (
      <section id="relume" className="px-[5%] py-16 bg-[#f9f9f9] md:py-24 lg:py-36">
        <div className="container max-w-md text-center">
          <h1 className="mb-5 text-3xl font-semibold md:mb-6 md:text-4xl lg:text-5xl text-ma_darkBlue">{heading}</h1>
          <p className="md:text-md">{description}</p>
          <p className="italic text-ma_blue mt-4 font-serif text-md">
            "Building together, advancing Africa's development."
          </p>
        </div>
      </section>
    );
  };
  
  export const Header64Defaults: Props = {
    heading: "Your Partner in Smart Asset Management",
    description:
      "MOAGO is a smart web-based application designed for the efficient management and maintenance of infrastructure and equipment.",
  };
  