import BreadCumb from "@/app/Components/Common/TitleImage";
import Menu from "@/app/Components/ishak/Menu";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/speisekarte-banner.webp"
        Title="Speisekarte"
      ></BreadCumb>
      <Menu />
    </div>
  );
};

export default page;
