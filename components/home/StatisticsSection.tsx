import { Card, CardContent } from '@/components/ui/card';
import CountUpAnimation from '@/components/ui/count-up';

const statistics = [
  {
    id: 1,
    value: 250,
    label: 'Clients Served',
    suffix: '+',
  },
  {
    id: 2,
    value: 184,
    label: 'Marketing Campaigns',
    suffix: '%',
    prefix: 'Avg. ',
    description: 'ROI for clients',
  },
  {
    id: 3,
    value: 5,
    label: 'Years in Business',
    suffix: '+',
  },
  {
    id: 4,
    value: 92,
    label: 'Client Retention',
    suffix: '%',
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Driving Real Results
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our data-driven approach has helped businesses achieve remarkable growth in their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <Card key={stat.id} className="bg-white/10 backdrop-blur-sm border-white/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUpAnimation end={stat.value} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <h3 className="text-xl font-medium">{stat.label}</h3>
                {stat.description && (
                  <p className="text-white/70 mt-2 text-sm">{stat.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}