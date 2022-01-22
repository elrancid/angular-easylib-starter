import { TabRouteInfos } from '@easylib/material';

const pages: TabRouteInfos = {
  home: {
    link: 'home',
    label: 'pages.home',
    icon: 'home',
  },
  users: {
    link: 'users',
    label: 'pages.users',
    icon: 'people',
  },
  user: {
    link: 'user',
    label: 'pages.user',
    icon: 'person',
  },
  groups: {
    link: 'groups',
    label: 'pages.groups',
    icon: 'groups',
  },
  group: {
    link: 'group',
    label: 'pages.group',
    icon: 'group',
  },
  albums: {
    link: 'albums',
    label: 'pages.albums',
    icon: 'photo_library',
  },
  album: {
    link: 'album',
    label: 'pages.album',
    icon: 'photo',
  },
  divided: {
    link: 'divided',
    label: 'pages.divided',
    icon: 'link',
  },
  tabs: {
    link: 'tabs',
    label: 'pages.tabs',
    icon: 'link',
  },
  tabsnav: {
    link: 'tabs-nav',
    label: 'pages.tabs-nav',
    icon: 'link',
  },
  pages: {
    link: 'pages',
    label: 'pages.pages',
    icon: 'link',
  },
  test: {
    link: 'test',
    label: 'pages.test',
    icon: 'link',
  },
  browser: {
    link: 'browser',
    label: 'pages.browser',
    icon: '',
  },
  settings: {
    link: 'settings',
    label: 'pages.settings',
    icon: 'settings',
  },
};

const menu = [
  pages.home,
  pages.users,
  pages.groups,
  pages.albums,
  pages.divided,
  pages.tabs,
  pages.tabsnav,
  pages.pages,
  pages.test,
  pages.browser,
  pages.settings,
];
export { pages, menu };
