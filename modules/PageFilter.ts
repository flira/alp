import type { PageResponse } from "../types";

export default class PageFilter {
  private _page: PageResponse | null = null;
  private _title: string = '';
  private _pages: PageResponse[];

  constructor(pages: PageResponse[]) {
    this._pages = pages ? pages : [];
  }

  private _noContent() {
    console.warn('There is no content to be mapped');
  }

  private _resetPage() {
    this._page = null;
    this._title = '';
  }

  filter(pageTitle: string): PageFilter {
    if (!('filter' in this._pages)) {
      console.warn(`"this._page" is not an array.`);
      return this;
    }
    const filteredPages: PageResponse[] =
      this._pages.filter(
        page => new RegExp(pageTitle, 'i').test(page.title.rendered)
      );
    if (!filteredPages.length) {
      console.warn(`Couldn't find page "${pageTitle}".`);
      return this;
    }
    this._title = pageTitle;
    this._page = filteredPages.shift() as PageResponse;
    return this;
  }

  mapContent(): string | void {
    const content = this._page && this._page.content.rendered;
    this._resetPage();
    return content ? content : this._noContent();
  }

  mapMeta(): Object | void {
    const content: Object | false = this._page &&
      JSON.parse(decodeURI(this._page.meta[this._title]));
    this._resetPage();
    return content ? content : this._noContent();
  }
}