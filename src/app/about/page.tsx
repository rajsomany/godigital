import { CheckCircleIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Clients Served', value: '100+' },
  { id: 2, name: 'Projects Completed', value: '500+' },
  { id: 3, name: 'Team Members', value: '25+' },
  { id: 4, name: 'Years Experience', value: '5+' },
]

const values = [
  {
    name: 'Innovation First',
    description: 'We stay ahead of digital trends to provide cutting-edge solutions that give our clients a competitive edge.',
  },
  {
    name: 'Client Success',
    description: 'Your success is our success. We measure our performance by the growth and achievements of our clients.',
  },
  {
    name: 'Quality Assurance',
    description: 'Every project undergoes rigorous quality checks to ensure we deliver excellence in every aspect.',
  },
  {
    name: 'Transparent Communication',
    description: 'We believe in clear, honest communication at every step of the process.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 border-b-2 border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About GodStudio</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're a team of digital transformation experts dedicated to helping businesses thrive in the digital age. Our mission is to obliterate digital barriers and deliver end-to-end, frictionless solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 border-b-2 border-gray-200 pb-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Impact</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We've helped businesses of all sizes achieve their digital goals
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 border-b-2 border-gray-200">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 