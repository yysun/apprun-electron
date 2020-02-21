import { app, Component } from 'apprun';

export default class extends Component {
  state = 'main'

  view = state => <>
    <div>
      {state}
    </div>
  </>
  update = {
  }
}