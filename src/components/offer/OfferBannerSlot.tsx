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
          <img src={mobileImage} alt={alt} className="block aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
        ) : (
          <Mockup kind={id} />
        )}
      </div>
    </>
  );
}
