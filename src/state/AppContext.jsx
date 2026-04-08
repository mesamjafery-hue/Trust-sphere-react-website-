import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { seedData } from "../data/seedData";

const STORAGE_KEY = "trustsphere-data-v1";
const AppContext = createContext(null);

function readStorage() {
  if (typeof window === "undefined") {
    return seedData;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : seedData;
  } catch (error) {
    console.error("Unable to read TrustSphere storage", error);
    return seedData;
  }
}

function createCrud(setState, key) {
  return {
    create: (payload) =>
      setState((current) => ({
        ...current,
        [key]: [{ id: crypto.randomUUID(), ...payload }, ...current[key]],
      })),
    update: (id, payload) =>
      setState((current) => ({
        ...current,
        [key]: current[key].map((item) => (item.id === id ? { ...item, ...payload } : item)),
      })),
    remove: (id) =>
      setState((current) => ({
        ...current,
        [key]: current[key].filter((item) => item.id !== id),
      })),
  };
}

export function AppProvider({ children }) {
  const [state, setState] = useState(readStorage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = state.settings.theme;
    document.body.classList.toggle("theme-dark", state.settings.theme === "dark");
  }, [state.settings.theme]);

  const donations = createCrud(setState, "donations");
  const beneficiaries = createCrud(setState, "beneficiaries");
  const events = createCrud(setState, "events");
  const volunteers = createCrud(setState, "volunteers");

  const value = useMemo(
    () => ({
      state,
      donations,
      beneficiaries,
      events,
      volunteers,
      updateSettings: (payload) =>
        setState((current) => ({
          ...current,
          settings: { ...current.settings, ...payload },
        })),
      resetAllData: () => setState(seedData),
    }),
    [state],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}
