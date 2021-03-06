import { reactive, onBeforeMount, watch } from "vue";
import { useRoute, useRouter, type LocationQueryRaw, type LocationQueryValue } from "vue-router";
import _ from "lodash";
import { storage } from "@/utils/storage";
import type { PagerInstance } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tryParseJson = (str: any) => {
  try {
    const type = typeof JSON.parse(str);
    if (type === "object" || type === "string") {
      return JSON.parse(str);
    }
  } catch {
    return str;
  }
  return str;
};

export default function () {
  const route = useRoute();
  const router = useRouter();
  const routeName = route.name?.toString() || "";
  const defaultPageSizeStr = storage.get(`pager:${routeName}`, {
    default: "10",
  });
  const defaultPageSize = parseInt(defaultPageSizeStr, 10);

  const filters: LocationQueryRaw = reactive({});
  const pager: PagerInstance = reactive({
    total: 0,
    pageSize: defaultPageSize,
    currentPage: 1,
    onPagerSizeChange: (pageSize: number) => {
      pager.pageSize = pageSize;
      storage.set(`pager:${routeName}`, pageSize.toString());
      pushToQuery({
        pageSize,
      });
    },
    onPagerChange: (page: number) => {
      pager.currentPage = page;
      pushToQuery({
        page,
      });
    },
  });

  const pushToQuery = (obj: LocationQueryRaw) => {
    const query: LocationQueryRaw = {
      ...route.query,
      ...obj,
    };
    router.push({ name: route.name?.toString(), query: query });
  };

  watch(
    () => route.query,
    (query: Record<string, LocationQueryValue | LocationQueryValue[]>) => {
      const pageSize = parseInt(query.pageSize?.toString() || "", 10);
      const page = parseInt(query.page?.toString() || "", 10);
      if (pageSize) {
        pager.pageSize = pageSize;
      }
      if (page) {
        pager.currentPage = page;
      }
      if (getData) getData(pager.currentPage);
    }
  );

  onBeforeMount(() => {
    if (route.query.page) {
      pager.currentPage = parseInt(route.query.page.toString(), 10);
    }
    if (route.query.pageSize) {
      pager.pageSize = parseInt(route.query.pageSize.toString(), 10);
      storage.set(`pager:${routeName}`, route.query.pageSize.toString());
    }
    Object.keys(route.query).forEach((key) => {
      if (key !== "pageSize" && key !== "page") {
        filters[key] = tryParseJson(route.query[key]);
      }
    });
  });

  const onSearch = _.debounce(function () {
    const query = {
      ...filters,
      ...{
        page: 1,
      },
    };
    pushToQuery(query);
  }, 500);

  let getData: (page: number) => void;
  const initGetData = (callback: (page: number) => void) => {
    getData = callback;
  };

  return {
    filters,
    pager,
    initGetData,
    onSearch,
  };
}
