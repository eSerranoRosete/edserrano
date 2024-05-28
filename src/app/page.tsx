import { ContactButtons } from "@/components/ContactButtons";
import { ProjectsStage } from "@/components/ProjectsStage";

export default function Home() {
  return (
    <main>
      {/* <InfiniteTextBanner /> */}
      <section className="w-full h-dvh container p-10 relative m-auto flex flex-col">
        <div className="flex flex-col md:flex-row gap-20 grow">
          <div className="w-full max-w-sm mt-10">
            <h1 className="text-7xl font-semibold uppercase">
              Eduardo <br /> Serrano
            </h1>
            <p className="text-3xl uppercase">Software Developer</p>
            <p className="mt-10 text-xl">
              I am a Web Developer and for the last five years, I have been
              designing, building, and maintaining web applications using a
              modern stack. I enjoy learning new technologies and constantly
              challenging myself.
            </p>

            <ContactButtons />
          </div>

          <div className="w-full h-full flex flex-col">
            <p className="text-3xl mb-2 font-medium text-right">
              Latest Projects
            </p>
            <ProjectsStage />
          </div>
        </div>
      </section>
    </main>
  );
}
