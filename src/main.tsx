import { app, Component } from 'apprun';

export default class extends Component {
  state = ''

  view = state => <>
    <div>
      Hello: {state}
    </div>
    <br/>
    <div>
      <button onclick={()=>app.run('@electron', 'hello', 'from', 'Renderer')}>Hello to Electron Main Process</button>
    </div>
  </>
  update = {
    '#hello': (_, msg) => msg
  }
}