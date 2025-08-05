import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 border-b-2 border-gray-200">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your business deserves to go digital, like it's 2025.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with end-to-end digital solutions. From landing pages to enterprise-grade AI automations critical to your daily operations, we make digital transformation seamless.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/get-started"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-24 sm:py-32 border-b-2 border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Service Tiers</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect digital solution for your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Foundational Tier */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Foundational</h3>
                  <span className="text-2xl">🧱</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Perfect for businesses taking their first digital steps
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">$499</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/project</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    Landing Pages
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    SEO Audits
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    Basic Social Setup
                  </li>
                </ul>
              </div>
              <Link
                href="/get-started?tier=foundational"
                className="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
            </div>

            {/* Evolutionary Tier */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Evolutionary</h3>
                  <span className="text-2xl">🔄</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  For businesses ready to scale their digital presence
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">$3k</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    Website Redesigns
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    Funnel Builds
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    Paid Ad Campaigns
                  </li>
                </ul>
              </div>
              <Link
                href="/get-started?tier=evolutionary"
                className="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
            </div>

            {/* Transformational Tier */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Transformational</h3>
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Complete digital transformation for enterprise businesses
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">$15k</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    Full Rebrands
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    AI Automation
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                    Enterprise SaaS Integration
                  </li>
                </ul>
              </div>
              <Link
                href="/get-started?tier=transformational"
                className="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
