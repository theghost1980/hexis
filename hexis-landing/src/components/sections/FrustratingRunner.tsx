"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type KaplayCtx = any;

const INSULTS = [
  "Así mismo intentas aplicar una y otra vez al mismo botón de 'Easy Apply' esperando un resultado diferente...",
  "Aplicando a empleos como juegas esto, NUNCA vas a tener un puesto tech. Es tan frustrante como este juego.",
  "¿Otro intento fallido? Tu CV en las bases de datos de las empresas dura menos tiempo vivo que este muñeco.",
  "THEMACHINE te descartó de inmediato. Justo como lo hace con tu currículum real.",
  "¿Te cansaste de perder? Deja de jugar al azar con tu carrera profesional.",
];

export default function FrustratingRunner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [deathCount, setDeathCount] = useState(0);
  const [score, setScore] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");

  const kRef = useRef<KaplayCtx | null>(null);
  const initializedRef = useRef(false);
  const gameStateRef = useRef({
    score: 0,
    deathCount: 0,
    gameOver: false,
    timer: 0,
  });

  const resetGame = () => {
    const k = kRef.current;
    if (!k) return;

    setScore(0);
    setGameOver(false);
    setCurrentMessage("");

    gameStateRef.current.score = 0;
    gameStateRef.current.gameOver = false;
    gameStateRef.current.timer = 0;

    k.destroyAll("obstacle");
    k.destroyAll("particle");

    const player = k.get("player")[0];
    if (player) {
      player.pos = k.vec2(120, 240);
      player.use(k.opacity(1));
      k.wait(0.05, () => {
        player.play("run");
      });
    }
  };

  const spawnObstacle = (k: KaplayCtx) => {
    if (gameStateRef.current.gameOver) return;

    const types = ["ats", "rejection", "easyapply"];
    const type = types[Math.floor(Math.random() * types.length)];
    const colors: Record<string, [number, number, number]> = {
      ats: [239, 68, 68],
      rejection: [249, 115, 22],
      easyapply: [234, 179, 8],
    };
    const labels: Record<string, string> = {
      ats: "ATS",
      rejection: "REJECTED",
      easyapply: "Easy Apply",
    };

    const speed = 380 + gameStateRef.current.deathCount * 20;
    const height = 28 + Math.random() * 20;
    const width = 40 + Math.random() * 15;

    const obstacle = k.add([
      k.rect(width, height, { radius: 4 }),
      k.color(...colors[type]),
      k.pos(k.width() + 20, 304 - height),
      k.area(),
      k.move(k.LEFT, speed),
      k.outline(2, [0, 0, 0]),
      "obstacle",
    ]);

    const label = k.add([
      k.text(labels[type], { size: 10, font: "monospace" }),
      k.color(255, 255, 255),
      k.pos(obstacle.pos.x + 4, obstacle.pos.y + 6),
      k.move(k.LEFT, speed),
      "obstacle",
    ]);

    label.onUpdate(() => {
      label.pos.x = obstacle.pos.x + 6;
    });

    obstacle.onUpdate(() => {
      if (obstacle.pos.x < -60) {
        obstacle.destroy();
        label.destroy();
        if (!gameStateRef.current.gameOver) {
          gameStateRef.current.score++;
          setScore(gameStateRef.current.score);
        }
      }
    });
  };

  const triggerDeath = () => {
    const k = kRef.current;
    if (!k || gameStateRef.current.gameOver) return;

    gameStateRef.current.gameOver = true;
    gameStateRef.current.deathCount++;

    const count = gameStateRef.current.deathCount;
    setDeathCount(count);
    setGameOver(true);
    setCurrentMessage(INSULTS[Math.min(count - 1, INSULTS.length - 1)]);

    const player = k.get("player")[0];
    if (player) {
      for (let i = 0; i < 20; i++) {
        const angle = k.rand(-Math.PI, 0);
        const speed = k.rand(150, 350);

        k.add([
          k.rect(10, 14),
          k.color(255, 255, 255),
          k.pos(player.pos.x, player.pos.y + 10),
          k.opacity(1),
          k.rotate(k.rand(0, 360)),
          k.move(k.vec2(Math.cos(angle), Math.sin(angle)), speed),
          k.body({ gravityScale: 0.5 }),
          k.offscreen({ destroy: true }),
          "particle",
        ]);
      }
      player.use(k.opacity(0));
    }

    k.shake(15);
  };

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    let kInstance: KaplayCtx | null = null;

    const initGame = async () => {
      const kaplay = (await import("kaplay")).default;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const k = kaplay({
        canvas,
        width: 800,
        height: 360,
        background: [15, 23, 42],
        crisp: true,
        global: false,
        focus: false,
      });

      kRef.current = k;
      kInstance = k;

      k.setGravity(1600);

      // Sprite sheet: 1118x223 → forzamos frameWidth:223 manual (evita división decimal)
      try {
        await (k as KaplayCtx).loadSprite("player", "/images/player-spritesheet.png", {
          sliceX: 5,
          sliceY: 1,
          frameWidth: 223,
          frameHeight: 223,
          anims: {
            run: { from: 0, to: 3, speed: 12, loop: true },
            jump: { from: 4, to: 4 },
          },
        });
      } catch (err) {
        console.error("Error cargando el spritesheet:", err);
      }

      // Suelo estático en Y:304, altura 56
      k.add([
        k.rect(k.width(), 56),
        k.pos(0, 304),
        k.color(30, 41, 59),
        k.area(),
        k.body({ isStatic: true }),
        "ground",
      ]);

      // Línea decorativa del suelo
      k.add([k.rect(k.width(), 4), k.pos(0, 304), k.color(51, 65, 85)]);

      // Jugador con anchor("center"), scale 0.45, hitbox centrada
      const player = k.add([
        k.sprite("player", { anim: "run" }),
        k.pos(120, 240),
        k.anchor("center"),
        k.scale(0.45),
        k.opacity(1),
        k.area({ shape: new k.Rect(k.vec2(-20, -10), 40, 65) }),
        k.body(),
        "player",
      ]);

      const handleJump = () => {
        if (
          player.isGrounded() &&
          !gameStateRef.current.gameOver &&
          player.opacity === 1
        ) {
          player.jump(480);
          player.play("jump");
        }
      };

      k.onClick(handleJump);

      player.onGround(() => {
        if (!gameStateRef.current.gameOver && player.opacity === 1) {
          player.play("run");
        }
      });

      player.onCollide("obstacle", () => {
        triggerDeath();
      });

      k.onUpdate(() => {
        if (gameStateRef.current.gameOver) return;

        gameStateRef.current.timer += k.dt();
        const spawnInterval = Math.max(
          0.5,
          1.0 - gameStateRef.current.deathCount * 0.08,
        );

        if (gameStateRef.current.timer >= spawnInterval) {
          gameStateRef.current.timer = 0;
          spawnObstacle(k);
          // 40% chance of double trouble
          if (Math.random() < 0.4) {
            k.wait(k.rand(0.1, 0.3), () => spawnObstacle(k));
          }
        }
      });
    };

    initGame();

    return () => {
      if (kInstance) {
        try {
          kInstance.destroy();
        } catch (e) {
          console.error(e);
        }
      }
    };
  }, []);

  // Audio: solo suena cuando la sección del juego está visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const audio = new Audio("/audios/High_Score_Chase.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          audio.play().catch(() => {});
        } else {
          audio.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      audio.pause();
      audio.src = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl select-none">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          Filtro Simulado de Postulaciones v2.1
        </span>
        <span className="text-sm font-mono text-cyan-400">
          CVs Esquivados:{" "}
          <strong className="text-white text-base">{score}</strong>
        </span>
      </div>

      <div className="relative bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-auto block aspect-[80/36]"
          tabIndex={-1}
        />

        {!gameOver && score === 0 && deathCount === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
            <p className="text-xs text-slate-400 font-mono animate-pulse bg-slate-900/80 px-3 py-1.5 rounded border border-slate-700">
              [ Toca o haz clic para saltar ]
            </p>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-[300]">
            <AlertCircle className="w-8 h-8 text-red-500 mb-2 animate-bounce" />
            <p className="text-sm font-mono text-red-400 font-semibold uppercase tracking-wide mb-1">
              Postulación Rechazada
            </p>
            <p className="text-sm text-slate-300 font-sans max-w-sm leading-relaxed mb-5 min-h-[48px] italic">
              &ldquo;{currentMessage}&rdquo;
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetGame();
              }}
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-medium px-5 py-2.5 rounded-md border border-cyan-400 transition-colors shadow-lg shadow-cyan-900/30"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reoptimizar CV y reintentar
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center border-t border-slate-800/60 pt-3">
        <span className="text-[10px] font-mono text-slate-500">
          Contador de frustración: {deathCount}{" "}
          {deathCount === 1 ? "intento masivo" : "intentos masivos"}
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          Powered by KAPLAY & Next.js
        </span>
      </div>
    </div>
  );
}
