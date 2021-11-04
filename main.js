import {html} from '../../asset/js/deps.js';
import {Window} from '../../asset/js/component/mod.js';

export default class Notes extends Window {
    static name = 'notes-app';
    renderBody() {
        return html`
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400;600;700">
            <div class="note">
                <input class="headline" placeholder="Headline">
                <textarea class="content" placeholder="Write note here"></textarea>
            </div>
        `;
    }
}
