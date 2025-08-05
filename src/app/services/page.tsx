import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const services = [
  {
    name: 'Foundational',
    description: 'Perfect for businesses taking their first digital steps',
    price: '$499',
    period: 'per project',
    features: [
      'Custom Landing Pages',
      'SEO Audit & Optimization',
      'Social Media Setup',
      'Basic Analytics Integration',
      'Mobile-Responsive Design',
      '24/7 Support',
    ],
    icon: '🧱',
  },
  {
    name: 'Evolutionary',
    description: 'For businesses ready to scale their digital presence',
    price: '$3k',
    period: 'per month',
    features: [
      'Complete Website Redesign',
      'Sales Funnel Development',
      'Paid Advertising Campaigns',
      'Content Strategy',
      'Email Marketing Setup',
      'Performance Analytics',
      'Monthly Strategy Calls',
      'Priority Support',
    ],
    icon: '🔄',
  },
  {
    name: 'Transformational',
    description: 'Complete digital transformation for enterprise businesses',
    price: '$15k',
    period: 'per month',
    features: [
      'Full Brand Transformation',
      'AI-Powered Automation',
      'Enterprise SaaS Integration',
      'Custom Software Development',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Weekly Strategy Sessions',
      'Unlimited Revisions',
    ],
    icon: '🚀',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect digital solution for your business needs. Each tier is designed to help you achieve your digital goals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 border-2 border-gray-200 shadow-lg hover:border-indigo-500 transition-colors duration-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{service.name}</h3>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{service.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{service.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/{service.period}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <ArrowRightIcon className="h-6 w-5 flex-none text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/get-started?tier=${service.name.toLowerCase()}`}
                className="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 