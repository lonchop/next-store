import Layout from "@/components/layout";
import { useAppContext } from "@/context/stateWrapper";

export default function FAQ() {
  const { darkMode } = useAppContext();

  return (
    <Layout title="FAQ">
      <div
        className={`mb-[30px] h-auto w-full px-[20px] lg:w-[80ch] lg:px-0 ${
          darkMode
            ? "text-white transition-all duration-300 ease-in-out "
            : "text-black transition-all duration-300 ease-in-out "
        }`}
      >
        <h2 className="text-[4rem] font-bold">FAQ</h2>

        <div>
          <h3 className="mt-[40px] mb-[30px] text-[3rem] font-semibold">
            Do you ship internationally?
          </h3>
          <p className="text-[1.6rem]">
            Yes, we ship internationally. Make sure to enter your entire
            international address in English characters. Don&apost forget the
            Postal Code!
          </p>
          <h3 className="mt-[40px] mb-[30px] text-[3rem] font-semibold">
            How much does shipping cost?
          </h3>
          <p className="text-[1.6rem]">
            It really depends on what/how much you order. Shipping ranges
            anywhere between $3 and $$$.
          </p>
          <h3 className="mt-[40px] mb-[30px] text-[3rem] font-semibold">
            Can I exchange an item for a different size?
          </h3>
          <p className="text-[1.6rem]">
            Yes. We want happy customers. If your gear doesn&apost fit as
            expected, we&aposll be happy to exchange it for a different size.
            Contact us and we&aposll help you get squared away.
          </p>
          <h3 className="mt-[60px] mb-[30px] text-[3rem] font-semibold">
            Where is my package? The tracking information hasn&apost updated in
            a long time. Can you tell me where it is?
          </h3>

          <h4 className="mt-[20px] mb-[10px] text-[2rem] font-medium">
            For customers in North America:{" "}
          </h4>
          <p className="my-[10px] text-[1.6rem]">
            We only see the same tracking information as you. Domestic packages
            should be received within two weeks of shipping confirmation. Please
            contact us if you are a US customer and have not received your order
            after two weeks.
          </p>

          <h4 className="mt-[20px] mb-[10px] text-[2rem] font-medium">
            For international customers outside of the Americas:{" "}
          </h4>
          <p className="my-[10px] text-[1.6rem]">
            We only see the same tracking information as you. International
            orders take much longer for shipping and processing. In some cases
            international orders can take up to 8 weeks from departure of the US
            to be delivered. If the tracking information was last in the US and
            hasn&apost updated recently, it is more than likely still making its
            way there. Once it arrives at that next destination, the package
            will be scanned and the tracking information will update. If it has
            been over 8 weeks since it has been updated, let us know and we can
            try shipping your order again at no additional cost to you.
          </p>
        </div>
      </div>
    </Layout>
  );
}
