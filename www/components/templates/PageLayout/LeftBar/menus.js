import {
  JsIcon,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  ReduxIcon,
  GitIcon,
  DockerIcon,
  CodeIcon,
} from 'components/atoms/Icon/languages'
import { AboutMeIcon } from 'components/atoms/Icon'

import PrefixBorderIcon from './PrefixBorderIcon'

const menus = [
  {
    id: 'js',
    path: '/js',
    icon: JsIcon,
    label: 'Js',
    level: 1,
    children: [
      {
        id: 'js/array',
        path: '/js/array',
        icon: PrefixBorderIcon,
        label: 'Array',
        level: 2,
        children: null,
      },
      {
        id: 'js/object',
        path: '/js/object',
        icon: PrefixBorderIcon,
        label: 'Object',
        level: 2,
        children: null,
      },
      {
        id: 'js/json',
        path: '/js/json',
        icon: PrefixBorderIcon,
        label: 'JSON',
        level: 2,
        children: null,
      },
    ],
  },
  {
    id: 'html',
    path: '/html',
    icon: HtmlIcon,
    label: 'Html',
    level: 1,
    children: null,
  },
  {
    id: 'css',
    path: '/css',
    icon: CssIcon,
    label: 'Css',
    level: 1,
    children: [
      {
        id: 'css/flexbox',
        path: '/css/flexbox',
        icon: PrefixBorderIcon,
        label: 'Flexbox',
        level: 2,
        children: null,
      },
      {
        id: 'css/properties_css_for_text',
        path: '/css/properties_css_for_text',
        icon: PrefixBorderIcon,
        label: 'Properties css for text',
        level: 2,
        children: null,
      },
    ],
  },
  {
    id: 'react',
    path: '/react',
    icon: ReactIcon,
    label: 'React',
    level: 1,
    children: null,
  },
  {
    id: 'redux',
    path: '/redux',
    icon: ReduxIcon,
    label: 'Redux',
    level: 1,
    children: null,
  },
  {
    id: 'git',
    path: '/git',
    icon: GitIcon,
    label: 'Git',
    level: 1,
    children: [
      {
        id: 'git/basic_commands',
        path: '/git/basic_commands',
        icon: PrefixBorderIcon,
        label: 'Các lệnh cơ bản',
        level: 2,
        children: null,
      },
      {
        id: 'git/manipulate_directory',
        path: '/git/manipulate_directory',
        icon: PrefixBorderIcon,
        label: 'Thao tác thư mục',
        level: 2,
        children: null,
      },
    ],
  },
  {
    id: 'docker',
    path: '/docker',
    icon: DockerIcon,
    label: 'Docker',
    level: 1,
    children: null,
  },
  {
    id: 'other',
    path: '/other',
    icon: CodeIcon,
    label: 'Other',
    level: 1,
    children: null,
  },
  {
    id: 'about',
    path: '/about',
    icon: AboutMeIcon,
    label: 'About Me',
    level: 1,
    children: null,
  },
]

export default menus