import { SampleForm } from '@/features/sample-form/SampleForm';

function App() {
  return (
    // Use direct Tailwind classes for styling the main layout
    <main className="flex items-center justify-center min-h-screen w-full bg-slate-900 p-4 font-sans">
      <SampleForm />
    </main>
  );
}

export default App;
