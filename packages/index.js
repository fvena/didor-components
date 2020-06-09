import deepmerge from 'deepmerge';
import Defaults from './defaults';

import Avatar from './Avatar';
import Button from './Button';
import Cell from './Cell';
import CellGroup from './CellGroup';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import Col from './Col';
import Container from './Container';
import Dialog from './Dialog';
import Feedback from './Feedback';
import Fieldset from './Fieldset';
import Input from './Input';
import Loading from './Loading';
import Popup from './Popup';
import Row from './Row';
import Switch from './Switch';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';
import Toast from './Toast';

import './design/main.scss';

const Components = {
  Avatar,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Dialog,
  Feedback,
  Fieldset,
  Input,
  Loading,
  Popup,
  Row,
  Switch,
  TabBar,
  TabBarItem,
};

const install = (Vue, opts = {}) => {
  const prefix = 'dd';

  Object.keys(Components).forEach(name => {
    const componentName = `${prefix}${name}`;
    Vue.component(componentName, Components[name]);
  });

  Vue.prototype.$DIDOR = deepmerge(Defaults, opts);

  Vue.prototype.$toast = Toast;
};

// Automatically install Didor UI if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install, ...Components };
