import languageOptions from "@/ resource/langOptions";
import React, { useState } from "react";
import { i18n, useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface Props {
  text: string;
}

export default function I18next({ text }: Props) {
  const router = useRouter();
  const { t } = useTranslation("auth");

  const onChangeLangOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    if (lang) i18n?.changeLanguage(lang);
    
  };

  

  return (
    <>
      <div className="p-3">
        <div className="flex justify-start items-center gap-[1rem]">
          <h1 className=" font-mono mb-4">i18next libraray </h1>
          <select
            className="border border-solid border-black p-1"
            onChange={onChangeLangOptions}
          >
            {languageOptions
              ? languageOptions.map((lang, idx) => {
                  return (
                    <option
                      key={idx}
                      value={lang.code}
                    >{`${lang.code.toUpperCase()} (${
                      lang.localizedName ?? "English"
                    })`}</option>
                  );
                })
              : null}
          </select>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h2>Text</h2>
          <article>{t('create_account')}</article>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus quae aliquid in amet pariatur praesentium earum corrupti molestiae quidem voluptatum fuga voluptates nam, ratione vitae vero quasi? Odit, expedita?";

  return {
    props: { text },
  };
}
