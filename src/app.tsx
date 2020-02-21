// import app from 'apprun';
import Top from './top';
import Left from './left';
import Main from './main';

setTimeout(() => {
  new Top().start('top');
  new Left().start('left');
  new Main().start('main');
}, 100);
