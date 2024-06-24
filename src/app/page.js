import qs from "qs";
import {flattenAttributes} from "@/lib/utils"
import { HeroSection } from "@/components/custom/HeroSection";

const homePageQuery = qs.stringify(
  {
    "populate": {
      "blocks": {
        "populate": {
          "Image": {
            "fields": ["url", "alternativeText"]
          },
          "link": {
            "populate": true
          }
        }
      }
    }
  }
  
);


async function getStrapiData(path) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  console.log(url.href);
  try{
    const response  = await fetch(url.href);
    const data = await response.json();
    const flattenedata = flattenAttributes(data);
    console.dir(flattenedata, {depth: null});
    return flattenedata;
  }
  catch(error){
    console.error(error);
  }
}
export default async function Home() {
  const StrapiData = await getStrapiData("/api/Home-page");
  const{Title, description, blocks} = StrapiData;
  return (
    <main >
      <HeroSection data={blocks[0]}/>
    </main>
  );
}
