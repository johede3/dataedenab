"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { faqDetails, faqs } from "../../app/data/faq";
import { getPreposition } from "../../app/utils";
import { replaceCityPlaceholder } from "../Benefits/Benefits";
import SectionTitle from "../Section/SectionTitle";

type Props = {
  city?: string;
};

const FAQ: React.FC<Props> = ({ city }) => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div>
          <SectionTitle>
            <div className="my-3 text-center !leading-snug lg:max-w-sm lg:text-left">{faqDetails.heading}</div>
          </SectionTitle>

          <p className="text-foreground-accent text-center lg:mt-10 lg:text-left">
            {faqDetails.subheading} <br className="hidden md:inline" />
            <a
              href="mailto:"
              className="text-secondary mt-3 block text-center text-xl font-semibold hover:underline lg:text-left lg:text-4xl"
            >
              {faqDetails.contactEmail}
            </a>
          </p>
        </div>

        <div className="mx-auto w-full border-b lg:max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex w-full items-center justify-between border-t px-4 pt-7 text-left text-lg">
                      <span className="text-2xl font-semibold">{faq.question}</span>
                      {open ? (
                        <BiMinus className="text-secondary h-5 w-5" />
                      ) : (
                        <BiPlus className="text-secondary h-5 w-5" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="text-foreground-accent px-4 pt-4 pb-2">
                      {replaceCityPlaceholder(faq.answer, city ? getPreposition(city) : "")}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
