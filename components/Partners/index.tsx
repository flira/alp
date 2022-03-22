import type { Partner } from "../../types";
import type { NextPage } from "next";
import { contentParser } from "../../modules";

const Partners: NextPage<{ content: string }> = ({ content }) => {
  const items: Partner[] = contentParser(content) as Partner[];
  console.log(items);
  return (
    <section className="partners">

    </section>
  )
}

export default Partners;