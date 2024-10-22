import { getDataByid } from "@/actions/admin/crudActions";
import { useEffect, useState } from "react";

export const useDataItem = <T>(
  endpoint: string,
  id: string,
  initialState: T
) => {
  const [dataItem, setDataItem] = useState(initialState);

  useEffect(() => {
    const getAndSetDataItem = async () => {
      const data: T = await getDataByid(endpoint, id);

      setDataItem(data);
    };

    getAndSetDataItem();
  }, []);

  return {
    dataItem,
  };
};
