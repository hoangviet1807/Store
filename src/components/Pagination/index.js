import React from "react";
import { Pagination } from "antd";
export const Pagination = () => {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};
