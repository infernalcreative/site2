/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div 
      className={`min-h-screen w-full flex items-center justify-center transition-colors duration-500 font-sans ${
        isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'
      }`}
    >
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-6 right-6 p-2 transition-colors flex items-center justify-center ${
          isDark 
            ? 'text-zinc-400 hover:text-white' 
            : 'text-zinc-400 hover:text-zinc-900'
        }`}
        aria-label="Переключить тему"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight">
          Что-то пошло не так
        </h1>
      </motion.div>
    </div>
  );
}
