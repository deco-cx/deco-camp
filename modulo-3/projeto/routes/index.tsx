import { PageProps, Handlers } from "$fresh/server.ts";

interface VTEXProduct {
  productName: string;
}

interface HomeData {
  products: Array<VTEXProduct>;
}
export const handler: Handlers<HomeData> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const q = url.searchParams.get("q");

    const products = await fetch(
      `https://storecomponents.vtexcommercestable.com.br/api/catalog_system/pub/products/search${
        q ? "/" + q : ""
      }`
    ).then((r) => r.json());

    return ctx.render({ products });
  },
};

export default function Home({ data }: PageProps<HomeData>) {
  const { products } = data;
  return (
    <>
      <div class="p-4 mx-auto max-w-screen-md">
        <ul>
          {products.map(({ productName }) => (
            <li>{productName}</li>
          ))}
        </ul>
        <form method="get" action="">
          <div class="flex flex-row gap-2">
            <input class="border border-black p-1" type="text" name="q" />
            <button type="submit" class="border border-black p-1">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
