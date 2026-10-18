import { useEffect, useState } from "react";

export default function usePrice() {
  const [price, setPrice] = useState([]);
  const [loadingP, setLoadingP] = useState([true]);
  const [errorP, setErrorP] = useState([""]);
  const [attemptP, setAttemptP] = useState([0]);

  useEffect(() => {
    const controller = new AbortController();

    setLoadingP(true);
    setErrorP("");

    async function load() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}price.json`, {
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
              typeof item.category === "string" &&
              typeof item.title === "string" &&
              typeof item.duration === "string" &&
              typeof item.price === "number",
          )
        ) {
          throw new Error("Проверьте формат данных");
        }
        if (!controller.signal.aborted) setPrice(data);
      } catch (err) {
        if (!controller.signal.aborted) setErrorP(err.message);
        console.log(err.message);
      } finally {
        if (!controller.signal.aborted) setLoadingP(false);
      }
    }
    load();
    return () => controller.abort();
  }, [attemptP]);
  return {
    
    price,
    loadingP,
    errorP,
    retryP: () => setAttemptP((value) => value + 1),
  };
}
