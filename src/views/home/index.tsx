// Next, React
import { FC, useState, useEffect } from "react";
import pkg from "../../../package.json";

// ❌ DO NOT EDIT ANYTHING ABOVE THIS LINE

export const HomeView: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* HEADER – fake Scrolly feed tabs */}
      <header className="flex items-center justify-center border-b border-white/10 py-3">
        <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px]">
          <button className="rounded-full bg-slate-900 px-3 py-1 font-semibold text-white">
            Feed
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Casino
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Kids
          </button>
        </div>
      </header>

      {/* MAIN – central game area (phone frame) */}
      <main className="flex flex-1 items-center justify-center px-4 py-3">
        <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
          {/* Fake “feed card” top bar inside the phone */}
          <div className="flex items-center justify-between px-3 py-2 text-[10px] text-slate-400">
            <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] uppercase tracking-wide">
              Scrolly Game
            </span>
            <span className="text-[9px] opacity-70">#NoCodeJam</span>
          </div>

          {/* The game lives INSIDE this phone frame */}
          <div className="flex h-[calc(100%-26px)] flex-col items-center justify-start px-3 pb-3 pt-1">
            <GameSandbox />
          </div>
        </div>
      </main>

      {/* FOOTER – tiny version text */}
      <footer className="flex h-5 items-center justify-center border-t border-white/10 px-2 text-[9px] text-slate-500">
        <span>Scrolly · v{pkg.version}</span>
      </footer>
    </div>
  );
};

// ✅ THIS IS THE ONLY PART YOU EDIT FOR THE JAM
// Replace this entire GameSandbox component with the one AI generates.
// Keep the name `GameSandbox` and the `FC` type.

