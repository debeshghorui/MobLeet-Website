"use client";

import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MENUS = [
  {
    id: "app",
    label: "The app",
    links: [
      { href: "#how", label: "Problems, editor, judge" },
      { href: "#editor", label: "Example problem" },
      { href: "#progress", label: "Practice calendar" },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    links: [
      { href: "#apply", label: "Apply for access" },
      { href: "#faq", label: "Before you apply" },
    ],
  },
] as const;

const LINKS = [
  { href: "#editor", label: "Editor" },
  { href: "#progress", label: "Progress" },
] as const;

type MenuId = (typeof MENUS)[number]["id"];

function toggleTheme() {
  const next = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem("mobleet-theme:v1", next);
  } catch {
    /* private mode */
  }
}

export function Navbar() {
  const rootRef = useRef<HTMLElement>(null);
  const baseId = useId();
  const [openId, setOpenId] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuOpen = openId !== null || mobileOpen;

  useEffect(() => {
    if (!menuOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenId(null);
        setMobileOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenId(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function closeAll() {
    setOpenId(null);
    setMobileOpen(false);
  }

  function toggleMenu(id: MenuId) {
    setMobileOpen(false);
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <header ref={rootRef} className="sticky top-3 z-30 mx-3 mt-3 sm:mx-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-3 focus:py-1.5 focus:text-sm focus:font-medium focus:text-[#111]"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-[90rem] rounded-[1.25rem] border border-white/10 bg-[#101010] text-[#ececec] shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_18px_40px_-24px_rgb(0_0_0/0.85)]">
        <div className="relative flex h-16 items-center gap-2 px-2.5 sm:px-3">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 pl-1">
            <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-[#1a1a1a] ring-1 ring-white/10">
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="size-6 object-contain"
              />
            </span>
            <span className="truncate text-[0.95rem] font-medium tracking-[-0.02em] text-white">
              MobLeet
            </span>
          </a>

          <nav
            aria-label="Page"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          >
            {MENUS.map((menu) => (
              <div key={menu.id} className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm text-[#c8c8c8] transition-colors hover:text-white"
                  aria-expanded={openId === menu.id}
                  aria-controls={`${baseId}-${menu.id}`}
                  onClick={() => toggleMenu(menu.id)}
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 opacity-70 transition-transform duration-200 ease-out",
                      openId === menu.id && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                {openId === menu.id ? (
                  <div
                    id={`${baseId}-${menu.id}`}
                    className="absolute top-[calc(100%+0.85rem)] left-1/2 z-40 w-60 -translate-x-1/2 rounded-xl border border-white/10 bg-[#161616] p-1.5 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.75)]"
                  >
                    <ul>
                      {menu.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-[#d2d2d2] transition-colors hover:bg-white/8 hover:text-white"
                            onClick={closeAll}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#c8c8c8] transition-colors hover:text-white"
                onClick={closeAll}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="hidden size-9 items-center justify-center rounded-lg text-[#cfcfcf] transition-colors hover:bg-white/8 hover:text-white lg:inline-flex"
              aria-label="Switch color theme"
              onClick={toggleTheme}
            >
              <Sun className="hidden size-4 dark:block" aria-hidden="true" />
              <Moon className="size-4 dark:hidden" aria-hidden="true" />
            </button>
            <a
              href="#faq"
              className="hidden px-2.5 text-sm text-[#e8e8e8] transition-colors hover:text-white lg:inline"
              onClick={closeAll}
            >
              FAQ
            </a>
            <a
              href="#apply"
              className="inline-flex h-9 items-center rounded-[0.65rem] bg-[linear-gradient(180deg,#fff_0%,#ececec_100%)] px-3 text-sm font-medium text-[#111] shadow-[inset_0_1px_0_rgb(255_255_255),0_1px_1px_rgb(0_0_0/0.18)] transition-colors hover:bg-[#f3f3f3] active:translate-y-px sm:px-3.5"
              onClick={closeAll}
            >
              Get started
            </a>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-lg text-[#e8e8e8] transition-colors hover:bg-white/8 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls={`${baseId}-mobile`}
              onClick={() => {
                setOpenId(null);
                setMobileOpen((open) => !open);
              }}
            >
              {mobileOpen ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div
            id={`${baseId}-mobile`}
            className="border-t border-white/10 px-3 pt-2 pb-3 lg:hidden"
          >
            {MENUS.map((menu) => (
              <div key={menu.id} className="pt-2">
                <p className="px-2 pb-1 text-xs text-[#9a9a9a]">{menu.label}</p>
                <ul>
                  {menu.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block rounded-lg px-2 py-2.5 text-sm text-[#e4e4e4] hover:bg-white/8 hover:text-white"
                        onClick={closeAll}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul className="mt-1 border-t border-white/10 pt-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-2 py-2.5 text-sm text-[#e4e4e4] hover:bg-white/8 hover:text-white"
                    onClick={closeAll}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="block rounded-lg px-2 py-2.5 text-sm text-[#e4e4e4] hover:bg-white/8 hover:text-white"
                  onClick={closeAll}
                >
                  FAQ
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-sm text-[#e4e4e4] hover:bg-white/8 hover:text-white"
              onClick={toggleTheme}
            >
              <Sun className="hidden size-4 dark:block" aria-hidden="true" />
              <Moon className="size-4 dark:hidden" aria-hidden="true" />
              Switch color theme
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
