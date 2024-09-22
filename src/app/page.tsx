import UserHealthDashboard from '@/components/UserHealthDashboard';
import ClientsProvider from '@/contexts/ClientsProvider';
import LineGraph from '@/components/LineGraph';

export default function Home() {
  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-screen-xl">
        <h1 className="mb-8 text-5xl font-semibold">BiSTS</h1>

        <ClientsProvider>
          <UserHealthDashboard />
        </ClientsProvider>
      </div>
    </div>
  );
}
