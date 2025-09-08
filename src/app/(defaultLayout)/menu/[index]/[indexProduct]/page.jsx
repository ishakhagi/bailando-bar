import TitleImage from "@/app/Components/Common/TitleImage";
import { menu_de } from "@/app/Components/ishak/menu_de";
import MenuProduct from "@/app/Components/ishak/MenuProduct";

const MenuPage = async ({ params }) => {
  const { index, indexProduct } = await params;

  const product = menu_de[parseInt(index)].subSections[parseInt(indexProduct)];

  return (
    <div>
      <TitleImage
        bgimg={product.thumbnail}
        Title={product.title}
        subTitle={product.subtitle}
      ></TitleImage>
      <MenuProduct product={product} />
    </div>
  );
};

export default MenuPage;
