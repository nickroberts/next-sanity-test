import Link from 'next/link';
import { useRouter } from 'next/router';
import { MainMenu } from '@nst/shared/ui';

export function About() {
  const router = useRouter();

  return (
    <>
      <MainMenu Link={Link} activePath={router.asPath} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose">
            <h1>
              About that <span className="text-yellow-900">garlic bread</span>{' '}
              with <span className="text-yellow-400">cheese</span>
            </h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="Youtube Video"
              src="https://www.youtube.com/embed/RhMYBfF7-hE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 mt-12 alt-theme">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl lg:text-right lg:order-last font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-brand">
              Start your <span className="text-pink-500 italic">free</span>{' '}
              trial today.
            </span>
          </h2>

          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/about">
                <a
                  href="passHref"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand-dark transition-colors"
                >
                  Get started
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/about">
                <a
                  href="passHref"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand bg-white hover:bg-gray-50 transition-colors"
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
