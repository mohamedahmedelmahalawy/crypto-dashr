# 🪙 Crypto Dashr

A modern cryptocurrency dashboard built with React and TypeScript. Track real-time cryptocurrency prices, view detailed coin information, and analyze price trends with interactive charts.

## 🚀 Live Demo

**[View Live App →](https://crypto-dashr.vercel.app/)**

## ✨ Features

- 📊 **Real-time Crypto Data** - View up-to-date cryptocurrency prices and market data
- 📈 **Interactive Charts** - Analyze price trends with beautiful Chart.js visualizations
- 🔍 **Search & Filter** - Easily find specific cryptocurrencies
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Modern UI** - Clean, intuitive interface with Tailwind CSS

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Chart.js** - Beautiful, responsive charts
- **React Router** - Client-side routing
- **React Icons** - Popular icon library

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/crypto-dashr.git
   cd crypto-dashr
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── coin-card/    # Cryptocurrency card component
│   ├── coin-chart/   # Price chart component
│   ├── filter-input/ # Search filter component
│   ├── header/       # Navigation header
│   ├── limit-selector/ # Results limit selector
│   ├── sort-selector/  # Sorting options
│   └── spinner/      # Loading spinner
├── custom/           # Custom hooks
│   └── fetch/        # Data fetching hook
├── pages/            # Page components
│   ├── home/         # Homepage with coin listings
│   ├── coin-details/ # Individual coin details
│   ├── about/        # About page
│   └── not-found/    # 404 page
└── assets/           # Static assets
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com). Any push to the main branch will trigger an automatic deployment.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React and TypeScript
