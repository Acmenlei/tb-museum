import { ref } from "vue";
import { useRouter } from "vue-router";

export function useDynasty() {
  const dynastyIdx = ref(0);

  function dynastyChange(idx: number) {
    dynastyIdx.value = idx;
  }

  return {
    dynastyIdx,
    dynastyChange,
  };
}

export function useStyles() {
  const styleIdx = ref(0);

  function styleChange(idx: number) {
    styleIdx.value = idx;
  }

  return {
    styleIdx,
    styleChange,
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
