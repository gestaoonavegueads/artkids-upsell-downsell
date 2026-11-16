import { Mockup, type MockupKind } from "./Mockups";
import { bannerSlots } from "@/data/bannerSlots";

export function OfferBannerSlot({ id, alt }: { id: MockupKind; alt: string }) {
  const { desktopImage, mobileImage } = bannerSlots[id];
  return (
    <>
      <div className="hidden md:block">
        {desktopImage ? (
          <img src={desktopImage} alt={alt} className="block aspect-[16/6] w-full rounded-3xl object-cover shadow-soft" />
        ) : (
          <Mockup kind={id} />
        )}
      </div>
      <div className="md:hidden">
        {mobileImage ? (
          <img src={mobileImage} alt={alt} className="block h-[44vh] w-full rounded-3xl object-cover object-top shadow-soft sm:h-[50vh]" />
        ) : (
          <Mockup kind={id} />
        )}
      </div>
    </>
  );
}
