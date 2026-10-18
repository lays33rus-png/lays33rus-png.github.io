import { useEffect, useState } from "react";

export default function useMusic() {
  const [cours, setCours] = useState([]);
  const [loadingM, setLoadingM] = useState(true);
  const [errorM, setErrorM] = useState("");
  const [attemptM, setAttemptM] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setLoadingM(true);
    setErrorM("");

    async function load() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}cours.json`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Не удалось загрузить");
        const data = await response.json();
        if (
          !Array.isArray(data) ||
          !data.every(
            (item) =>
              item &&
              Number.isInteger(item.id) &&
              typeof item.title === "string",
          )
        ) {
          throw new Error("Проверьте формат данных");
        }
        if (!controller.signal.aborted) setCours(data);
      } catch (err) {
        if (!controller.signal.aborted) setErrorM(err.message);
        console.log(err.message);
      } finally {
        if (!controller.signal.aborted) setLoadingM(false);
      }
    }
    load();
    return () => controller.abort();
  }, [attemptM]);
  return {
    cours,
    loadingM,
    errorM,
    retryM: () => setAttemptM((value) => value + 1),
  };
}