const GameSandbox: FC = () => {
  // CRYPTO WORD BANK with difficulty levels
  const WORD_BANK = {
    easy: [
      "BITCOIN",
      "WALLET",
      "NFT",
      "DAO",
      "GAS",
      "HODL",
      "NODE",
      "TOKEN",
      "HASH",
      "BLOCK",
      "CHAIN",
      "MEME",
      "FIAT",
      "KEYS",
      "SEED",
      "COIN",
      "MINER",
      "POOL",
      "FORK",
      "LEDGER",
      "TRADE",
      "PRICE",
      "VOLUME",
      "SWAP",
      "BUY",
      "SELL",
      "BULL",
      "BEAR",
      "MOON",
      "LAMBO",
    ],
    medium: [
      "ETHEREUM",
      "SOLANA",
      "DEFI",
      "MINING",
      "LEDGER",
      "STAKING",
      "AIRDROP",
      "WEB3",
      "ORACLE",
      "BRIDGE",
      "DAPP",
      "SMART",
      "AVALANCHE",
      "POLYGON",
      "CARDANO",
      "BINANCE",
      "KRAKEN",
      "COINBASE",
      "METAMASK",
      "PHANTOM",
      "LIQUIDITY",
      "YIELD",
      "FARMING",
      "BORROW",
      "LENDING",
      "STABLE",
      "COLLATERAL",
      "LEVERAGE",
      "MARGIN",
      "FUTURES",
      "OPTION",
      "DERIVATIVE",
      "INDEX",
      "PORTFOLIO",
      "ALPHA",
    ],
    hard: [
      "BLOCKCHAIN",
      "SATOSHI",
      "METAVERSE",
      "CONSENSUS",
      "VALIDATOR",
      "LIQUIDITY",
      "GOVERNANCE",
      "PROTOCOL",
      "INTEROPERABILITY",
      "DECENTRALIZATION",
      "IMMUTABILITY",
      "PERMISSIONLESS",
      "TRUSTLESS",
      "CRYPTOCURRENCY",
      "ANONYMIZATION",
      "ZERO-KNOWLEDGE",
      "ROLLUP",
      "SHARDING",
      "SCALABILITY",
      "THROUGHPUT",
      "FINALITY",
      "BYZANTINE",
      "TOLERANCE",
      "SYBIL",
      "RESISTANCE",
      "HASHGRAPH",
      "DIRECTED",
      "ACRYLIC",
      "PROOF-OF-STAKE",
      "PROOF-OF-WORK",
      "PROOF-OF-HISTORY",
      "PROOF-OF-STORAGE",
      "PROOF-OF-BANDWIDTH",
      "MERKLE",
      "TREE",
      "ELLIPTIC",
      "CURVE",
      "CRYPTOGRAPHY",
      "ASIC",
      "RESISTANT",
      "QUANTUM",
      "RESILIENT",
      "HYPERLEDGER",
      "CORDAPROTOCOL",
      "HEDERA",
    ],
    expert: [
      "NON-FUNGIBLE",
      "HOMOMORPHIC",
      "ENCRYPTION",
      "POST-QUANTUM",
      "CRYPTOGRAPHY",
      "MULTISIGNATURE",
      "THRESHOLD",
      "SIGNATURE",
      "CONFIDENTIAL",
      "TRANSACTION",
      "MINIMUM",
      "VIABLE",
      "PRODUCT",
      "DECENTRALIZED",
      "AUTONOMOUS",
      "ORGANIZATION",
      "INITIAL",
      "COIN",
      "OFFERING",
      "SECURITY",
      "TOKEN",
      "OFFERING",
      "UTILITY",
      "TOKEN",
      "GOVERNANCE",
      "TOKEN",
      "FRACTIONAL",
      "OWNERSHIP",
      "TOKENOMICS",
      "DEFLATIONARY",
      "INFLATIONARY",
      "BURN",
      "MECHANISM",
      "VEYIELD",
      "OPTIMIZATION",
      "ARBITRAGE",
      "OPPORTUNITY",
      "IMPERMANENT",
      "LOSS",
      "AUTOMATED",
      "MARKET",
      "MAKER",
      "CONSTANT",
      "PRODUCT",
      "BALANCER",
      "LIQUIDITY",
      "PROVIDER",
      "YIELD",
      "AGGREGATOR",
      "CROSS-CHAIN",
    ],
  };

  // CRYPTO DEFINITIONS DATABASE
  const CRYPTO_DEFINITIONS: Record<
    string,
    { definition: string; category: string; difficulty: string }
  > = {
    BITCOIN: {
      definition:
        "The first decentralized cryptocurrency, created by Satoshi Nakamoto in 2008. It operates on a proof-of-work blockchain.",
      category: "Cryptocurrency",
      difficulty: "easy",
    },
    WALLET: {
      definition:
        "Software or hardware that stores private keys used to access and manage cryptocurrency addresses and funds.",
      category: "Infrastructure",
      difficulty: "easy",
    },
    NFT: {
      definition:
        "Non-Fungible Token - A unique digital asset stored on a blockchain that represents ownership of digital or physical items.",
      category: "Digital Assets",
      difficulty: "easy",
    },
    DAO: {
      definition:
        "Decentralized Autonomous Organization - An organization governed by smart contracts and member voting rather than central leadership.",
      category: "Governance",
      difficulty: "easy",
    },
    GAS: {
      definition:
        "The fee required to successfully execute a transaction or smart contract on blockchain networks like Ethereum.",
      category: "Transaction",
      difficulty: "easy",
    },
    HODL: {
      definition:
        "A meme-derived term meaning 'Hold On for Dear Life' - a strategy of holding cryptocurrency long-term regardless of price volatility.",
      category: "Strategy",
      difficulty: "easy",
    },
    NODE: {
      definition:
        "A computer that participates in a blockchain network by maintaining a copy of the ledger and validating transactions.",
      category: "Infrastructure",
      difficulty: "easy",
    },
    TOKEN: {
      definition:
        "A digital asset built on top of an existing blockchain that can represent various assets or utilities.",
      category: "Digital Assets",
      difficulty: "easy",
    },
    HASH: {
      definition:
        "A cryptographic function that converts input data of any size into a fixed-size string of characters, essential for blockchain security.",
      category: "Security",
      difficulty: "easy",
    },
    BLOCK: {
      definition:
        "A collection of transactions grouped together and added to a blockchain. Each block contains a cryptographic hash of the previous block.",
      category: "Blockchain",
      difficulty: "easy",
    },
    CHAIN: {
      definition:
        "The sequence of blocks in a blockchain, each cryptographically linked to the previous one, creating an immutable record.",
      category: "Blockchain",
      difficulty: "easy",
    },
    MEME: {
      definition:
        "Internet culture-inspired cryptocurrencies that often gain popularity through social media rather than technical fundamentals.",
      category: "Culture",
      difficulty: "easy",
    },
    FIAT: {
      definition:
        "Government-issued currency (like USD, EUR) that isn't backed by a physical commodity but by the government that issued it.",
      category: "Currency",
      difficulty: "easy",
    },
    ETHEREUM: {
      definition:
        "A decentralized blockchain platform that enables smart contracts and decentralized applications (dApps) to be built and run without downtime.",
      category: "Platform",
      difficulty: "medium",
    },
    SOLANA: {
      definition:
        "A high-performance blockchain supporting smart contracts and decentralized apps, known for its fast transaction speeds and low costs.",
      category: "Platform",
      difficulty: "medium",
    },
    DEFI: {
      definition:
        "Decentralized Finance - Financial services built on blockchain that operate without traditional intermediaries like banks.",
      category: "Finance",
      difficulty: "medium",
    },
    STAKING: {
      definition:
        "The process of locking cryptocurrency to support network operations and earn rewards, similar to earning interest.",
      category: "Economics",
      difficulty: "medium",
    },
    AIRDROP: {
      definition:
        "Free distribution of cryptocurrency tokens to community members, often used for marketing or rewarding early adopters.",
      category: "Distribution",
      difficulty: "medium",
    },
    WEB3: {
      definition:
        "The vision of a decentralized internet built on blockchain technology, giving users control over their data and digital identity.",
      category: "Vision",
      difficulty: "medium",
    },
    ORACLE: {
      definition:
        "Services that provide smart contracts with external real-world data, bridging blockchain with off-chain information.",
      category: "Infrastructure",
      difficulty: "medium",
    },
    BRIDGE: {
      definition:
        "Protocols that enable transfer of assets and data between different blockchain networks.",
      category: "Infrastructure",
      difficulty: "medium",
    },
    DAPP: {
      definition:
        "Decentralized Application - An application that runs on a blockchain network rather than centralized servers.",
      category: "Applications",
      difficulty: "medium",
    },
    BLOCKCHAIN: {
      definition:
        "A distributed digital ledger technology that records transactions across many computers securely and transparently.",
      category: "Technology",
      difficulty: "hard",
    },
    SATOSHI: {
      definition:
        "The smallest unit of Bitcoin (0.00000001 BTC), named after Bitcoin's pseudonymous creator Satoshi Nakamoto.",
      category: "Cryptocurrency",
      difficulty: "hard",
    },
    METAVERSE: {
      definition:
        "A collective virtual shared space created by converging virtual reality, augmented reality, and blockchain technologies.",
      category: "Digital World",
      difficulty: "hard",
    },
    CONSENSUS: {
      definition:
        "The mechanism by which blockchain networks agree on the validity of transactions and the state of the ledger.",
      category: "Protocol",
      difficulty: "hard",
    },
    VALIDATOR: {
      definition:
        "A participant in proof-of-stake networks who stakes tokens to validate transactions and create new blocks.",
      category: "Infrastructure",
      difficulty: "hard",
    },
    LIQUIDITY: {
      definition:
        "The ease with which an asset can be bought or sold without affecting its price. High liquidity enables efficient markets.",
      category: "Finance",
      difficulty: "hard",
    },
    GOVERNANCE: {
      definition:
        "The systems and processes by which blockchain protocols make decisions and implement changes through token holder voting.",
      category: "Politics",
      difficulty: "hard",
    },
    PROTOCOL: {
      definition:
        "The fundamental set of rules that define how a blockchain network operates, including transaction validation and consensus.",
      category: "Technology",
      difficulty: "hard",
    },
    NON_FUNGIBLE: {
      definition:
        "A property of unique items that cannot be exchanged on a one-to-one basis (unlike fungible assets like currency).",
      category: "Digital Assets",
      difficulty: "expert",
    },
    MULTISIGNATURE: {
      definition:
        "A security feature requiring multiple private keys to authorize a cryptocurrency transaction, enhancing security.",
      category: "Security",
      difficulty: "expert",
    },
    DECENTRALIZED: {
      definition:
        "A system where control is distributed among participants rather than concentrated in a central authority.",
      category: "Philosophy",
      difficulty: "expert",
    },
    AUTONOMOUS: {
      definition:
        "Systems that operate independently according to pre-programmed rules without human intervention.",
      category: "Technology",
      difficulty: "expert",
    },
    TOKENOMICS: {
      definition:
        "The economic system design of a cryptocurrency including its distribution, utility, and incentive structures.",
      category: "Economics",
      difficulty: "expert",
    },
    IMPERMANENT: {
      definition:
        "A temporary loss experienced by liquidity providers in automated market makers due to price volatility.",
      category: "Finance",
      difficulty: "expert",
    },
  };

  // GAME STATE
  const [word, setWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing"
  );
  const [message, setMessage] = useState<string>(
    "Save the wallet! Guess letters."
  );
  const [transactionHistory, setTransactionHistory] = useState<string[]>([
    "Security breach detected!",
  ]);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [hintsUsed, setHintsUsed] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<
    "easy" | "medium" | "hard" | "expert"
  >("medium");
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showDifficultySelect, setShowDifficultySelect] =
    useState<boolean>(false);
  const [showDefinition, setShowDefinition] = useState<boolean>(false);
  const [currentDefinition, setCurrentDefinition] = useState<{
    definition: string;
    category: string;
    difficulty: string;
  } | null>(null);
  const [stats, setStats] = useState({
    easyWins: 0,
    mediumWins: 0,
    hardWins: 0,
    expertWins: 0,
    totalGames: 0,
    bestStreak: 0,
    termsLearned: 0,
  });

  const HANGMAN_STAGES = 7;
  const MAX_HINTS = 2;

  // Initialize game
  useEffect(() => {
    startNewGame();
    const savedStats = localStorage.getItem("cryptoHangmanStats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update best streak
  useEffect(() => {
    if (streak > stats.bestStreak) {
      const updatedStats = { ...stats, bestStreak: streak };
      setStats(updatedStats);
      localStorage.setItem("cryptoHangmanStats", JSON.stringify(updatedStats));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streak]);

  // Keyboard event listener
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();

      // Check if it's a letter A-Z
      if (key.length === 1 && key >= "A" && key <= "Z") {
        guessLetter(key);
      }

      // Enter key to start new game
      if (event.key === "Enter" && gameStatus !== "playing") {
        if (showDifficultySelect) {
          startNewGame();
        } else {
          setShowDifficultySelect(true);
        }
      }

      // H key for hint
      if (key === "H" && gameStatus === "playing" && hintsUsed < MAX_HINTS) {
        handleHint();
      }

      // Escape to close difficulty selector
      if (event.key === "Escape" && showDifficultySelect) {
        setShowDifficultySelect(false);
      }

      // Number keys 1-4 for difficulty selection when selector is open
      if (showDifficultySelect) {
        if (event.key === "1") {
          setDifficulty("easy");
          startNewGame();
        } else if (event.key === "2") {
          setDifficulty("medium");
          startNewGame();
        } else if (event.key === "3") {
          setDifficulty("hard");
          startNewGame();
        } else if (event.key === "4") {
          setDifficulty("expert");
          startNewGame();
        }
      }

      // Space to continue after seeing definition
      if (event.key === " " && showDefinition) {
        setShowDefinition(false);
        setShowDifficultySelect(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    gameStatus,
    guessedLetters,
    word,
    showDifficultySelect,
    hintsUsed,
    showDefinition,
  ]);

  const startNewGame = () => {
    const wordPool = WORD_BANK[difficulty];
    const randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("playing");
    setHintsUsed(0);
    setStartTime(Date.now());
    setShowDifficultySelect(false);
    setShowDefinition(false);
    setCurrentDefinition(null);

    // Update total games
    const updatedStats = { ...stats, totalGames: stats.totalGames + 1 };
    setStats(updatedStats);
    localStorage.setItem("cryptoHangmanStats", JSON.stringify(updatedStats));

    setMessage(
      `🎯 ${difficulty.toUpperCase()} | Crack the ${
        randomWord.length
      }-letter key`
    );
    setTransactionHistory([`🔐 New ${difficulty} challenge started`]);
  };

  // Display word with underscores
  const displayWord = () => {
    return word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  // Get definition for word
  const getDefinition = (word: string) => {
    const normalizedWord = word.toUpperCase();
    if (CRYPTO_DEFINITIONS[normalizedWord]) {
      return CRYPTO_DEFINITIONS[normalizedWord];
    }

    // Fallback definitions for words not in database
    const fallbackDefinitions: Record<
      string,
      { definition: string; category: string; difficulty: string }
    > = {
      MEME: {
        definition:
          "Internet culture-inspired cryptocurrencies that gain popularity through social media virality rather than technical fundamentals.",
        category: "Culture",
        difficulty: "easy",
      },
      LAMBO: {
        definition:
          "Slang term in crypto communities referring to a Lamborghini, symbolizing extreme wealth from cryptocurrency investments.",
        category: "Culture",
        difficulty: "easy",
      },
      MOON: {
        definition:
          "Crypto slang for when a cryptocurrency's price increases dramatically, often used in phrases like 'to the moon!'",
        category: "Culture",
        difficulty: "easy",
      },
    };

    return (
      fallbackDefinitions[normalizedWord] || {
        definition:
          "A cryptocurrency or blockchain-related term. You've successfully identified it!",
        category: "Crypto",
        difficulty: difficulty,
      }
    );
  };

  // Check win/lose conditions
  useEffect(() => {
    if (!word) return;

    const hasWon = word
      .split("")
      .every((letter) => guessedLetters.includes(letter));

    if (hasWon && gameStatus === "playing") {
      setGameStatus("won");
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);
      const timeBonus = Math.max(0, 120 - timeTaken);
      const difficultyMultiplier = {
        easy: 1,
        medium: 2,
        hard: 3,
        expert: 5,
      }[difficulty];
      const hintPenalty = hintsUsed * 20;
      const guessBonus = (HANGMAN_STAGES - wrongGuesses) * 30;
      const lengthBonus = word.length * 5;
      const points = Math.max(
        0,
        Math.round(
          (100 + timeBonus + guessBonus + lengthBonus) * difficultyMultiplier -
            hintPenalty
        )
      );

      setScore(score + points);
      setStreak(streak + 1);

      // Update difficulty-specific wins and terms learned
      const updatedStats = { ...stats };
      switch (difficulty) {
        case "easy":
          updatedStats.easyWins++;
          break;
        case "medium":
          updatedStats.mediumWins++;
          break;
        case "hard":
          updatedStats.hardWins++;
          break;
        case "expert":
          updatedStats.expertWins++;
          break;
      }

      // Check if this is a new term learned
      if (!transactionHistory.some((tx) => tx.includes("Term learned:"))) {
        updatedStats.termsLearned = (updatedStats.termsLearned || 0) + 1;
      }

      setStats(updatedStats);
      localStorage.setItem("cryptoHangmanStats", JSON.stringify(updatedStats));

      // Set definition for educational component
      const definition = getDefinition(word);
      setCurrentDefinition(definition);

      setMessage(`🎊 +${points} pts! ${timeTaken}s · Streak: ${streak + 1}`);
      setTransactionHistory((prev) => [
        ...prev,
        `✅ Wallet secured! +${points} pts`,
        `🏆 ${difficulty} wins: ${
          {
            easy: updatedStats.easyWins,
            medium: updatedStats.mediumWins,
            hard: updatedStats.hardWins,
            expert: updatedStats.expertWins,
          }[difficulty]
        }`,
      ]);

      setTimeout(() => {
        setShowDefinition(true);
      }, 1500);
    }

    if (wrongGuesses >= HANGMAN_STAGES && gameStatus === "playing") {
      setGameStatus("lost");
      setStreak(0);
      setMessage(`💸 WALLET WIPED! Answer: ${word}`);
      setTransactionHistory((prev) => [
        ...prev,
        `❌ Security breach complete`,
        `💀 Streak reset to 0`,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetters, wrongGuesses, word, gameStatus]);

  // Handle letter guess
  const guessLetter = (letter: string) => {
    if (gameStatus !== "playing" || guessedLetters.includes(letter)) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      setTransactionHistory((prev) => [...prev, `⚠️ Failed: "${letter}"`]);

      if (newWrongGuesses === HANGMAN_STAGES - 1) {
        setMessage("🚨 LAST CHANCE! One wrong = WIPED!");
      } else {
        setMessage(
          `❌ Wrong! ${HANGMAN_STAGES - newWrongGuesses} attempts left`
        );
      }
    } else {
      const count = word.split("").filter((l) => l === letter).length;
      setMessage(`✅ Found ${count} "${letter}"`);
      setTransactionHistory((prev) => [
        ...prev,
        `✓ Revealed ${count} "${letter}"`,
      ]);
    }
  };

  // Hint system
  const handleHint = () => {
    if (gameStatus !== "playing" || hintsUsed >= MAX_HINTS) return;

    const unguessedLetters = word
      .split("")
      .filter((l) => !guessedLetters.includes(l));
    if (unguessedLetters.length === 0) return;

    // Prioritize vowels for hints
    const vowels = unguessedLetters.filter((l) => "AEIOU".includes(l));
    const hintLetter = vowels.length > 0 ? vowels[0] : unguessedLetters[0];

    setHintsUsed(hintsUsed + 1);
    guessLetter(hintLetter);
    setTransactionHistory((prev) => [
      ...prev,
      `💡 Hint used (${MAX_HINTS - hintsUsed} left)`,
    ]);
  };

  // Render hangman graphic
  const renderHangman = () => {
    return (
      <div className="relative h-32 w-full mx-auto">
        {/* Gallows */}
        <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 bg-amber-900 rounded"></div>
        <div className="absolute left-1/2 top-0 h-28 w-1.5 -translate-x-1/2 bg-amber-900 rounded"></div>
        <div className="absolute bottom-3 left-1/2 h-1.5 w-20 -translate-x-1/2 bg-amber-900 rounded"></div>
        <div className="absolute bottom-2 left-1/2 h-3 w-24 -translate-x-1/2 rounded bg-gradient-to-r from-gray-800 to-gray-800"></div>

        {/* Rope */}
        {wrongGuesses >= 1 && (
          <div className="absolute left-1/2 top-1.5 h-5 w-0.5 -translate-x-1/2 bg-gray-400"></div>
        )}

        {/* Wallet Head */}
        {wrongGuesses >= 2 && (
          <div className="absolute left-1/2 top-6 h-8 w-8 -translate-x-1/2">
            <div
              className={`h-full w-full rounded-full border-2 ${
                wrongGuesses >= 7 ? "border-red-700" : "border-red-500"
              } bg-gradient-to-br ${
                wrongGuesses >= 7
                  ? "from-gray-900 to-gray-700"
                  : "from-yellow-900 to-yellow-700"
              } transition-all duration-300`}
            >
              {wrongGuesses < 7 ? (
                <>
                  <div className="absolute left-1/2 top-[16px] h-3 w-5 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-yellow-300"></div>
                  <div className="absolute left-1/2 top-[23px] h-0.5 w-3 -translate-x-1/2 rounded-full bg-yellow-300"></div>
                </>
              ) : (
                <>
                  <div className="absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 bg-red-700"></div>
                  <div className="absolute left-1/2 top-1/2 h-full w-0.5 -translate-x-1/2 -translate-y-1/2 bg-red-700"></div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Body */}
        {wrongGuesses >= 3 && (
          <div className="absolute left-1/2 top-14 h-6 w-0.5 -translate-x-1/2 bg-red-500"></div>
        )}

        {/* Left arm */}
        {wrongGuesses >= 4 && (
          <div className="absolute left-1/2 top-14 h-7 w-0.5 -translate-x-1/2 -rotate-45 bg-red-500 origin-top"></div>
        )}

        {/* Right arm */}
        {wrongGuesses >= 5 && (
          <div className="absolute left-1/2 top-14 h-7 w-0.5 -translate-x-1/2 rotate-45 bg-red-500 origin-top"></div>
        )}

        {/* Left leg */}
        {wrongGuesses >= 6 && (
          <div className="absolute left-1/2 top-20 h-7 w-0.5 -translate-x-1/2 -rotate-45 bg-red-500 origin-top"></div>
        )}

        {/* Right leg */}
        {wrongGuesses >= 7 && (
          <div className="absolute left-1/2 top-20 h-7 w-0.5 -translate-x-1/2 rotate-45 bg-red-500 origin-top"></div>
        )}
      </div>
    );
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const securityPercentage = () => {
    if (!word) return 100;
    return Math.max(
      0,
      Math.round(((HANGMAN_STAGES - wrongGuesses) / HANGMAN_STAGES) * 100)
    );
  };

  // Difficulty color mapping
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "easy":
        return "text-green-400 bg-green-900/20";
      case "medium":
        return "text-yellow-400 bg-yellow-900/20";
      case "hard":
        return "text-orange-400 bg-orange-900/20";
      case "expert":
        return "text-red-400 bg-red-900/20";
      default:
        return "text-slate-400 bg-slate-900/20";
    }
  };

  // Definition display component
  const renderDefinition = () => {
    if (!currentDefinition || !showDefinition) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div className="relative w-full max-w-sm rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-xl">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <div className="rounded-full w-[200px] bg-gradient-to-r from-cyan-600 to-purple-600 px-4 py-1 text-xs font-semibold flex justify-center">
              🎓 CRYPTO KNOWLEDGE
            </div>
          </div>

          <div className="mt-4">
            <div className="mb-3 text-center">
              <div className="text-lg font-bold text-cyan-300">{word}</div>
              <div className="text-[10px] text-slate-400 mt-1">
                You just secured this term!
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-3">
                <div className="text-[10px] text-slate-400 mb-1">
                  DEFINITION
                </div>
                <div className="text-xs text-slate-200">
                  {currentDefinition.definition}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-2">
                  <div className="text-[10px] text-slate-400">CATEGORY</div>
                  <div className="text-xs font-bold text-cyan-300">
                    {currentDefinition.category}
                  </div>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-2">
                  <div className="text-[10px] text-slate-400">DIFFICULTY</div>
                  <div
                    className={`text-xs font-bold ${getDifficultyColor(
                      currentDefinition.difficulty
                    )} px-2 py-0.5 rounded`}
                  >
                    {currentDefinition.difficulty.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-green-500/20 bg-green-900/10 p-2">
                <div className="text-[10px] text-green-400">
                  EDUCATIONAL BONUS
                </div>
                <div className="text-xs text-green-300">
                  You&apos;ve learned {stats.termsLearned || 0} crypto terms so
                  far!
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  setShowDefinition(false);
                  setShowDifficultySelect(true);
                }}
                className="flex-1 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 py-2 text-xs font-semibold hover:opacity-90"
              >
                Continue (SPACE)
              </button>
              <button
                onClick={() => {
                  setShowDefinition(false);
                  startNewGame();
                }}
                className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-2 text-xs font-semibold hover:opacity-90"
              >
                New Game
              </button>
            </div>

            <div className="mt-2 text-center text-[10px] text-slate-500">
              Press SPACE to continue to next game
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-between p-2 overflow-hidden">
      {/* Definition Modal */}
      {renderDefinition()}

      {/* Header with Score */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h1 className="text-base font-bold bg-gradient-to-r from-[#e5ff4a] to-yellow-500 bg-clip-text text-transparent">
              🔐 Hashman
            </h1>
            <div className="text-[8px] text-slate-500">
              160+ terms • Learn while you play
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-cyan-400">{score} pts</div>
            <div className="flex items-center gap-1">
              {streak > 0 && (
                <div className="text-[9px] text-purple-400">
                  🔥 {streak} streak
                </div>
              )}
              <div className="text-[8px] text-slate-500">
                Terms: {stats.termsLearned || 0}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex w-full items-start justify-between gap-2 my-1">
        {/* Left: Hangman Visual */}
        <div className="w-[45%]">
          <div className="rounded-lg border border-slate-700 bg-slate-900/30 p-2">
            {renderHangman()}

            {/* Attempts Counter */}
            <div className="text-center">
              <div className="text-[9px] text-slate-400 mb-1">
                Attempts {HANGMAN_STAGES - wrongGuesses}/7
              </div>
              <div className="flex justify-center gap-0.5">
                {Array.from({ length: HANGMAN_STAGES }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 w-3 rounded-sm transition-all ${
                      index < wrongGuesses ? "bg-red-500" : "bg-green-500/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Game Info */}
        <div className="w-[55%]">
          {/* Security Status */}
          <div className="rounded-lg border border-cyan-500/20 bg-gradient-to-b from-cyan-900/10 to-cyan-900/5 p-2 mb-2">
            <div className="flex justify-between items-center mb-1">
              <div className="flex gap-1 items-center">
                <p className="text-[9px] text-cyan-300">Security</p>
                {wrongGuesses >= 5 && wrongGuesses < 7 && (
                  <div className="animate-pulse text-[9px] font-bold text-red-500">
                    ⚠️
                  </div>
                )}
              </div>
              <div
                className={`text-[8px] px-1.5 py-0.5 rounded ${getDifficultyColor(
                  difficulty
                )}`}
              >
                {difficulty.toUpperCase()}
              </div>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800 mb-1">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  securityPercentage() > 60
                    ? "bg-green-500"
                    : securityPercentage() > 30
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${securityPercentage()}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px]">
              <span className="text-slate-400">
                {securityPercentage()}% secure
              </span>
              <span className="font-bold text-slate-300">
                {word ? word.length : 0} letters
              </span>
            </div>
          </div>

          {/* Hidden Word */}
          <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-2">
            <div className="text-[9px] text-slate-300 mb-1">Crypto Term</div>
            <div className="min-h-[44px] flex items-center justify-center">
              <p className="text-base font-mono font-bold tracking-[0.15em] text-cyan-200">
                {displayWord()}
              </p>
            </div>
            <div className="mt-1 text-[8px] text-slate-400 text-center">
              {word.split("").filter((l) => guessedLetters.includes(l)).length}/
              {word.length} revealed
            </div>
          </div>
        </div>
      </div>

      {/* Game Status Message */}
      <div
        className={`w-full rounded-md p-1.5 text-center text-[10px] font-medium mb-1 transition-all ${
          gameStatus === "playing"
            ? "bg-slate-800/50 text-slate-200"
            : gameStatus === "won"
            ? "bg-green-900/30 text-green-300"
            : "bg-red-900/30 text-red-300"
        }`}
      >
        {message}
      </div>

      {/* Transaction Log */}
      <div className="mb-1 flex h-16 w-full flex-col overflow-hidden rounded-md border border-slate-700 bg-slate-900/30">
        <div className="border-b border-slate-700 px-2 py-0.5 text-[9px] font-semibold text-slate-300 flex justify-between">
          <span>Security Log</span>
          <span>Hints: {MAX_HINTS - hintsUsed}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-1.5">
          {transactionHistory
            .slice()
            .reverse()
            .slice(0, 3)
            .map((tx, index) => (
              <div
                key={index}
                className="py-0.5 text-[9px] text-slate-300 border-b border-slate-800/50 last:border-0"
              >
                {tx}
              </div>
            ))}
        </div>
      </div>

      {/* Keyboard */}
      <div className="grid w-full grid-cols-7 gap-0.5 mb-1">
        {alphabet.map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = isGuessed && word.includes(letter);
          const isWrong = isGuessed && !word.includes(letter);

          return (
            <button
              key={letter}
              onClick={() => guessLetter(letter)}
              disabled={isGuessed || gameStatus !== "playing"}
              className={`
                rounded py-1 text-[10px] font-bold transition-all
                ${isCorrect ? "bg-green-900/70 text-green-200" : ""}
                ${isWrong ? "bg-red-900/70 text-red-200 opacity-40" : ""}
                ${
                  !isGuessed && gameStatus === "playing"
                    ? "bg-slate-800 hover:bg-slate-700 active:scale-95 text-white"
                    : ""
                }
                ${gameStatus !== "playing" && !isGuessed ? "opacity-30" : ""}
              `}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Game Controls */}
      {showDifficultySelect ? (
        <div className="absolute bottom-8 w-[90%] space-y-1 border border-cyan-500/30 bg-slate-900 shadow-lg p-4">
          <div className="text-[9px] text-center text-slate-400 mb-1">
            Select Difficulty (Press 1-4 or ESC)
          </div>
          <div className="grid grid-cols-2 gap-1">
            {(["easy", "medium", "hard", "expert"] as const).map(
              (diff, idx) => (
                <button
                  key={diff}
                  onClick={() => {
                    setDifficulty(diff);
                    startNewGame();
                  }}
                  className={`rounded-md py-1.5 text-[8px] font-bold transition-all flex flex-col items-center ${
                    diff === "easy"
                      ? "bg-green-900/50 hover:bg-green-900/70"
                      : diff === "medium"
                      ? "bg-yellow-900/50 hover:bg-yellow-900/70"
                      : diff === "hard"
                      ? "bg-orange-900/50 hover:bg-orange-900/70"
                      : "bg-red-900/50 hover:bg-red-900/70"
                  }`}
                >
                  <span>{diff.toUpperCase()}</span>
                  <span className="text-[8px] opacity-80">
                    ({WORD_BANK[diff].length} terms)
                  </span>
                </button>
              )
            )}
          </div>
          <div className="text-center text-[8px] text-slate-500 mt-1">
            Press{" "}
            {["1", "2", "3", "4"].map((num, idx) => (
              <span key={num} className="mx-0.5">
                {num} for {["easy", "medium", "hard", "expert"][idx]}
              </span>
            ))}
          </div>
          <button
            onClick={() => setShowDifficultySelect(false)}
            className="w-full rounded-md bg-slate-800 py-1 text-[9px] text-slate-400 hover:bg-slate-700"
          >
            Cancel (ESC)
          </button>
        </div>
      ) : (
        <div className="flex w-full gap-1">
          <button
            onClick={() => setShowDifficultySelect(true)}
            className="flex-1 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 py-1.5 text-[10px] font-bold hover:opacity-90 active:scale-95"
          >
            New Game {gameStatus !== "playing" && "(ENTER)"}
          </button>
          <button
            onClick={handleHint}
            disabled={gameStatus !== "playing" || hintsUsed >= MAX_HINTS}
            className="flex-1 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 py-1.5 text-[10px] font-bold disabled:opacity-40 hover:opacity-90 active:scale-95"
          >
            Hint ({MAX_HINTS - hintsUsed}) {gameStatus === "playing" && "(H)"}
          </button>
        </div>
      )}

      {/* Game Status Badge */}
      {gameStatus !== "playing" && !showDefinition && (
        <div
          className={`mt-1 animate-pulse rounded-full px-3 py-1 text-[10px] font-bold ${
            gameStatus === "won"
              ? "bg-green-900/50 text-green-300"
              : "bg-red-900/50 text-red-300"
          }`}
        >
          {gameStatus === "won" ? "✅ WALLET SECURED" : "💀 WALLET WIPED"}
        </div>
      )}

      {/* Stats Summary (small) */}
      {!showDifficultySelect && !showDefinition && (
        <div className="mt-1 text-[8px] text-slate-500 text-center">
          Terms learned: {stats.termsLearned || 0} | Games: {stats.totalGames}
        </div>
      )}
    </div>
  );
};
