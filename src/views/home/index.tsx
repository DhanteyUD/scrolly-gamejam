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
    ],
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
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "medium"
  );
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showDifficultySelect, setShowDifficultySelect] =
    useState<boolean>(false);

  const HANGMAN_STAGES = 7;
  const MAX_HINTS = 2;

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

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

      // Number keys 1-3 for difficulty selection when selector is open
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
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStatus, guessedLetters, word, showDifficultySelect, hintsUsed]);

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
    setMessage(
      `${difficulty.toUpperCase()} | Crack the ${randomWord.length}-letter key!`
    );
    setTransactionHistory([`🔐 New ${difficulty} security challenge`]);
  };

  // Display word with underscores
  const displayWord = () => {
    return word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
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
      const timeBonus = Math.max(0, 100 - timeTaken);
      const difficultyMultiplier =
        difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3;
      const hintPenalty = hintsUsed * 15;
      const guessBonus = (HANGMAN_STAGES - wrongGuesses) * 25;
      const points = Math.max(
        0,
        Math.round(
          (50 + timeBonus + guessBonus) * difficultyMultiplier - hintPenalty
        )
      );

      setScore(score + points);
      setStreak(streak + 1);
      setMessage(
        `🎊 +${points} pts! ${timeTaken}s · ${
          HANGMAN_STAGES - wrongGuesses
        } lives left!`
      );
      setTransactionHistory((prev) => [
        ...prev,
        `✅ Recovered! +${points} pts · Streak: ${streak + 1}`,
      ]);
    }

    if (wrongGuesses >= HANGMAN_STAGES && gameStatus === "playing") {
      setGameStatus("lost");
      setStreak(0);
      setMessage(`💸 WIPED! Answer: ${word}`);
      setTransactionHistory((prev) => [
        ...prev,
        `❌ All funds lost · Word: ${word}`,
      ]);
    }
  }, [guessedLetters, wrongGuesses, word, gameStatus]);

  // Handle letter guess
  const guessLetter = (letter: string) => {
    if (gameStatus !== "playing" || guessedLetters.includes(letter)) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      setTransactionHistory((prev) => [...prev, `⚠️ Wrong: "${letter}"`]);

      if (newWrongGuesses === HANGMAN_STAGES - 1) {
        setMessage("🚨 LAST CHANCE! One more = WALLET WIPED!");
      } else {
        setMessage(
          `❌ Wrong! ${HANGMAN_STAGES - newWrongGuesses} attempts left`
        );
      }
    } else {
      const count = word.split("").filter((l) => l === letter).length;
      setMessage(`✅ Found ${count}× "${letter}"!`);
      setTransactionHistory((prev) => [...prev, `✓ ${count}× "${letter}"`]);
    }
  };

  // Hint system
  const useHint = () => {
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
      <div className="relative h-36 w-28 mx-auto">
        {/* Gallows */}
        <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 bg-amber-900 rounded"></div>
        <div className="absolute left-1/2 top-0 h-28 w-1.5 -translate-x-1/2 bg-amber-900 rounded"></div>
        <div className="absolute bottom-0 left-1/2 h-1.5 w-20 -translate-x-1/2 bg-amber-900 rounded"></div>
        <div className="absolute -bottom-1 left-1/2 h-3 w-24 -translate-x-1/2 rounded bg-gradient-to-r from-gray-800 to-gray-900"></div>

        {/* Rope */}
        {wrongGuesses >= 1 && (
          <div className="absolute left-1/2 top-1.5 h-5 w-0.5 -translate-x-1/2 bg-gray-400"></div>
        )}

        {/* Wallet Head */}
        {wrongGuesses >= 2 && (
          <div className="absolute left-1/2 top-6 h-9 w-9 -translate-x-1/2">
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
                  <div className="absolute left-1/2 top-1/2 h-3 w-5 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-yellow-300"></div>
                  <div className="absolute left-1/2 top-3/4 h-0.5 w-3 -translate-x-1/2 rounded-full bg-yellow-300"></div>
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
          <div className="absolute left-1/2 top-15 h-14 w-0.5 -translate-x-1/2 bg-red-500"></div>
        )}

        {/* Left arm */}
        {wrongGuesses >= 4 && (
          <div className="absolute left-1/2 top-16 h-7 w-0.5 -translate-x-1/2 -rotate-45 bg-red-500 origin-top"></div>
        )}

        {/* Right arm */}
        {wrongGuesses >= 5 && (
          <div className="absolute left-1/2 top-16 h-7 w-0.5 -translate-x-1/2 rotate-45 bg-red-500 origin-top"></div>
        )}

        {/* Left leg */}
        {wrongGuesses >= 6 && (
          <div className="absolute left-1/2 top-29 h-9 w-0.5 -translate-x-1/2 -rotate-30 bg-red-500 origin-top"></div>
        )}

        {/* Right leg */}
        {wrongGuesses >= 7 && (
          <div className="absolute left-1/2 top-29 h-9 w-0.5 -translate-x-1/2 rotate-30 bg-red-500 origin-top"></div>
        )}

        {/* Critical warning */}
        {wrongGuesses >= 5 && wrongGuesses < 7 && (
          <div className="absolute -right-8 top-2 animate-pulse text-[9px] font-bold text-red-500">
            ⚠️
          </div>
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

  return (
    <div className="flex h-full w-full flex-col items-center justify-between p-2 overflow-hidden">
      {/* Header with Score */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-1">
          <div className="text-left">
            <h1 className="text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              🔐 Wallet&apos;s Last Stand
            </h1>
            <div className="text-[8px] text-slate-500 mt-0.5">
              ⌨️ Use keyboard to play
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-cyan-400">{score} pts</div>
            {streak > 0 && (
              <div className="text-[9px] text-purple-400">
                🔥 {streak} streak
              </div>
            )}
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
            <div className="mt-2 text-center">
              <div className="text-[9px] text-slate-400 mb-1">Lives</div>
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
            <div className="text-[9px] text-cyan-300 mb-1">Security</div>
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
              <span className="text-slate-400">{securityPercentage()}%</span>
              <span
                className={`font-bold ${
                  difficulty === "easy"
                    ? "text-green-400"
                    : difficulty === "medium"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {difficulty.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Hidden Word */}
          <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-2">
            <div className="text-[9px] text-slate-300 mb-1">Private Key</div>
            <div className="min-h-[44px] flex items-center justify-center">
              <p className="text-base font-mono font-bold tracking-[0.15em] text-cyan-200">
                {displayWord()}
              </p>
            </div>
            <div className="mt-1 text-[8px] text-slate-400 text-center">
              {word.length} chars ·{" "}
              {word.split("").filter((l) => guessedLetters.includes(l)).length}{" "}
              found
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
          <span>Stage {Math.min(wrongGuesses + 1, HANGMAN_STAGES)}/7</span>
        </div>
        <div className="flex-1 overflow-y-auto p-1.5">
          {transactionHistory
            .slice()
            .reverse()
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
        <div className="w-full space-y-1">
          <div className="text-[9px] text-center text-slate-400 mb-1">
            Select Difficulty (Press 1-3 or ESC)
          </div>
          <div className="grid grid-cols-3 gap-1">
            {(["easy", "medium", "hard"] as const).map((diff, idx) => (
              <button
                key={diff}
                onClick={() => {
                  setDifficulty(diff);
                  startNewGame();
                }}
                className={`rounded-md py-1.5 text-[10px] font-bold transition-all ${
                  diff === "easy"
                    ? "bg-green-900/50 hover:bg-green-900/70"
                    : diff === "medium"
                    ? "bg-yellow-900/50 hover:bg-yellow-900/70"
                    : "bg-red-900/50 hover:bg-red-900/70"
                }`}
              >
                {diff.toUpperCase()} ({idx + 1})
              </button>
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
      {gameStatus !== "playing" && (
        <div
          className={`mt-1 animate-pulse rounded-full px-3 py-1 text-[10px] font-bold ${
            gameStatus === "won"
              ? "bg-green-900/50 text-green-300"
              : "bg-red-900/50 text-red-300"
          }`}
        >
          {gameStatus === "won" ? "✅ SECURED" : "💀 WIPED"}
        </div>
      )}
    </div>
  );
};
