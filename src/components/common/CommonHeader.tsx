import Link from "next/link";
import headerData from "@/utils/mock/headerData.json";
import CommonLogo from "@/components/common/CommonLogo";

export default function CommonHeader() {
  return (
    <main className="flex justify-between items-center container mx-auto pt-4">
      <CommonLogo />
      <section className="">
        <ul className="flex items-center gap-12 text-darkFontColor">
          {headerData?.options?.map((item: any) => (
            <li key={item.id}>
              <Link href={item?.link} className={`text-xl`}>
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
