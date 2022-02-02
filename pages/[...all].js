import dynamic from 'next/dynamic';

const App = dynamic(() => import('../src/components/AppShell'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
