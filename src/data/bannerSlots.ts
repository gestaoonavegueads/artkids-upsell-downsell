import type { MockupKind } from "@/components/offer/Mockups";
import u1Desktop from "@/assets/banners/ArtKids_U1_banner_desktop.png.asset.json";
import u1Mobile from "@/assets/banners/ArtKids_U1_banner_mobile.png.asset.json";
import d1Desktop from "@/assets/banners/ArtKids_D1_banner_desktop.png.asset.json";
import d1Mobile from "@/assets/banners/ArtKids_D1_banner_mobile.png.asset.json";
import u2Desktop from "@/assets/banners/ArtKids_U2_banner_desktop.png.asset.json";
import u2Mobile from "@/assets/banners/ArtKids_U2_banner_mobile.png.asset.json";
import d2Desktop from "@/assets/banners/ArtKids_D2_banner_desktop.png.asset.json";
import d2Mobile from "@/assets/banners/ArtKids_D2_banner_mobile.png.asset.json";
import u3Desktop from "@/assets/banners/ArtKids_U3_banner_desktop.png.asset.json";
import u3Mobile from "@/assets/banners/ArtKids_U3_banner_mobile.png.asset.json";
import d3Desktop from "@/assets/banners/ArtKids_D3_banner_desktop.png.asset.json";
import d3Mobile from "@/assets/banners/ArtKids_D3_banner_mobile.png.asset.json";

/**
 * Slots de banner do topo de cada oferta.
 * Enquanto o valor for null, a página mostra o mockup em CSS/SVG (fallback).
 * Para trocar uma arte, suba o novo arquivo como asset e aponte o import aqui.
 * desktopImage = banner largo/horizontal 1200×450 (telas md+); mobileImage = versão vertical 800×1000 (telas menores).
 */
export type BannerSlot = { id: MockupKind; desktopImage: string | null; mobileImage: string | null };

export const bannerSlots: Record<MockupKind, BannerSlot> = {
  u1: { id: "u1", desktopImage: u1Desktop.url, mobileImage: u1Mobile.url },
  d1: { id: "d1", desktopImage: d1Desktop.url, mobileImage: d1Mobile.url },
  u2: { id: "u2", desktopImage: u2Desktop.url, mobileImage: u2Mobile.url },
  d2: { id: "d2", desktopImage: d2Desktop.url, mobileImage: d2Mobile.url },
  u3: { id: "u3", desktopImage: u3Desktop.url, mobileImage: u3Mobile.url },
  d3: { id: "d3", desktopImage: d3Desktop.url, mobileImage: d3Mobile.url },
};
