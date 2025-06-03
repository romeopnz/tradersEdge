export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Trader's Edge</h1>
      <p className="mb-8 max-w-lg text-center">
        The AI-powered SaaS bundle for Forex traders. Get early access now!
      </p>
      <form
        className="w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for signing up!');
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full rounded-md border border-gray-600 bg-black p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Join Waitlist
        </button>
      </form>
    </main>
  );
}
