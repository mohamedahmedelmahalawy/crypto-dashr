function About() {
  return (
    <section
      className="bg-[#161b22] p-6 shadow-2xl shadow-[#0000004d] rounded-xl
      flex flex-col gap-2 max-w-5xl mx-auto
      
    "
    >
      <header>
        <h1 className="text-3xl font-bold mb-2">🚀 About Crypto Dash</h1>
      </header>

      <article className="bg-[#111231] p-8 rounded-lg font-medium text-lg">
        <p>
          Crypto Dash is a modern and beginner-friendly React application built
          to display <strong>live cryptocurrency market data</strong> in a
          clean, clear, and interactive way 💹. Using the powerful CoinGecko
          API, the app fetches real-time data so users can stay up to date with
          the fast-moving crypto market 🌍.
        </p>
      </article>

      <article className="bg-[#111231] p-8 rounded-lg font-medium text-lg">
        <p>
          Whether you’re tracking Bitcoin 🪙, Ethereum ⚡, or exploring new
          coins, Crypto Dash makes it simple and enjoyable to explore the market
          without feeling overwhelmed.
        </p>
      </article>

      <h2 className="mt-8 mb-1 text-2xl font-semibold ">
        ✨ What You Can Do with Crypto Dash
      </h2>

      <ul className="border-2 border-[#cfd0e26e] rounded-lg p-8 space-y-2">
        <li>🔍 Browse top cryptocurrencies by market capitalization</li>
        <li>🧠 Filter coins by name or symbol for instant search</li>
        <li>
          📊 Sort cryptocurrencies by:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>💰 Price</li>
            <li>🏦 Market cap</li>
            <li>📈📉 24-hour price change</li>
          </ul>
        </li>
        <li>⏳ View live updates with smooth loading states</li>
        <li>⚠️ Clear error handling when data cannot be fetched</li>
      </ul>

      <h2 className="mt-8 mb-1 text-2xl font-semibold ">
        🛠️ Built with Modern React
      </h2>

      <article className="bg-[#111231] p-8 rounded-lg font-medium text-lg">
        <p>
          Crypto Dash is more than just a crypto tracker — it’s a
          learning-focused project 📚 built using modern React best practices.
          The application is structured using reusable components and efficient
          state management.
        </p>
      </article>

      <ul className="border-2 border-[#cfd0e26e] rounded-lg p-8 space-y-2">
        <li>⚛️ Functional components</li>
        <li>
          🪝 React hooks like <code className="text-sky-400">useState</code> and{" "}
          <code className="text-sky-400">useEffect</code>
        </li>
        <li>🔄 Asynchronous API handling</li>
        <li>🧩 Reusable and scalable components</li>
        <li>🧠 Predictable state flow</li>
      </ul>

      <h2 className="mt-8 mb-1 text-2xl font-semibold ">
        🎓 Learning & Portfolio Friendly
      </h2>

      <article className="bg-[#111231] p-8 rounded-lg font-medium text-lg">
        <p>
          Crypto Dash was created as part of a React tutorial to help developers
          understand real-world application patterns. It’s ideal for beginners
          and also works perfectly as a portfolio project 💼.
        </p>
      </article>

      <ul className="border-2 border-[#cfd0e26e] rounded-lg p-8 space-y-2">
        <li>🌐 API integration</li>
        <li>🚦 Loading and error state handling</li>
        <li>🧱 Component-based architecture</li>
        <li>📈 Real-world dashboard logic</li>
      </ul>

      <h2 className="mt-8 mb-1 text-2xl font-semibold ">🔮 Future Features</h2>

      <article className="bg-[#111231] p-8 rounded-lg font-medium text-lg">
        <p>
          Crypto Dash is designed with growth in mind 🌱. Planned improvements
          include:
        </p>
      </article>

      <ul className="border-2 border-[#cfd0e26e] rounded-lg p-8 space-y-2">
        <li>📄 Detailed coin pages with charts</li>
        <li>⭐ Favorite coins functionality</li>
        <li>📚 Pagination for large data sets</li>
        <li>🎨 UI/UX and theme enhancements</li>
        <li>🚀 Performance optimizations</li>
      </ul>

      <h2 className="mt-8 mb-1 text-2xl font-semibold ">💡 Why Crypto Dash?</h2>

      <article className="bg-[#111231] p-8 rounded-lg font-medium text-lg">
        <p>
          Crypto Dash combines learning, real-world data, and clean UI design
          into one powerful project ❤️. It’s simple, scalable, and built to grow
          with both users and developers.
        </p>
      </article>
    </section>
  );
}

export default About;
