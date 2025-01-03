import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBranchItemHome extends Struct.ComponentSchema {
  collectionName: 'components_shared_branch_item_homes';
  info: {
    displayName: 'BranchItemHome';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedBranchesHome extends Struct.ComponentSchema {
  collectionName: 'components_shared_branches_homes';
  info: {
    description: '';
    displayName: 'BranchesHome';
  };
  attributes: {
    branches: Schema.Attribute.Component<'shared.branch-item-home', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactFormPage extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_form_pages';
  info: {
    displayName: 'ContactFormPage';
  };
  attributes: {
    address: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    companyData: Schema.Attribute.Text;
    mail: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    rodo: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactFormPerson extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_form_people';
  info: {
    description: '';
    displayName: 'ContactFormPerson';
  };
  attributes: {
    person: Schema.Attribute.Component<'shared.person', false>;
    rodo: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_banners';
  info: {
    description: '';
    displayName: 'Home Banner';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeCases extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_cases';
  info: {
    description: '';
    displayName: 'HomeCases';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeCasesItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_cases_items';
  info: {
    description: '';
    displayName: 'HomeCasesItem';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_we_works';
  info: {
    description: '';
    displayName: 'HowWeWork';
  };
  attributes: {
    content: Schema.Attribute.Text;
    content2: Schema.Attribute.Text;
    content3: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    subtitle2: Schema.Attribute.String;
    subtitle3: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLinksWithImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_links_with_images';
  info: {
    description: '';
    displayName: 'LinksWithImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.links-with-image-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedLinksWithImageItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_links_with_image_items';
  info: {
    displayName: 'LinksWithImageItem';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    description: '';
    displayName: 'MenuItem';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.menu-sub-item', true>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedMenuSubItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_sub_items';
  info: {
    displayName: 'MenuSubItem';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedNumberSingleEnter extends Struct.ComponentSchema {
  collectionName: 'components_shared_number_single_enters';
  info: {
    description: '';
    displayName: 'NumberSingleEnter';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedNumbers extends Struct.ComponentSchema {
  collectionName: 'components_shared_numbers';
  info: {
    description: '';
    displayName: 'Numbers';
  };
  attributes: {
    numbers: Schema.Attribute.Component<'shared.number-single-enter', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedPerson extends Struct.ComponentSchema {
  collectionName: 'components_shared_people';
  info: {
    displayName: 'Person';
  };
  attributes: {
    email: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    person: Schema.Attribute.Component<'shared.person', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_with_images';
  info: {
    displayName: 'TextWithImage';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleWithContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_with_contents';
  info: {
    displayName: 'TitleWithContent';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.branch-item-home': SharedBranchItemHome;
      'shared.branches-home': SharedBranchesHome;
      'shared.contact-form-page': SharedContactFormPage;
      'shared.contact-form-person': SharedContactFormPerson;
      'shared.home-banner': SharedHomeBanner;
      'shared.home-cases': SharedHomeCases;
      'shared.home-cases-item': SharedHomeCasesItem;
      'shared.how-we-work': SharedHowWeWork;
      'shared.links-with-image': SharedLinksWithImage;
      'shared.links-with-image-item': SharedLinksWithImageItem;
      'shared.media': SharedMedia;
      'shared.menu-item': SharedMenuItem;
      'shared.menu-sub-item': SharedMenuSubItem;
      'shared.number-single-enter': SharedNumberSingleEnter;
      'shared.numbers': SharedNumbers;
      'shared.person': SharedPerson;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team': SharedTeam;
      'shared.text-with-image': SharedTextWithImage;
      'shared.title-with-content': SharedTitleWithContent;
    }
  }
}
