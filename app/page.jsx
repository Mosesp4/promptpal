import Feed from "@components/Feed";
import Image from "next/image";

const home = () => {
  return (
    <section
      className="w-full flex-center flex-col"
      style={{
        backgroundImage: "url('/images/AI-bg.png')", // Adjust the path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="head_text text-center">
        Explore & Exchange <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Generated Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptpal is a cutting-edge, open-source AI prompting tool designed to
        ignite creativity and inspiration in the modern world. Discover, create,
        and share an endless array of captivating prompts that elevate your
        creative endeavors to new heights..
      </p>

      <p className="text-center orange_gradient font-bold text-2xl mt-4 ">
        "Unleash Your Imagination"
      </p>

      <Feed />
    </section>
  );
};

export default home;
