// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Página inicial documents */
interface HomepageDocumentData {
  /**
   * Título da página field in *Página inicial*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Slice Zone field in *Página inicial*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Página inicial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Página inicial*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Página inicial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Página inicial → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = CarouselSlice;
/**
 * Página inicial document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
export type AllDocumentTypes = HomepageDocument;
/**
 * Item in Carousel → Items
 *
 */
export interface CarouselSliceDefaultItem {
  /**
   * Título da imagem field in *Carousel → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.items[].imageTitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  imageTitle: prismic.RichTextField;
  /**
   * Imagem field in *Carousel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<CarouselSliceDefaultItem>
>;
/**
 * Slice variation for *Carousel*
 *
 */
type CarouselSliceVariation = CarouselSliceDefault;
/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: `Carousel`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CarouselSlice = prismic.SharedSlice<
  "carousel",
  CarouselSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      AllDocumentTypes,
      CarouselSliceDefaultItem,
      CarouselSliceDefault,
      CarouselSliceVariation,
      CarouselSlice,
    };
  }
}