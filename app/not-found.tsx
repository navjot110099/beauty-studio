import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow mb-6 text-rose-deep">Error 404</p>
      <h1 className="font-display text-6xl leading-none font-light sm:text-7xl">
        This page has <em className="text-rose-deep">wandered off.</em>
      </h1>
      <p className="mt-6 max-w-md text-cocoa">The page you were looking for doesn&rsquo;t exist. Let us guide you back.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <Button href="/">Return home</Button>
        <Button href="/services" variant="outline">
          View services
        </Button>
      </div>
    </section>
  );
}
