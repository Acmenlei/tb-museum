import { ref } from "vue";
import { useRouter } from "vue-router";

export function useTab() {
  const tabIdx = ref(0);

  function tabChange(idx: number) {
    tabIdx.value = idx;
  }

  return {
    tabIdx,
    tabChange,
  };
}

export function useCatalogDetail() {
  const router = useRouter();
  function catalogClick(id: number) {
    router.push({ path: "/detail", query: { id } });
  }

  return {
    catalogClick,
  };
}
